const Task = require('../model/Task')
const ApiError = require('../error/ApiError')


module.exports = {
    async completeTask(req, res, next) {

        try {
            const { id } = req.params;

            const taskExists = await Task.findOne({ _id: id })
            if (taskExists === null) {
                next(ApiError.notFound(`Task with id:${id} not found`))
                return;
            }

            const completed = taskExists.completed ? false : true
            const updated_at = new Date()

            await Task.updateOne({
                _id: id
            }, { completed, updated_at }
            )


            return res.status(200).send({ success: `Task status changed to ${completed}, task_id:${id}` })
        }
        catch (err) {
            next(err)
        }

    }


}