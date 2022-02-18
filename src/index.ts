import express from "express";
import loginRoute from "./routes/login"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(loginRoute)

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
})
