const express = require("express");
const axios = require("axios");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/convert", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).send("Missing text.");

  try {
    const response = await axios.post(
      "https://api.elevenlabs.io/v1/text-to-speech/uju3wxzG5OhpWcoi3SMy",
      {
        text: text,
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      },
      {
        headers: {
          "xi-api-key": process.env.ELEVENLABS_API_KEY,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      },
    );

    const filePath = "output.mp3";
    fs.writeFileSync(filePath, response.data);

    res.set({
      "Content-Type": "audio/mpeg",
      "Content-Disposition": 'attachment; filename="output.mp3"',
    });
    res.sendFile(__dirname + "/" + filePath);
  } catch (err) {
    console.error("FULL ERROR:", err.response?.data?.toString() || err.message);
    res.status(500).send("TTS failed.");
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
