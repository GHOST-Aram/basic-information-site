const express = require('express')
const app =  express()
const path = require('path')

class Server{
    listen = (port) =>{
        app.listen(port,
            ()=>console.log(`Server running at http://localhost:${port}`)
        )
    }

    render = (url, filepath) =>{
        app.get(url, (request, response) =>{
            response.status(200)
            .sendFile(path.join(__dirname, 'templates', filepath))
        }) 
    }
    
    redirect = (url, to) =>{
        app.get(url, (request, response) =>{
            response.status(301).redirect(to)
        })
    }
    
    send404 = (filepath) =>{
        app.use((request, response) =>{
            response.status(404)
            .sendFile(path.join(__dirname, 'templates', filepath))
        })
    }

}

module.exports = Server