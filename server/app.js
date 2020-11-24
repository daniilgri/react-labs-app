const express = require("express");
const { config } = require("dotenv");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const cors = require("cors");

const { authRoutes } = require("./routes/authRoutes");

config();

const serviceAccount = require("./secretKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DB_URL,
});

const PORT = +process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200,
  })
);
app.use(bodyParser.json());
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
