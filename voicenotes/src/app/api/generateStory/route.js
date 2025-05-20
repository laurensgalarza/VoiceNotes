//route.js that configures the openrouter api call

let currentStoryOutput = ""
export async function POST(req) {

    try {
        const {
            topic,
            fileTexts, //file array
            gradeLevel,
            storyType,
            genre,
            narration
        } = await req.json();

        const inputText = [];

        if (topic) {
            inputText.push("Topic: " + topic)
        }
        if (Array.isArray(fileTexts) && fileTexts.length > 0) {
            inputText.push("Uploaded File Content: \n" + fileTexts.join("\n\n"))
        }

        if (inputText.length === 0) {
            return new Response(JSON.stringify({ error: "No topic or file uploaded" }), { status: 400 })
        }


        const prompt = `You are an educational storytelling assitant. 
    
    Generate a ${storyType} podcast-style for a ${gradeLevel} student. The story should be in the ${genre} genre, told in the ${narration} narration style, based on the following material:

    ${inputText.join("\n\n")}
    
    Guidelines: 
    - The story must be engaging and easy to follow for the target grade level.
    - Do NOT include titles, speaker labels, scene directions, or sound effects (e.g., "Narrator:", "Title:", "[music fades]", "**bold text**", etc.).
    - Write in plain paragraph form only, suitable for text-to-speech narration.
    - Keep the story under 500 words.

    Begin:
    `
        console.log("OPENROUTER KEY:", process.env.OPENROUTER_API_KEY);
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
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

        console.log("API status:", response.status);
        const data = await response.json();
        console.log("API response:", data);

        const story = data.choices?.[0]?.message?.content;

        if (!story) {
            return new Response(JSON.stringify({ error: "No story generated" }), { status: 500 })
        }

        return new Response(JSON.stringify({ story }), { status: 200 })

    }
    catch (error) {
        alert(error)
        return new Response(JSON.stringify({ error: "Story Generation Failed" }), { status: 500 })
    }
}