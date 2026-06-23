import express from "express";
import {
  getPublications,
} from "../controllers/publicationController.js";

const router = express.Router();

router.get("/", getPublications);

export default router;