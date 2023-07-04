const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(`/`, rutas)

app.listen(port, () => {
  console.log(`Exmaple app listening at http://localhost:${port}`);
});







