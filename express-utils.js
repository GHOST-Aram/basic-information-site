const express = require('express')
const app =  express()
const path = require('path')

const render = (url, filepath) =>{
    app.get(url, (request, response) =>{
        response.status(200)
        .sendFile(path.join(__dirname, 'templates', filepath))
    }) 
}

const redirect = (url, to) =>{
    app.get(url, (request, response) =>{
        response.status(301).redirect(to)
    })
}

const send404 = (filepath) =>{
    app.use((request, response) =>{
        response.status(404)
        .sendFile(path.join(__dirname, 'templates', filepath))
    })
}

module.exports = {app, render, redirect,send404}