# Backend + Audio Integration Log  
Radhyyah Hossain Notes to remember

keeping notes of what i worked on so i don’t forget  

---

## goal  
get a backend working that takes generated story text, sends it to elevenlabs, and returns an mp3 file  
also connect it to the frontend so the audio plays when you click a button  

---

## stack  
- express + node (replit)  
- elevenlabs api  
- axios + fs  
- replit secrets  
- frontend is nextjs (vercel)  
- used postman to test  

---

## backend stuff  
- made a /convert endpoint that takes text and sends it to elevenlabs  
- used axios post request with my voice id (uju3wxzG5OhpWcoi3SMy)  
- saved the audio as output.mp3 and returned it as a download  

---

## bugs + weird stuff  
- got 500 errors at first, turns out elevenlabs needed specific headers  
- tried dotenv + .env file, api key kept coming up undefined  
- switched to replit secrets, still didn’t work at first  
- finally worked after restarting replit and removing dotenv completely  

---

## connecting to frontend  
- added convert to audio button in the result page  
- sent the generated story text to backend with fetch  
- response plays in audio preview  
- had to manually wake up replit server because it sleeps sometimes  
- got it working after all that  
