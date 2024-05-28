const Task = require('../model/Task')
const ApiError = require('../error/ApiError')


module.exports = {
    async getAllTasks(req, res, next) {

        try {
            const task = await Task.find({})
            return res.status(201).json(task)
        }
        catch (err) {
            next(err)
        }

    },

    async getOneTask(req, res, next) {
        try {

            const { id } = req.params
            const task = await Task.findOne({ _id: id })
            if (task === null) {
                next(ApiError.notFound(`Task with id: ${id} not found`))
                return;
            }
            res.status(200).json(task)
        } catch (err) {
            next(err)
        }

    }


}