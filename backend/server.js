const express = require("express");
const { connectDB, env } = require("./config");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes");

connectDB();

const app = express();

// ✅ Security Middleware
app.use(helmet());
app.use(cors({
  origin: env.CORS_ORIGIN || "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));
app.use(express.json());

// ✅ Request Logging
app.use(morgan("dev"));

// ✅ Base Route
app.get("/", (req, res) => {
  res.send("API is running securely...");
});

// ✅ API Routes
app.use("/api/v1", routes);

// ✅ Error Handling (extra security)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// ✅ Server
const PORT = env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
