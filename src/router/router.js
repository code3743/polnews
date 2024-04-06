const { Router } = require('express');
const { getAllNews, getNews } = require('../controllers/news.controller');

const router = Router();

router.get('/noticias', getAllNews);
router.get('/noticia/:slug', getNews);

module.exports = {
    router
}
