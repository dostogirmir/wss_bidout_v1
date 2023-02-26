import { customerRegister ,customerLogin,customerLogout } from "../Services/authService.js";

export const register = async (req, res) => {
  try {
    const result = await customerRegister(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await customerLogin(email, password);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    const result = await customerLogout();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};