let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.static("public"));

app.listen(3000, () => console.log("Test app listening on port 3000!"));
