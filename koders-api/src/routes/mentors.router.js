const express = require("express")

const mentorsUsecase = require("../usecases/mentors.usecase")

const router = express.Router()


router.get("/", async (req, res) => {
    try {
        const mentors = await mentorsUsecase.getAll()
        res.json({
            success: true,
            data: {mentors}
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
        const mentorCreated = await mentorsUsecase.create(req.body)
        res.json({
            success: true,
            data: {mentor: mentorCreated}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const mentor = await mentorsUsecase.getById(id)
        res.json({
            success: true,
            data: {mentor: mentor}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params
        const mentorDeleted = await mentorsUsecase.deleteById(id)
        res.json({
            success: true,
            data: {mentor: mentorDeleted}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const {id} = req.params
        const mentorUpdated = await mentorsUsecase.updateById(id, req.body)
        res.json({
            success: true,
            data: {mentor: mentorUpdated}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router