const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const apiRouter = require('./routes');

// Global Middleware config
app.use(logger('short'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Route handling middleware
app.use('/api', apiRouter);
app.use(function catchAllErrorHandler(err, _, res, next) {
  console.error(err);
  res
    .status(500)
    .json({ message: 'Something went wrong, please try again later' });
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`
===Server running on port ${process.env.PORT || 5000}===
`),
);
