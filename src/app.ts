
import * as express from "express";
import * as BodyParser from "body-parser";
import * as cors from "cors";
import UserRoutes from "./routes/userRoutes";

const app = express();
app.use(cors());
app.use(BodyParser.json());
app.use("/", UserRoutes);
export default app;