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

