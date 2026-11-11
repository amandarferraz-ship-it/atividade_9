
import express from "express";

import {
    cadastrarAmostra,
    listarAmostras,
    buscarAmostra,
    excluirAmostra
} from "../controller/amostraController.js";

const router = express.Router();

router.post("/", cadastrarAmostra);

router.get("/", listarAmostras);

router.get("/:indice", buscarAmostra);

router.delete("/:indice", excluirAmostra);

export default router;
