const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8000;

app.use("/hello", (req, res) => {
  res.json("Hello from backend!");
});
// always do this step after route config or else it can override the routes
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html")); // create relative path, __dirname is current directory
  });
}

app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}`);
});
