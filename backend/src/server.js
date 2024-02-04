const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const File = require("../models/file");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), async (req, res) => {
  File.create({ image: req.file.filename })
    .then((result) => res.json(result))
    .catch((err) => console.error(err));

  res.json({
    message: "File uploaded successfully",
    fileId: File._id,
  });
});

app.get("/getImage", async (req, res) => {
  File.find()
    .then((File) => res.json(File))
    .catch((err) => res.json(err));
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
