const express = require ("express");
const app = express.app()

const teste =(req, res) => {
    res.send("Back-end respondendo");
}

app.get("/", teste);
app.post("/inventario", create);
app.get("/inventario", read);

const express = require("express");
const router = express.Router();

const Item = require("./controllers/idem");

module.exports = router;