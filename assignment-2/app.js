const express = require('express');
const userRouter = require('./routes/store');
const adminRouter = require('./routes/admin');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(userRouter);
app.use(adminRouter);

app.listen(3000);