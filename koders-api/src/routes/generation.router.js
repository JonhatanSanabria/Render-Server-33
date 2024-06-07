const express = require("express")

const generationUsecase = require("../usecases/generation.usecase")

const router = express.Router()


router.get("/", async (req, res) => {
    try {
        const generations = await generationUsecase.getAll()
        res.json({
            success: true,
            message: "All generations",
            data: {generations: generations}
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
        const generation = req.body
        const generationCreated = await generationUsecase.create(generation)
        res.json({
            success: true,
            message: "Generation created",
            data: {generation: generationCreated}
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
        const generation = await generationUsecase.getById(id)
        res.json({
            success: true,
            message: "Generation found",
            data: {generation: generation}
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
        const generationDeleted = await generationUsecase.deleteById(id)
        res.json({
            success: true,
            message: "Generation deleted",
            data: {generation: generationDeleted}
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
        const generationUpdated = await generationUsecase.updateById(id, req.body)
        res.json({
            success: true,
            message: "Generation updated",
            data: {generation: generationUpdated}
        })
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router