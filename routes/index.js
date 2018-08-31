const express = require('express');

const projects = express.Router();
const actions = express.Router();
const apiRouter = express.Router();

const helpers = require('./helpers');
const { asyncCatcher } = helpers;

projects.route('/').get(asyncCatcher(helpers.getAllProjects));

projects.route('/:id').get(asyncCatcher(helpers.getOneProject));

apiRouter.use('/projects', projects);
apiRouter.use('/actions', actions);

module.exports = apiRouter;
