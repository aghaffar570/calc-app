const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 3000;
const io = require('socket.io')(http);
const math = require('mathjs');

app.use(express.static('public'));

io.on('connection', socket => { // listen for user connection
  socket.on('expression', exp => { // listen for expression from FE
    const prepExp = exp.replace('÷', '/').replace('x', '*');
    const result = math.evaluate(prepExp);
    const eq = `${exp} =${result}`;

    io.sockets.emit('equation', eq); // send to every user
    socket.emit('result', result); // send to current user
  })
});

http.listen(PORT, () => console.log(`Now serving on port ${PORT}`));
