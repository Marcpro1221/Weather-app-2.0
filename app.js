
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


// Setup __dirname equivalent for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from "public"
app.use(express.static(__dirname));
const apiKey = '2d27b92d893624c5ab449793a5d82e30'
// Serve index.html at root
app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/suggestions', async (req, res) =>{
  const city = req.query.city;
  try{
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=${apiKey}`);
    const data = await response.json();
    res.json(data);
    console.log(data);
  }catch (err){
    res.status(500).json({ error: "Failed to fetch suggestions" });
  }
})
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

