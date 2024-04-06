const { Router } = require('express');
const { getAllNewsController, getNewsDetailsController } = require('../controllers/news.controller');

const router = Router();

router.get('/noticias', getAllNewsController);
router.get('/noticia/:slug', getNewsDetailsController);

module.exports = {
    router
}
