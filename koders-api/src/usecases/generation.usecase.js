const createError = require("http-errors")
const Generation = require("../models/generation.model")

async function create(generation) {
    const existingGeneration = await Generation.findOne({
        number: generation.number,
        program: generation.program
    })
    if(existingGeneration){
        throw createError(409, "Generation already exists")
    }
    return await Generation.create(generation)
}

async function getAll() {
    return await Generation.find()
}

async function getById(id) {
    return await Generation.findById(id)
}

async function updateById(id, generation) {
    return await Generation.findByIdAndUpdate(id, generation, { new: true })
}

async function deleteById(id) {
    return await Generation.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}