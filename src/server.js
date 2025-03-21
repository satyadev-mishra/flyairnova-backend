import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

import orderDetailsRoutes from "./routes/order/order.route.js";

dotenv.config({
  path: "./.env",
});

app.use(express.json());

app.use(cors());

// orders Routes

app.use("/api/orderdetails", orderDetailsRoutes);

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error(`Server: Error !!! ${error}`);
      throw error;
    });
    app.listen(process.env.PORT || 8000, (req, res) => {
      console.log("listining on port :" + process.env.PORT);
    });
  })
  .catch((error) => {
    console.error(`MONGODB: connection failed !!! ${error}`);
  });

app.get("/", (req, res) => {
  res.send("<h1>Hello this is Cactus Backend</h1>");
});

app.post("/api/order", (req, res) => {
  const data = req.body || "Could not get the data";
});

app.get("/api/order", (req, res) => {
  res.json(data);
});

app.post("/auth/login", (req, res) => {
  const data = req.body || "Could not get the data";
  console.log(data);
  res.json({
    success: true,
    data: [
      { token: "78r7ehriut387982787rtfgegytfr387ywr8732iuebjnbjhdgfieuf972" },
    ],
  });
});
