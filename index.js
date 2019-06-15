const app = require('express')();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello calc app')
});

http.listen(PORT, () => console.log(`Now serving on port ${PORT}`));
