const mongoose = require("mongoose");
const userExerciseDataSchema = new  mongoose.Schema({
  name: {
    type: "string",
    required: "true",
    trim: "true",
  },
  description: {
    type: "string",
    required: "true",
  },
  activityType: {
    type: "string",
    required: "true",
  },
  duration: {
    type: Number,
    required: "true",
  },
  date: {
     type: "string",
     required:"true"
     },
});

module.exports.User = mongoose.model('Exercise', userExerciseDataSchema);
