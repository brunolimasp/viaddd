const express = require( 'express')
const router = require ('./src/routers/Routers.js')
const nunnjucks = require('nunjucks')
const app = express()
// const ddd = require('./src/controller/ddd.js')


// app.get('/api', (req, res) => {
//     res.send(a.localizar())
//   })


nunnjucks.configure('src/views', {
    autoescape: true,
    express:app,
    watch: true
})


app.set('view engine', '.njk'); 

 
// app.use('/', (req,res)=>{
//     res.render('index')
// })



app.use(router)

const port = 3030

app.listen(port,()=>{
    try {
        console.log('SERVIDOR LIGADO NA PORTA:' + port)
    } catch (error) {
        console.log(error)
    }

})





