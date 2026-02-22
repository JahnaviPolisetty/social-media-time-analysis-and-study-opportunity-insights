// Smart Timetable Generator Step (SAFE VERSION)
;(async () => {
  try {
    // ✅ Safe defaults
    const studyHours = Number(getContext("study_hours") || 5)
    const subjects = getContext("subjects") || "Data Structures, Java, DBMS"
    const weakSubjects = getContext("weak_subjects") || "DBMS"
    const examDates = getContext("exam_dates") || "In 10 days"

    console.log("Generating study timetable for the student.")

    const aiPrompt = `Create a smart daily timetable with these details:
Available study hours: ${studyHours}
Subjects: ${subjects}
Weak subjects: ${weakSubjects}
Exam dates: ${examDates}

Include:
• Study sessions
• Breaks
• Revision slots
• Skill-building time

Format as a clear timetable.`

    const aiResult = await TurboticOpenAI(
      [
        { role: "system", content: "You are a detail-oriented academic timetable coach." },
        { role: "user", content: aiPrompt }
      ],
      { model: "gpt-4.1", temperature: 0 }
    )

    setContext("daily_timetable", aiResult.content)

    console.log("Generated daily timetable:", aiResult.content)
  } catch (e) {
    console.error("Error in Timetable Generator:", e)
  }
})()