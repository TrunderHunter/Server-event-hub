const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;

app.get("/auth/login/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error starting the server on port ${PORT}`, err);
  } else {
    console.log(`Server started on port http://localhost:${PORT}`);
  }
});
d;
