import express from "express";
import {
  createOrder,
  getOrders,
} from "../../controller/order/order.controller.js";

const orderRoutes = express.Router();

orderRoutes.post("/", createOrder); // Create order
orderRoutes.get("/", getOrders); // Get all orders

export default orderRoutes;
