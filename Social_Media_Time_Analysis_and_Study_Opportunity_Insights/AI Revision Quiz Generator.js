// AI Revision Quiz Generator Step (SAFE VERSION)
;(async () => {
  try {
    // ✅ Safe defaults
    const topic = getContext("topic") || "Data Structures"
    const difficulty = getContext("difficulty") || "Medium"

    console.log(`Generating revision quiz for ${topic}, difficulty: ${difficulty}`)

    const aiPrompt = `Generate a quick revision quiz.

Topic: ${topic}
Difficulty: ${difficulty}

Include:
- 5 multiple-choice questions (MCQs)
- 2 short-answer questions
- Provide answers at the end`

    const aiResult = await TurboticOpenAI(
      [
        { role: "system", content: "You are a creative academic quiz master." },
        { role: "user", content: aiPrompt }
      ],
      { model: "gpt-4.1", temperature: 0 }
    )

    setContext("revision_quiz", aiResult.content)

    console.log("Quiz generated:", aiResult.content)
  } catch (e) {
    console.error("Error in Revision Quiz Generator:", e)
  }
})()