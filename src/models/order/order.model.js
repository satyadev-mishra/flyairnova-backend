import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
  size: String,
  quantity: Number,
});

const colorSchema = new mongoose.Schema({
  color: String,
  quantity: Number,
  styleCategories: String,
  sizes: {
    type: [sizeSchema],
    validate: {
      validator: function (sizes) {
        const sizeNames = sizes.map((size) => size.size);
        return new Set(sizeNames).size === sizeNames.length;
      },
      message: "Each size must be unique within a color.",
    },
  },
});

const styleSchema = new mongoose.Schema({
  styleNo: { type: String, required: true },
  colors: {
    type: [colorSchema],
    validate: {
      validator: function (colors) {
        const colorNames = colors.map((color) => color.color);
        return new Set(colorNames).size === colorNames.length;
        style;
      },
      message: "Each color must be unique within a style.",
    },
  },
});

// Order Schema
const orderSchema = new mongoose.Schema({
  orderNo: { type: String, unique: true, required: true },
  merchant: String,
  buyer: String,
  type: String,
  orderDate: Date,
  etdDate: Date,
  etaDate: Date,
  shipmentMode: String,
  deliveryCategories: String,
  exFtyDate: Date,
  specialInstructions: String,
  styles: {
    type: [styleSchema],
    validate: {
      validator: function (styles) {
        const styleNumbers = styles.map((style) => style.styleNo);
        return new Set(styleNumbers).size === styleNumbers.length; // Ensures Unique StyleNo within Order
      },
      message: "Each styleNo must be unique within an order.",
    },
  },
});

export const Order = mongoose.model("Order", orderSchema);
