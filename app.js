require('dotenv').config()
const express = require( 'express')
const router = require ('./src/routers/Routers.js')
const nunjucks = require('nunjucks')
const app = express()

app.use(express.static('./src/public/img'));
app.use(express.static('./src/public/css'));

nunjucks.configure('src/views', {
    autoescape: true,
    express:app,
    watch: true
})
app.set('view engine', 'njk'); 

app.use(router)

const port = process.env.PORT || 3030

app.listen(port,()=>{
    try {
        console.log('SERVIDOR LIGADO NA PORTA:' + port)
    } catch (error) {
        console.log(error)
    }
})
