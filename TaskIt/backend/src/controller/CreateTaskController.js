
const Task = require('../model/Task')
const ApiError = require('../error/ApiError');

module.exports = {
    async createTask(req, res, next) {

        try {
            const { description } = req.body;
            const completed = false;

            if (!description || description.trim().length === 0) {

                next(ApiError.badRequest("description field is required, should not be empty"))
                return;
            }

            const created_at = new Date()
            const updated_at = new Date()

            const task = await Task.create({ description, completed, created_at, updated_at })


            return res.status(201).send({ message: "Task created succesfully" })
        }
        catch (err) {
            next(err)
        }

    }


}