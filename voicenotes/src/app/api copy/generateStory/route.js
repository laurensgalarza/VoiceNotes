//route.js that configures the openrouter api call
export async function POST(req) {
    const { prompt } = await req.json();
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
        "Authorization": "Bearer ${process.env.local.OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    },
        body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        messages: [
            {
            role: "user",
            content: prompt
            }
    ]
    })
    })

    const data = await response.json();
    return Response.json(data)
}