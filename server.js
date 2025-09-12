import express from "express";
import barbieRoutes from "./routes/barbieRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/barbies", barbieRoutes);

app.get("/", (req, res) => {
    res.send("🩰 API da Barbie funcionando!");
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http:localhost:${PORT}`);
});