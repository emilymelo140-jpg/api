const express = require('express');

const app = express();
app.use(express.json());

app.get('/alunos',(reg,res)=>{
    res.send("lendo dados do banco")
})

app.post("/aluno", (req,res) => {
   res.send(`Nome: ${req.body.Nome} Idade: ${req.body.Idade}`)

})
app.listen(3000, () => {
  console.log("serviço rodando na porta 3000")
})

const alunos = [
{"nome": "Emilao","idade", "genero", "CPF"}
{"nome": "Misão","idade", "genero", "CPF" }
{"nome": "Lyrao","idade", "genero" , "CPF"}
{"nome": "Juliao","idade", "genero", "CPF"}
{"nome": "Itallozao","idade","genero", "CPF"}
]


