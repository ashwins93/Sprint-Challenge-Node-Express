const express = require('express');

const projects = express.Router();
const actions = express.Router();
const apiRouter = express.Router();

const helpers = require('./helpers');
const { asyncCatcher } = helpers;

projects
  .route('/')
  .get(asyncCatcher(helpers.getAllProjects))
  .post(asyncCatcher(helpers.addProject));

projects
  .route('/:id')
  .get(asyncCatcher(helpers.getOneProject))
  .put(asyncCatcher(helpers.updateProject))
  .delete(asyncCatcher(helpers.removeProject));

projects.route('/:id/actions').get(asyncCatcher(helpers.getProjectActions));

actions
  .route('/')
  .get(asyncCatcher(helpers.getAllActions))
  .post(asyncCatcher(helpers.addAction));

actions
  .route('/:id')
  .get(asyncCatcher(helpers.getOneAction))
  .put(asyncCatcher(helpers.updateAction));

apiRouter.use('/projects', projects);
apiRouter.use('/actions', actions);

module.exports = apiRouter;
