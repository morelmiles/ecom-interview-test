const User = require("../models/user.model");
const errorHandler = require("./../helpers/errorFormatter");
const extend = require("lodash/extend");

//Create the user and save the details to the database
const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(200).json({
      message: "Successfully created an account!",
    });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

/**
 * Please note that not all of these routes should be customer facing,
 * Are for the admin side
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @param {*} id
 * @returns
 */

//List a user by the ID

const userByID = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user)
      return res.status("400").json({
        error: "User not found",
      });
    req.profile = user;
    next();
  } catch (err) {
    return res.status("400").json({ error: "Could not retrieve user" });
  }
};

// List all the users in the database
const listUsers = async (req, res) => {
  try {
    let users = await User.find().select(
      "name email address apartment country postCode phoneNumber email updated created"
    );
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Read the user by an ID
//Do not return the salt and the hashed password
const readUserById = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

// Update a single user
const updateUserById = async (req, res) => {
  try {
    let user = req.profile;
    user = extend(user, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

//Delete user from the database
const deleteUserById = async (req, res) => {
  try {
    let user = req.profile;
    let deletedUser = await user.remove();
    deletedUser.hashed_password = undefined;
    deletedUser.salt = undefined;
    res.json(deletedUser);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  createUser,
  userByID,
  listUsers,
  readUserById,
  updateUserById,
  deleteUserById,
};
