const cheerio = require('cheerio');
const { BASE_URL } = require('../config/constants');

/**
 * 
 * @param {string} html 
 */
const getAllNewsService = (html)=>{
    try {
        const $ = cheerio.load(html);
        const allNewsData = [];
        const bodyData = $('#main-inner  .content-inner');
        const currentPage = $('.pager-current').text() === '1' ? 0 : 1;
        const newsRaw = bodyData.find('.view > .view-content > .views-row');
        for (let index = currentPage; index < newsRaw.length; index++) {
            const newsData = getNewsDataExtractor($(newsRaw[index]));
            if(newsData){
                allNewsData.push(newsData);
            } 
        }
        return allNewsData;
    } catch (error) {
        console.log(error);
    }
}

/**
 * 
 * @param {cheerio.Cheerio} element 
 */
const getNewsDataExtractor = (element)=>{
    try {
        const title = element.find('.views-field-title  a').text();
        const description =  element.find('.views-field-field-resumen > .field-content').text();
        const slug = element.find('.views-field-title  a').attr('href');
        const poster = element.find('img').attr('src');
        return {
            title,
            description,
            slug,
            poster,
            url: `${BASE_URL}${slug}`
        }
    } catch (error) {
        console.log(error);
        return undefined;
    }
}


module.exports = {
    getAllNewsService
}