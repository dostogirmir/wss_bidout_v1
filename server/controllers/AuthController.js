import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
    res.status(200).json({ message: "customer register function" });
};
export const login = async (req, res) => {
    res.json({ message: "logged function" });
};