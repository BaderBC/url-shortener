const express = require('express'),
    http = require('http'),
    GUN = require('gun'),
    app = express(),
    server = http.createServer(app),
    gun = GUN({web: server}),
    PORT = 80,
    path = require('path');


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'main-site.html'));
})


app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'redirection.html'));
})


server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
});