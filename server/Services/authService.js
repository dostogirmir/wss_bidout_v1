import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Customer } from '../models/Customer.js';
import envVars from "../util/validateEnv.js";
const emoji = "🙈";
import signale from "signale";

export const customerRegister = async (reqBody) => {
    const {
    firstName,
    lastName,
    email,
    password,
    nidNumber,
    nidImage,
    dob,
    age,
  } = reqBody;
  try {
    // // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create user
    const customer = new Customer({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      nidNumber,
      nidImage,
      dob,
      age,
    });
    // Save user
    await customer.save();
    // Create token
    const token = jwt.sign({ email: customer.email }, envVars.JWT_SECRET);
    return { customer, token };
  } catch (ex) {
    signale.fatal(new Error(ex));
    throw new Error(ex);
  }
};

export const customerLogin = async (email, password) => {
  try {
    // Find customer by email
    const customer = await Customer.findOne({ email });
    if (!customer) {
      throw new Error('Customer not found');
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      throw new Error('Incorrect password');
    }
    // Create token
    const token = jwt.sign({ email: customer.email }, envVars.JWT_SECRET);
    return { customer, token };
  } catch (ex) {
     signale.fatal(new Error(ex));
    throw new Error(ex);
  }
};

export const customerLogout = async () => {
  try {
    // Remove token
    return { message: 'Logout successful' };
  } catch (error) {
    console.error(error);
    throw new Error('Error logging out user');
  }
};
