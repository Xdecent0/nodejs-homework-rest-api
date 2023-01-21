const { nanoid } = require("nanoid");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { sendEmail } = require("../../helpers/index");

const { User } = require("../../models/user");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email in use`);
  }
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const newUser = new User({ name, email, avatarURL, verificationToken });
  newUser.setPassword(password);
  await newUser.save();
  const mail = {
    to: email,
    subject: "Подтверждение email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Подтвердите email</a>`,
  };

  await sendEmail(mail);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        name,
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = signup;
