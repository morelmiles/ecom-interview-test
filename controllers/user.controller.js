import mongoose from "mongoose";
import express from "express";
import userSchema from "./../models/user";

const router = express.Router();

//Create the user and save the details to the database
const createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    emailAddress,
    password,
    address,
    apartment,
    country,
    postalCode,
    phoneNumber,
  } = req.body;

  const newUser = new userSchema({
    firstName,
    lastName,
    emailAddress,
    password,
    address,
    apartment,
    country,
    postalCode,
    phoneNumber,
  });

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//Gets a single product from the database

const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await userSchema.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: errror.message });
  }
};

//Fectch all products
const getProducts = async (req, res) => {
  try {
    const products = await userSchema.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Updates a single user
// const updateUser =async (req, res) => {
//     const {id} = req.params

//     const
// }
