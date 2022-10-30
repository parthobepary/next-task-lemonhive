import mongoose from "mongoose";

if (mongoose.Connection.readyState !== 4) {
  mongoose.connect('mongodb://localhost:27017/demo');
}
