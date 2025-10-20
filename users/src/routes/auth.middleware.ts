import { Request, Response, NextFunction } from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers["x-auth-key"];

  if (!apiKey) {
    return res.status(401).json({ message: "Missing x-auth-key header" });
  }

  if (apiKey !== "123") {
    return res.status(403).json({ message: "Invalid AUTH Key" });
  }

  next();
}
