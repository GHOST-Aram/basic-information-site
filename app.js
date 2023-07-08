const express = require('express')
const PORT  = process.env.PORT || 3000
const app =  express()

app.listen(PORT,()=>console.log(`Server running at http://localhost:${PORT}`))
app.get('/', (request, response) =>{
    response.send('<h1>Home made stuff</h1>')
})