import { connectDB } from './db/index.js';
import routes from './routes/index.js'; 
import express from "express";

const app = express();

connectDB();

app.use('/api', routes);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de PostgreSQL corriendo");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('🚀 Servidor corriendo'));

