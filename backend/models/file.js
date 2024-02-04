const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/The_Pustak_DB");

const fileSchema = mongoose.Schema({
  image: {
    type: String,
  },
});

module.exports = mongoose.model("files", fileSchema);
