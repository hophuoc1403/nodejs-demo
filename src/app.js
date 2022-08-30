const hbs = require('express-handlebars');
const express = require('express');
const port = 3000; // create port
const fs = require('fs');
const app = express();
const path = require('path');
const morgan = require('morgan');

const route = require('./routes');

//static url
app.use(express.static(path.join(__dirname, 'public')));

// http logged
app.use(morgan('combined'));

// template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');
route(app);

// app.get("/", (req, res) => {
//   res.render("home");
// });

app.listen(port, () => console.log('listening at http:localhost/' + port));
