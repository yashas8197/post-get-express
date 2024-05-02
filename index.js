const express = require("express");

const app = express();

app.use(express.json());

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },

  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

app.get("/", (req, res) => {
  res.send("Hello, Express server.");
});

app.post("/books", (req, res) => {
  const newBook = req.body;

  if (!newBook.title || !newBook.author || !newBook.year) {
    res.status(400).json({ error: "title, author and year are required" });
  } else {
    books.push(newBook);
    res.status(201).json({ message: "Car added successfully", books: newBook });
  }
});

const todos = [{ id: 1, title: "Water the plants", day: "Saturday" }];

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  const newTodos = req.body;

  if (!newTodos.title || !newTodos.day) {
    res.status(400).json({ error: "title, author and year are required" });
  } else {
    todos.push(newTodos);
    res
      .status(201)
      .json({ message: "Todos added successfully", todos: newTodos });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
