const express = require("express");
const { result } = require("lodash");
const app = express();
const mongoose = require("mongoose");

const BlogRoutes = require("./routes/blogroutes");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/blogs", BlogRoutes);
mongoose.set("strictQuery", true);

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connected to database"), app.listen(3000))
  .catch(() => console.log("error"));

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "my blog 2",
//     snippet: "something about the blog",
//     body: "more about the blog",
//   });
//   blog
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
