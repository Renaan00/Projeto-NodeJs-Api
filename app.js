const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const buscaCep = require('./src/functions/buscaCep')
const buscaGitHub = require('./src/functions/buscaGitHub');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/envia-cep', async(req, res)=>{
    const {cep} = req.body
    const resultado = await buscaCep(cep)

    res.render('resultadoCep', {dado: resultado})
})

app.post('/github', async(req, res) => {
    const {user} = req.body;
    const resultado = await buscaGitHub(user);

    res.render('resultadoGit', {dado: resultado})
})

app.listen(8080)

// chave api nasa pDSHOHIscPPBXlg1nywdSCjSAFVWE8lSMP2oDZ9B
//Account Email: renanv.rodrigues00@gmail.com
//Account ID: 6795125f-1e4a-497c-91e3-8b1b96149c84