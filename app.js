
import express from "express";

import amostraRoutes from "./routes/amostraRoutes.js";
import setorRoutes from "./routes/setorRoutes.js";

const app = express();

app.use(express.json());

// Rota de amostras (já existente)
app.use("/amostras", amostraRoutes);

// Nova rota de setores
app.use("/setores", setorRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});