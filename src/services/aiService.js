// Groq & Gemini Resilient Multi-Key Rotation System for Vice City AI Companion

const getGroqKeys = () => {
  const envKeys = import.meta.env.VITE_GROQ_KEYS;
  if (envKeys) {
    return envKeys.split(",").map((k) => k.trim()).filter(Boolean);
  }
  return [];
};

let currentKeyIndex = 0;

export async function askViceCityAI(prompt, lang = "sw", persona = "radio") {
  const keys = getGroqKeys();
  const systemPrompts = {
    radio:
      lang === "sw"
        ? "Wewe ni Mtangazaji wa Radio ya Vice City (Vice City FM Tanzania). Unajibu kwa Kiswahili chenye msisimko na miondoko ya mtaani ya Tanzania. Ongea kuhusu mchezo wa GTA VI, wahusika Jason na Lucia, magari, na habari za Leonida/Vice City."
        : "You are the energetic Vice City Radio Host (Vice City FM). You answer with 80s & modern Vice City hype, talking about GTA VI, Jason & Lucia, Vice City streets, cars, and Leonida keys.",
    jason:
      lang === "sw"
        ? "Wewe ni Jason Duval kutoka GTA VI. Unajibu kwa Kiswahili cha mtaani, taratibu lakini unajiamini. Unaeleza maisha yako ya Leonida, harakati zako na Lucia."
        : "You are Jason Duval from GTA VI. Speak cool, gritty, cautious yet determined about life in Leonida with Lucia.",
    lucia:
      lang === "sw"
        ? "Wewe ni Lucia Caminos kutoka GTA VI. Unajibu kwa msisimko, akili na ujasiri mkubwa wa mwanamke aliyepitia maisha magumu lakini anajua anachotaka."
        : "You are Lucia Caminos from GTA VI. Speak smart, fierce, loyal, and unapologetic about taking what is yours in Leonida.",
  };

  const selectedSystemPrompt = systemPrompts[persona] || systemPrompts.radio;

  for (let attempt = 0; attempt < keys.length; attempt++) {
    const key = keys[(currentKeyIndex + attempt) % keys.length];
    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: selectedSystemPrompt },
              { role: "user", content: prompt },
            ],
            temperature: 0.7,
            max_tokens: 300,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        currentKeyIndex = (currentKeyIndex + attempt) % keys.length;
        return (
          data.choices[0]?.message?.content ||
          (lang === "sw"
            ? "Mambo ni moto Vice City! Karibu mtaani."
            : "Vice City is buzzing! Welcome to Leonida.")
        );
      }
    } catch (err) {
      console.warn(`Groq Key attempt ${attempt} failed, rotating key...`, err);
    }
  }

  // Fallback if all keys encounter rate limits
  return lang === "sw"
    ? "Vice City FM iko hewani! Tarehe 19 Novemba 2026 mambo yatakuwa moto sana Leonida Keys. Agiza mapema sasa ukitumia M-Pesa!"
    : "Vice City FM is live! November 19, 2026 is going to be legendary in Leonida Keys. Pre-order now!";
}
