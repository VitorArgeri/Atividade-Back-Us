import { Router } from "express";

// Lista de importação das rotas do projeto
import randomRoutes from "./random.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Texto" });
});

// Lista de uso das rotas do projeto
routes.use("/random", randomRoutes);

export default routes;