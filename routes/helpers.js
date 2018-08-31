const projectsDb = require('../data/helpers/projectModel');
const actionsDb = require('../data/helpers/actionModel');

module.exports = {
  asyncCatcher: function asyncCatcher(fn) {
    return function(req, res, next) {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  },

  getAllProjects: async function getAllProjects(req, res) {
    const data = await projectsDb.get();
    res.status(200).json(data);
  },

  getOneProject: async function getOneProject(req, res) {
    const data = await projectsDb.get(req.params.id);
    if (!data) {
      res
        .status(404)
        .json({ message: 'The project with the requested id cannot be found' });
    }
    res.status(200).json(data);
  },
};