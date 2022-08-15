const express = require('express')
const cors = require('cors')

const app = express()

// Config JSON response
app.use(express.json())

// Solve CORS
app.use(cors({ credential: true, origin:'http://localhost:3001' }))

// Public folder for images
app.use(express.static('public'))

//Routes
const UserRoutes = require('./routes/userRoutes')
const PetRoutes = require('./routes/PetRoutes')

app.use('/users', UserRoutes)
app.use('/pets', PetRoutes)

app.listen(5000)