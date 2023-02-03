import express from 'express';
import {getPrograms,
        getProgramsById, 
        getProgramsByName} from '../controllers/programController.js';

const router = express.Router();

// @desc Fetch all events
// @route GET /api/programs
// @access public

router.get('/', getPrograms);

// @desc Fetch event by id
// @route GET /api/programs/:id
// @access public

router.get('/:id', getProgramsById);



// @desc Fetch event by name
// @route GET /api/programs/search/:name
// @access public

router.get('/search/:name', getProgramsByName);

export default router;

