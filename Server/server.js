const express = require('express');
const config = require('./config/mssql');
const cors = require('cors');
const bodyParser = require('body-parser');
const userAccountLoginAndRegisterRoutes = require('./routes/userAccountLoginAndRegisterRoutes');
const clientHomeRoutes = require('./routes/clientHomeRoutes');
const userInfoUserRoutes = require('./routes/userInfoUserRoutes');
const userAccountAndInfoAdminRoutes = require('./routes/userAccountAndInfoAdminRoutes');
const userAccountUserRoutes = require('./routes/userAccountUserRoutes');
const accountLoginAndRegisterRoutes = require('./routes/accountLoginAndRegisterRoutes');
const managerInfoRoutes = require('./routes/managerInfoRoutes');
const managerAccountRoutes = require('./routes/managerAccountRoutes');

const app = express();
//Middlewares

app.use(cors());
app.use(bodyParser.json());


// app.use('/', clientHomeRoutes.routes);
app.use('/register', userAccountLoginAndRegisterRoutes.routes);
app.use('/login', accountLoginAndRegisterRoutes.routes);
app.use('/managerdashboard', userAccountAndInfoAdminRoutes.routes);
app.use('/managerdashboard', managerInfoRoutes.routes);
app.use('/managerdashboard', managerAccountRoutes.routes);
app.use('/userdashboard', userInfoUserRoutes.routes);
app.use('/userdashboard', userAccountUserRoutes.routes);




app.listen(config.port, () => console.log('server is up and listening on http://localhost:' + config.port));