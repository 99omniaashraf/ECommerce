// استيراد الحزم المطلوبة
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// تحميل متغيرات البيئة من .env
dotenv.config();

// إنشاء تطبيق Express
const app = express();

// إضافة Middlewares
app.use(express.json()); // لفهم طلبات JSON
app.use(cors()); // للسماح بالوصول من مصادر خارجية

// اتصال بـ MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });

// إنشاء مسار تجريبي لاختبار الخادم
app.get("/", (req, res) => {
  res.send("API is running...");
});

// استيراد المسارات الأخرى (إن وجدت)
const exampleRoutes = require("./routes/example");
app.use("/api/example", exampleRoutes);

// بدء الخادم
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
