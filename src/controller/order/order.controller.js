import { Order } from "../../models/order/order.model.js";

// Create Order (Stores Entire Nested Data)
export const createOrder = async (req, res) => {
  try {
    const data = req.body;

    if (!data || !data.orderNo) {
      return res
        .status(400)
        .json({ success: false, message: "Order data is required" });
    }

    // Check if orderNo already exists
    const existingOrder = await Order.findOne({ orderNo: data.orderNo });
    if (existingOrder) {
      return res
        .status(400)
        .json({ success: false, message: "OrderNo already exists" });
    }

    // Save the order
    const newOrder = new Order(data);
    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

// Get All Orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

// Get Order by OrderNo

// Get Order by OrderNo
export const getOrderByOrderNo = async (req, res) => {
  try {
    const { orderNo } = req.params;
    const order = await Order.findOne({ orderNo });

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

// Get Specific Style from an Order
export const getStyleByOrderNoAndStyleNo = async (req, res) => {
  try {
    const { orderNo, styleNo } = req.params;

    // Find the order
    const order = await Order.findOne({ orderNo });
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    // Find the style inside the order
    const style = order.styles.find((s) => s.styleNo === styleNo);
    if (!style) {
      return res
        .status(404)
        .json({ success: false, message: "Style not found in this order" });
    }

    res.status(200).json({ success: true, style });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};
