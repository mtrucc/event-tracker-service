// Express
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

// 端口号
const port = 3001;

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true,
  })
);

app.use(express.json({ limit: '100mb', extended: true }));

app.use(
  express.urlencoded({ limit: '100mb', extended: true, parameterLimit: 50000 })
);

const whitelist = [
  'http://localhost:3000',
];

const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) return callback(null, true);

    callback(null, true);
  },
};

app.use(cors(corsOptions));

// 数据库
const { Sequelize, Op } = require('sequelize');
const { sqlConfig } = require('./config');
const initModels = require('./models');

const sequelize = new Sequelize(
  sqlConfig.database,
  sqlConfig.username,
  sqlConfig.password,
  { ...sqlConfig }
);

const { ErrorLog, EventLog } = initModels(sequelize);

app.post('/event-tracking', function (req, res, next) {
  let formData = req.body;
  EventLog.create(formData);
  res.json({
    status: 200,
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
