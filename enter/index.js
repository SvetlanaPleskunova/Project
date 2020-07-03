const path = require('path')
const express = require('express')
const layout = require('express-layout')
const bodyParser = require('body-parser')
const routes = require('./router')
const app = express()
 
app.set('views', path.join(__dirname, 'views'))//присоединение папки
app.set('view engine', 'ejs')


//const bodyParser = require('body-parser');//для обработки запроса пост
const cookieParser=require('cookie-parser')
const session= require('express-session')
const flash =require('express-flash')


const middleware = [
express.static(path.join(__dirname, 'public')),
bodyParser.urlencoded(),


cookieParser(),
  session({
    secret: 'super-secret-key',
    key: 'super-secret-cookie',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }),
  flash(),
 
]
app.use(middleware)

app.use('/', routes)

app.listen(3000, () => {
console.log(`App running at http://localhost:5000`)
})

