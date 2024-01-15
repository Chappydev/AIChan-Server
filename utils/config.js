require("dotenv").config();

const PORT = process.env.PORT;
const OPENAI_KEY = process.env.OPENAI_KEY;

module.exports = {
  PORT,
  OPENAI_KEY,
};
