const Task = require('../model/Task')
const ApiError = require('../error/ApiError')

module.exports = {
    async deleteTask(req, res, next) {

        try {
            const { id } = req.params;

            const taskExists = await Task.findOne({ _id: id })
            if (taskExists === null) {
                next(ApiError.notFound(`Task with id:${id} not found`))
                return;
            }
            await Task.deleteOne(
                {
                    _id: id
                })
            return res.status(200).send({ success: "Task deleted succesfully" })
        }
        catch (err) {
            next(err)
        }

    }


}