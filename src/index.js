const express = require("express");
require("./db/mongoose");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   console.log(req.method, req.path);
//   next();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server is listening on port  ${port}`);
});
