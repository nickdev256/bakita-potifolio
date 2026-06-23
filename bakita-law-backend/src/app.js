
import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";
import publicationRoutes from "./routes/publicationRoutes.js";

const app = express();

/* Middleware */

app.use(cors());

app.use(express.json());

/* Test Route */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Bakita Law Backend Running",
  });
});

/* API Routes */

app.use(
  "/api/contacts",
  contactRoutes
);

app.use(
  "/api/newsletter",
  newsletterRoutes
);

app.use(
  "/api/publications",
  publicationRoutes
);

export default app;

