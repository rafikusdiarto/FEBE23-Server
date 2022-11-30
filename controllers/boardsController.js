const User = require("../models/userModels")

const allAccess = async (req, res) => {
  try {
    const users = await User.find().select("email username role")
    
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data."
    })
  }
}

const userBoard = async (req, res) => {
  try {
    const users = await User.find(
      { role: "USER" },
    ).select("email username role")

    res.status(200).send(users)
  }
  catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data."
    })
  }
}

const adminBoard = async (req, res) => {
  try {
    const users = await User.find(
      { role: "ADMIN" },
    ).select("email username role")

    res.status(200).send(users)
  }
  catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data."
    })
  }
}


module.exports = {
  allAccess,
  userBoard,
  adminBoard,
}