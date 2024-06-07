const express = require("express")
const kodersUsecase = require("../usecases/koders.usecase")
const auth = require("../middlewares/auth.middleware")

const router = express.Router()


router.get("/", auth, async (req, res) => {
    try {
        const koders = await kodersUsecase.getAll()
        res.json({
            success: true,
            data: {koders}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

router.post("/", async (req, res) => {
    try {
        const koderCreated = await kodersUsecase.create(req.body)
        res.json({
            success: true,
            data: {koder: koderCreated}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

router.get("/:id", auth, async (req, res) => {
    try {
        const id = req.params.id
        const koder = await kodersUsecase.getById(id)
        res.json({
            success: true,
            data: {koder: koder}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

router.delete("/:id", auth, async (req, res) => {
    try {
        const {id} = req.params
        const koderDeleted = await kodersUsecase.deleteById(id)
        res.json({
            success: true,
            data: {koder: koderDeleted}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

router.patch("/:id", auth, async (req, res) => {
    try {
        const {id} = req.params
        const koderUpdated = await kodersUsecase.updateById(id, req.body)
        res.json({
            success: true,
            data: {koder: koderUpdated}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router