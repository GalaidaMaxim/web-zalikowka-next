import { Schema, model, models } from "mongoose";
import Subject from "./Subject";

const { SubjectSchema } = Subject;

const StudentSchema = new Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  sername: {
    type: String,
    trim: true,
    require: true,
  },
  secondName: {
    type: String,
    trim: true,
    require: true,
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "department",
    require: true,
  },
  educationPlan: {
    type: Schema.Types.ObjectId,
    ref: "educationPlan",
    require: true,
  },
  level: {
    type: String,
    enum: ["бакалавр", "магістр", "молодший бакалавр"],
    default: "бакалавр",
    require: true,
  },
  course: {
    type: Number,
    default: 1,
  },
  status: {
    type: String,
    enum: [
      "навчається",
      "випустився",
      "академічна відаустка",
      "невизначений",
      "відрахований",
    ],
    default: "навчається",
  },
  startYear: {
    type: Number,
    default: 2024,
  },
  ticketCode: {
    type: String,
  },
  token: {
    type: String,
  },
  foreigner: {
    type: Boolean,
    default: false,
  },
  subjects: [SubjectSchema],
});

export default models.student || model("student", StudentSchema);
