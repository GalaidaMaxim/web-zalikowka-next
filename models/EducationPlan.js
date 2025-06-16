import { Schema, model, models } from "mongoose";

const EducationPlan = new Schema({
  name: {
    type: String,
    require: true,
  },
  level: {
    type: String,
    enum: ["бакалавр", "магістр", "молодший бакалавр"],
    default: "бакалавр",
  },
  credits: {
    type: String,
    default: 0,
  },
});
export default models.educationPlan || model("educationPlan", EducationPlan);
