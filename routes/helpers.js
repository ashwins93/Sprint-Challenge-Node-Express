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
    res.status(200).json({ data });
  },

  getOneProject: async function getOneProject(req, res) {
    const data = await projectsDb.get(req.params.id);
    if (!data) {
      return res
        .status(404)
        .json({ message: 'The project with the requested id cannot be found' });
    }
    res.status(200).json({ data });
  },

  addProject: async function addProject(req, res) {
    const { name, description } = req.body;

    if (!name || !description)
      return res.status(400).json({ message: 'Name or description missing ' });

    const data = await projectsDb.insert({ name, description });
    res.status(201).json({ message: 'Project created succesfully!', data });
  },

  updateProject: async function updateProject(req, res) {
    const { name, description, completed } = req.body;

    if (!name || !description)
      return res.status(400).json({ message: 'Name or description missing ' });

    const updateObj = { name, description };

    if (completed !== undefined) updateObj.completed = completed;

    const data = await projectsDb.update(req.params.id, updateObj);

    if (!data)
      return res
        .status(404)
        .json({ message: 'The project with specified ID cannot be found' });

    res.status(200).json({ message: 'Update successful', data });
  },

  removeProject: async function removeProject(req, res) {
    const data = await projectsDb.remove(req.params.id);
    if (!data)
      return res
        .status(404)
        .json({ message: 'The project with specified ID cannot be found' });

    res
      .status(200)
      .json({ message: 'Project(s) removed successfully', count: data });
  },

  getProjectActions: async function getProjectActions(req, res) {
    const data = await projectsDb.getProjectActions(req.params.id);

    if (!data)
      return res
        .status(404)
        .json({ message: 'The project with specified ID cannot be found' });

    res.status(200).json({ data });
  },

  getAllActions: async function getAllActions(req, res) {
    const data = await actionsDb.get();
    res.status(200).json({ data });
  },
};
