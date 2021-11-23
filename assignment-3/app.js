const express = require('express');

const bodyParser = require('body-parser');

const shopRouter = require('./routes/shop');
const userRouter = require('./routes/user');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(userRouter);
app.use(shopRouter.router);

app.listen(3000);