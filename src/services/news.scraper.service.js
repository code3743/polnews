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

/**
 * 
 * @param {string} html 
 */
const getNewsDetails = (html)=>{
    try {
        const $ = cheerio.load(html);
        const tittle = $('#page-title').text();
        const place = $('div[itemprop="address"]').text();
        const date= $('.date-display-single').text();
        const summary = $('.field-name-field-resumen').text();
        const images = [];
         $('.field-name-slider-noticias').find('img').each((i,element) => {
           images.push(element.attribs.src);
        });
        const body = $('.node-noticias').text().replace(place, '').replace(date, '').replace(summary, '').replace('>>>', '').trim();
        return {tittle,place,date,summary,images,body};
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllNewsService,
    getNewsDetails
}