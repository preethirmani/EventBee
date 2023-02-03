import asyncHandler from 'express-async-handler';
import Program from '../models/programModel.js'

const getPrograms = asyncHandler(async(req, res) => {
  const programs = await Program.find({});
  res.json(programs);
})

const getProgramsById = asyncHandler(async(req, res) => {
  const program = await Program.findById(req.params.id);
  if(program) {
    res.json(program);
  } else {
    res.status(404).json({message: 'Event not found'});
  }
})

const getProgramsByName = asyncHandler(async(req, res) => {
  const program = await Program.findOne({name: req.params.name});
  if(program) {
    res.json(program);
  } else {
    res.status(404).json({message: 'Event not found'});
  }
})

export {getPrograms, getProgramsById, getProgramsByName};