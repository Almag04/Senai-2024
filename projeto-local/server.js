const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

//Conexão com o SGBD MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'locadora'
});

//Rota de teste
const teste = (req, res) => {
    res.send("Back-end respondendo ");
}

//CRUD - create
const create = (req, res) => {
    let titulo = req.body.titulo;
    let genero = req.body.genero;
    let lancamento = req.body.lancamento;
    let query = `INSERT INTO filmes(titulo, genero, lancamento) VALUE`;
    query += `('${titulo}', '${genero}', '${lancamento}');`;
    con.query(query,(err, result)=>{
        if(err)
            res.redirect("http://127.0.0.1:5500/erro.html?erro=Provalmente o título já está cadastrado&err="+err.code);
        else
            res.redirect("http://127.0.0.1:5500/index.html");
    });
}

const read = (req, res) => {
    con.query("SELECT * FROM Filmes ORDER BY id DESC",(err, result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", teste);
app.post("/filmes", create);
app.get("/filmes", read);

app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});
function deletar() {
    
}