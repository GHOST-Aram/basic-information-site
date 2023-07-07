const http = require('node:http')
const PORT = process.env.PORT || 5601
const Server = require('./server')
const webServer = new Server()


const server = http.createServer((request, response)=>{
    const filePath = webServer.getFilePath(request.url)
    webServer.render(response, filePath)
})

server.listen(PORT, 'localhost' , () =>{
    console.log(`Server running aT: http://localhost:${PORT}`)
})


