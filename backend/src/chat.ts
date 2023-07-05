export const chat = async (question: string) => {
  return await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      // Authorization: `Bearer ${process.env.OPEN_API_KEY}`,
      Authorization: `Bearer API KEY`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
