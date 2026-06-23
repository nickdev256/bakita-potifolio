
import express from "express";

import {
  getPublications,
  createPublication,
} from "../controllers/publicationController.js";

const router = express.Router();

router.get(
  "/",
  getPublications
);

router.post(
  "/",
  createPublication
);

export default router;

