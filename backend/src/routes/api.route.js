import { Router } from "express";
import { searchRepository } from '../controllers/search.controller.js';
import { getAllRepositories } from '../controllers/results.controller.js';
import { analyzeRepo, analyzeProfile } from '../controllers/analyze.controller.js';

const router = Router();

router.post('/search', searchRepository);
router.get('/results', getAllRepositories);
router.post('/analyze/repo', analyzeRepo);
router.post('/analyze/profile', analyzeProfile);

export default router;