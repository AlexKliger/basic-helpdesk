const express =  require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const path = require('path')
const connectDB = require('./config/db')
const apiRoutes = require('./routes/api')
const authRoutes = require('./routes/auth')
require('dotenv').config({ path: './config/.env' })

require('./config/passport')(passport)

connectDB()

const app = express()

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(
    session({
        secret: '123456',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            client: mongoose.connection.getClient(),
            stringify: false
        })
    })
)
app.use(passport.initialize())
app.use(passport.session())

app.use('/api', apiRoutes)
app.use('/auth', authRoutes)

app.get('*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'))
    } catch (err) {
        console.log(err)
    }
})

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})