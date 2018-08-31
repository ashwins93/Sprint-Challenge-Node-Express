const express = require('express');
const logger = require('morgan');
const helmet = require('helment');
const cors = require('cors');

const app = express();

// Global Middleware config
app.use(logger('short'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 5000, () =>
  console.log(`
===Server running on port ${process.env.PORT || 5000}===
`),
);
