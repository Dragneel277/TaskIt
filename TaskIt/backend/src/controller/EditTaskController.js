const Task = require('../model/Task')
const ApiError = require('../error/ApiError')

module.exports = {
    async editTask(req, res, next) {

        try {

            const { id } = req.params
            const taskExists = await Task.findById({ _id: id })
            if (taskExists === null) {
                next(ApiError.notFound(`Task with id: ${id} not found`))
                return;
            }

            const { description } = req.body;
            if (!description || description.trim().length === 0) {
                next(ApiError.badRequest(`Description field is required, should not be empty`))
                return;
            }
            const updated_at = new Date()

            const task = await Task
                .updateOne(
                    {
                        _id: id
                    },
                    {
                        description,
                        updated_at
                    })
            console.log(task)

            return res.status(200).send({ success: "task edited" })
        }
        catch (err) {
            next(err)
        }

    }


}