import { Router } from "express";
import { ProdutoController } from "../Controller/produto.controller";


const router : Router = Router();

// Configurar todas as rotas/URLs/endpoits da aplicação
router.post("/", new ProdutoController().cadastrar)
router.get("/", new ProdutoController().listar)
router.get("/:nome", new ProdutoController().buscar)
router.get("/:nome/apagar", new ProdutoController().apagar)
router.get("/:nome/atualizarP", new ProdutoController().mudarPreco)

export { router }