const express = require('express');

const projects = express.Router();
const actions = express.Router();
const apiRouter = express.Router();

const { asyncCatcher, getAllProjects } = require('./helpers');

projects.route('/').get(asyncCatcher(getAllProjects));

apiRouter.use('/projects', projects);
apiRouter.use('/actions', actions);

module.exports = apiRouter;
