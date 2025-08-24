require('dotenv').config();

// Validate required variables
const requiredEnvVars = [
    "PORT",
    "MONGO_URI",
    "JWT_SECRET_KEY"
];

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    console.warn(`Missing required env variable: ${key}`);
  }
});

const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY
};

module.exports = { env };