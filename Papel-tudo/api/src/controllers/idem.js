const con = require("./connect/connect.js").con;

const create = (req, res) => {
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = req.body.valor;
    let query = `INSERT INTO inventario(nome, descricao, valor) VALUE`;
    query += `('${nome}', '${descricao}', '${valor}');`;
    con.query(query, (err, result) => {
        if (err)
            res.redirect('http://127.0.0.1:5501/front/erro.html?erro=PRODUTO JÁ CADASTRADO&err=' +err.code);
        else
            res.redirect('http://127.0.0.1:5500/front/index.html');
    });
}