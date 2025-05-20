//route.js that configures the openrouter api call

let currentStoryOutput = ""
export async function POST(req) {

    try{
        const {
            topic,
            fileTexts, //file array
            gradeLevel,
            storyType,
            genre,
            narration
        } = await req.json();

    const inputText = [];

    if (topic){
        inputText.push("Topic: " + topic)
    }
    if(Array.isArray(fileTexts) && fileTexts.length > 0){
        inputText.push("Uploaded File Content: \n" + fileTexts.join("\n\n"))
    }

    if (inputText.length === 0){
        return new Response(JSON.stringify({error: "No topic or file uploaded"}), {status: 400})
    }


    const prompt = `You are an educational storytelling assitant. 
    
    Generate a ${storyType} story for a ${gradeLevel} student. The story should be in the ${genre} genre, told in the ${narration} narration style, based on the following material:

    ${inputText.join("\n\n")}
    
    The story should be engaging, accurate, and appropriate for the students level of comprehension. Additionally, the story must be in a Google Text to Speech compatible format.

    Only output the story. Begin:
    `
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

    
    const data = await response.json();
    const story = data.choices?.[0]?.message?.content;
    
    if(!story){
        return new Response(JSON.stringify({error: "No story generated"}), {status: 500})
    }

    return new Response(JSON.stringify({story}), {status:200})

    } 
    catch(error){
        alert(error)
        return new Response(JSON.stringify({error: "Story Generation Failed"}), {status: 500})
    }
}