const UserModel = require("../Models/UserModel")
const jwt = require("jsonwebtoken")

const maxAge = 3 * 24 * 60 * 60

const createToken = (id) => {
  return jwt.sign({ id }, "secret key", {
    expiresIn: maxAge,
  })
}

const handleErrors =(err) => {
  let errors = {email: "", password:""}
  if (err.code = 11000){
    errors.email = "Email is already registered"
    return errors
  }

  if(err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({properties}) => {
      errors[properties.path] = properties.message
    })
  }
  return errors
}

module.exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await UserModel.create({ email, password })
    const token = createToken(user._id)

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: true,
      maxAge: maxAge * 1000,
    })
    res.status(201).json({ user: user._id, created: true })
  } catch (err) {
    console.log(err)
    const errors = handleErrors(err)
    res.json({ errors, created: false })
  }
}

module.exports.login = async (req, res, next) => {}
