const express = require('express');
const app = express();

app.set("view engine", "ejs");

require('./server/config/db')

app.use(require('./server/pages/router'))

app.use(express.static(__dirname + '/public'))

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});