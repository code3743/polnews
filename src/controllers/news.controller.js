const { request, response } = require('express');
const { fetchData } = require('../services/axios.requests.service');
const { PATH_ALL_NEWS } = require('../config/constants');
const { getAllNewsService } = require('../services/news.scraper.service');


/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
const getAllNewsController = async( req, res) => {
    try {
        const page = req.query.page ?? 0;
        const response = await fetchData(PATH_ALL_NEWS.replace('PAGE', parseInt(page)));
        const allNewsData = getAllNewsService(response);
        res.json({
            news: allNewsData
        })
    } catch (error) {
        res.json({
            error: error
        }).sendStatus(500)
    }
}

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
const getNewsDetailsController = async( req, res) => {
    try {
        const slug = req.params.slug;

        res.json({
            mensaje: 'Hola mundo'
        })
        
    } catch (error) {
        res.json({
            error: error
        }).sendStatus(500)
    }
}

module.exports = {
    getAllNewsController,
    getNewsDetailsController
}
