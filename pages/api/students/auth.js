import signUpStudent from "@/actions/signUpStudent";
import { connectToDatabase } from "@/mongoose/mongooseConnect";

export default async function AuthHandler(req, res) {
  try {
    await connectToDatabase();
    const { ticketCode } = req.body;
    const { token, name, sername, secondName, subjects, course, level } =
      await signUpStudent(ticketCode);

    res
      .status(200)
      .json({ token, name, sername, secondName, subjects, course, level });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
}
