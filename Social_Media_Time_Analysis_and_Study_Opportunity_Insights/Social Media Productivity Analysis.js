;(async () => {
  try {
    const socialHours = Number(getContext("social_hours") || 4);

    console.log("Daily social media hours:", socialHours)

    const weeklyWasted = socialHours * 7
    const recoveredStudy = weeklyWasted

    const aiSkillResult = await TurboticOpenAI(
      [
        { role: "system", content: "You are an expert academic coach." },
        { role: "user", content: `A student recovered ${weeklyWasted} hours weekly by reducing social media. List practical skills achievable in that time.` }
      ],
      { model: "gpt-4.1", temperature: 0 }
    )

    const aiMotivationResult = await TurboticOpenAI(
      [
        { role: "system", content: "You are a study motivator." },
        { role: "user", content: `Motivate a student who saved ${weeklyWasted} hours weekly.` }
      ],
      { model: "gpt-4.1", temperature: 0 }
    )

    setContext("weekly_wasted", weeklyWasted)
    setContext("recovered_study", recoveredStudy)
    setContext("skills_suggestion", aiSkillResult.content)
    setContext("motivation_message", aiMotivationResult.content)

  } catch (e) {
    console.error("Error:", e)
  }
})()