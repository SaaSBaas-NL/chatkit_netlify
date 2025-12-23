export default async (req) => {
  if (req.method !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const response = await fetch("https://api.openai.com/v1/chatkit/sessions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: "demo-user",
      workflow: { id: process.env.CHATKIT_WORKFLOW_ID }
    })
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
