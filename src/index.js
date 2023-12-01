const app = require("./app");
const port = process.env.PORT;

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server is listening on port  ${port}`);
});
