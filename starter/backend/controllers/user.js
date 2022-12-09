/*exports.home = (req, res) => {
  res.send("welcome from user home");
}; //function used in routes/user*/
const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation");
const { generateToken } = require("../helpers/tokens");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { sendVerificationEmail } = require("../helpers/mailer");
exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Invalid email address",
      }); //return to stop our code
    }
    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message:
          "The email address already exists, try with a different email.",
      });
    }

    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        messsage: "First name must be between 3 and 30 characters.",
      });
    }

    if (!validateLength(last_name, 3, 30)) {
      return res.status(400).json({
        messsage: "Last name must be between 3 and 30 characters.",
      });
    }

    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
        messsage: "Password must be atleast 6 characters.",
      });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);
    //console.log(cryptedPassword);

    let tempUsername = first_name + last_name;
    let newUsername = await validateUsername(tempUsername);
    // return; //return for check to not sending into database

    //console.log(validateEmail(email));

    const user = await new User({
      //database wait
      first_name,
      last_name,
      email,
      password: cryptedPassword,
      username: newUsername,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();
    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      "30m"
    );
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.first_name, url);
    //console.log(emailVerificationToken);
    res.json(user);
    /*const token = generateToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: "Register Success ! please activate your email to start",
    });*/
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
