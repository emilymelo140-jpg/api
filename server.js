const express = require('express');
const cors = require('cors')
const app = express();
const corsOptions = {
origin: ['http://localhost:500', 'http://127.0.0.1:5500']
}

app.use(cors(corsOptions))

app.use(express.json());


const app = express();
app.use(express.json());

app.get('/alunos',(reg,res)=>{
    res.send("lendo dados do banco")
})

app.post("/aluno", (req,res) => {
   //res.send(`Nome: ${req.body.Nome} Idade: ${req.body.Idade}`)
   //const {nome,url}= req.body
 const{nome,url_imagem} = req.body
 console.log(nome+""+url_imagem)

})
app.listen(3000, () => {
  console.log("serviço rodando na porta 3000")
})


