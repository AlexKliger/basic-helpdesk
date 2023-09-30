const express =  require('express')
const connectDB = require('./config/db')
const apiRoutes = require('./routes/api')
require('dotenv').config({ path: './config/.env' })

connectDB()

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', apiRoutes)

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})