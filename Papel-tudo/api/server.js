
const mysql = require ("mysql");
const cors = require ("cors");
const bodyParser = require ("body-parser");







const read = (req, res) => {
    con.query("SELECT * FROM item", (err, result) => {
        if(err)
            res.json(err);
        else
            res.json(result);
    })
}

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});