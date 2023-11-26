const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Conten-Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

app.get("/views/", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users });
});

app.set("view engine", "ejs");
app.set("views", "src/views");

// pegando todos usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// pegando somenete um usuario
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// criando um usuario
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//removendo usuario
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userRemoved = await UserModel.findByIdAndRemove(id);
    res.status(200).json(userRemoved);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
