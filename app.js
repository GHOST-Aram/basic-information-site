const Server = require('./express-utils')
const server = new Server()
const PORT  = process.env.PORT || 3000

server.listen(PORT)
server.render('/', 'index.html')
server.render('/about', 'about.html')
server.render('/contact-me', 'contact-me.html')
server.redirect('/about-us', '/about')
server.send404('404.html')


