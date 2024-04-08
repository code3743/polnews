const { request, response } = require('express');
const { fetchData } = require('../services/axios.requests.service');
const { PATH_SEARCH } = require('../config/constants');
const { searchNewsServices } = require('../services/search.scraper.service');


/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
const searchNewsController = async( req, res) => {
    try {
        const keyword = req.query.key;
        const page = req.query.page ?? 0;
        if(!keyword){
            res.json({
                error: 'No se ha enviado la palabra clave'
            }).sendStatus(400); 
        }
        const response = await fetchData(PATH_SEARCH.replace('QUERY', keyword).replace('PAGE', parseInt(page)));   
        const { headlines, lastPage }  = searchNewsServices(response);
        res.json({
            keyword,
            result: headlines,
            total_results: headlines.length,
            current_page: page,
            last_page: lastPage
        });
    } catch (error) {
        res.json({
            error: error
        }).sendStatus(500)
    }
}

module.exports = {
    searchNewsController
}