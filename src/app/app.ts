// /app/app.ts

import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/test", (req: Request, res: Response) => {
  res.send("Hello, World! test route");
});

// Additional routes and middleware can be added here

export default app;
