# Backend Work Log – Voice-to-Audio Converter

### I'm writing logs since its easier to keep track of the important things needed for this project + gives a layout of what I did.

## Goal
Build a backend API using Node.js and Express that receives text, sends it to ElevenLabs TTS, and returns a downloadable mp3 file.

---

## Tech Stack
- Backend: Node.js, Express.js
- API: ElevenLabs Text-to-Speech
- Hosting: Replit
- Testing: Postman
- Secrets: Replit Secrets tool
- Version Control: Git + GitHub

---

## Development Log

- Set up Express project in Replit
- Created /convert POST endpoint
- Installed dependencies: axios, fs, cors, dotenv (removed later)

---

## TTS Integration

- Added Axios call to ElevenLabs endpoint
- Used voice ID: uju3wxzG5OhpWcoi3SMy
- Configured headers and request body for ElevenLabs API
- Saved audio buffer response to output.mp3
- Set response headers to return audio as downloadable file

---

## Debugging Issues

- TTS failed with 500 error → discovered ElevenLabs was rejecting the request due to missing headers
- Initial attempts using .env and dotenv → process.env.ELEVENLABS_API_KEY kept showing as undefined
- Tried Replit Secrets tool → still didn’t inject key properly at first
- Removed dotenv entirely and switched fully to Replit Secrets
- Added .replit file to help Replit load secrets correctly
- API key finally loaded using process.env after Replit reset

---

## Security Fixes

- Temporarily hardcoded API key for testing
- Replaced with process.env.ELEVENLABS_API_KEY once working
- Verified no keys are exposed in the code
- Confirmed secrets load properly without .env

---

## Testing

- Used Postman to send text to /convert
- Confirmed mp3 downloads successfully in response
- Ran multiple test inputs to confirm audio quality and speed

---

## Final Notes

- Backend is hosted and working on Replit
- Ready to connect with frontend on Vercel
- Code pushed to GitHub under separate backend branch