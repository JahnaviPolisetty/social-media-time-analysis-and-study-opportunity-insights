// Exam Booster - Notes Summarizer Step (SAFE VERSION)
;(async () => {
  try {
    // ✅ Safe default notes
    const notes = getContext("notes") || `
Data Structures:
A stack follows LIFO principle.
Queue follows FIFO.
Linked list stores elements using pointers.

Java:
OOP concepts include inheritance, polymorphism, encapsulation.
JVM executes bytecode.
`

    console.log("Summarizing notes for revision.")

    const aiPrompt = `Summarize these notes for a student preparing for exams.

${notes}

Provide:
- Key points
- Important definitions
- Highlight any formulas
- Memory tips`

    const aiResult = await TurboticOpenAI(
      [
        { role: "system", content: "You are a concise exam revision expert." },
        { role: "user", content: aiPrompt }
      ],
      { model: "gpt-4.1", temperature: 0 }
    )

    setContext("notes_summary", aiResult.content)

    console.log("Summary generated:", aiResult.content)
  } catch (e) {
    console.error("Error in Notes Summarizer:", e)
  }
})()