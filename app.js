const express = require( 'express')
const router = require ('./src/routers/Routers.js')
const nunnjucks = require('nunjucks')
const app = express()

app.use(express.static('./src/public/img'));
app.use(express.static('./src/public/css'));
//app.use(express.static('./src/public/js'));
nunnjucks.configure('src/views', {
    autoescape: true,
    express:app,
    watch: true
})
app.use(router)

app.set('view engine', '.html'); 

const port = 3030

app.listen(port,()=>{
    try {
        console.log('SERVIDOR LIGADO NA PORTA:' + port)
    } catch (error) {
        console.log(error)
    }
})