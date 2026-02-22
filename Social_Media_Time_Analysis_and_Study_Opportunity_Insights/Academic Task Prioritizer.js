// Academic Task Prioritizer Step (SAFE VERSION)
;(async () => {
  try {
    // ✅ Safe defaults to prevent failure
    const subjects = getContext("subjects") || "Data Structures, Java, DBMS"
    const examDates = getContext("exam_dates") || "In 10 days"
    const weakSubjects = getContext("weak_subjects") || "DBMS"
    const deadlines = getContext("deadlines") || "Mini project due in 5 days"

    console.log("Prioritizing tasks for subjects:", subjects)

    const aiPrompt = `Student details:
Subjects: ${subjects}
Upcoming exams: ${examDates}
Weak subjects: ${weakSubjects}
Assignments due: ${deadlines}

Generate:
1. Priority ranking of tasks
2. Subjects needing urgent focus
3. Recommended daily focus plan (formatted, concise)`

    const aiResult = await TurboticOpenAI(
      [
        { role: "system", content: "You are an expert academic planner." },
        { role: "user", content: aiPrompt }
      ],
      { model: "gpt-4.1", temperature: 0 }
    )

    setContext("academic_priorities", aiResult.content)

    console.log("Academic priorities and plan:", aiResult.content)
  } catch (e) {
    console.error("Error in Academic Task Prioritizer:", e)
  }
})()