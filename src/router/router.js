const { Router } = require('express');
const { getAllNewsController, getNewsDetailsController } = require('../controllers/news.controller');
const { searchNewsController } = require('../controllers/search.controller');

const router = Router();

router.get('/noticias', getAllNewsController);
router.get('/noticia/:slug', getNewsDetailsController);
router.get('/buscar', searchNewsController );

module.exports = {
    router
}
