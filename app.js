const {
    app, render, redirect, send404
} = require('./express-utils')
const PORT  = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`Server running at http://localhost:${PORT}`))
render('/', 'index.html')
render('/about', 'about.html')
render('/contact-me', 'contact-me.html')
redirect('/about-us', '/about')
send404('404.html')


