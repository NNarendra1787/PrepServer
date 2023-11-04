const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter course title"],
  },
  price: {
    type: Number,
    required: [true, "Please enter course price"],
  },
  description: {
    type: String,
  },
  thumb: String,
  projects: [
    {
      name: String,
      image: String,
      description: String,
    },
  ],
  syllabus: [
    {
      topic: {
        type: String,
      },
      description: {
        type: String,
      },
      image: String,
      duration: {
        type: String,
      },
      content: {
        type: [String],
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Course", courseSchema);
