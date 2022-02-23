const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Auto Restart is working!!!!!!!!!!!! ");
});

const users = [
  { id: 0, name: "sabana", email: "sabana@gmail.com", phone: "017888888888" },
  { id: 1, name: "sabnur", email: "sabana@gmail.com", phone: "017888888888" },
  { id: 2, name: "pabana", email: "sabana@gmail.com", phone: "017888888888" },
  { id: 3, name: "susmita", email: "sabana@gmail.com", phone: "017888888888" },
  { id: 4, name: "lavlu", email: "sabana@gmail.com", phone: "017888888888" },
];
app.get("/users", (req, res) => {
  const searchText = req.query.search;
  if (searchText) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(searchText)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting post", req.body);
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
