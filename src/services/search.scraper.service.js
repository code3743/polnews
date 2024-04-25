const cheerio = require('cheerio');

/**
 * 
 * @param {string} html 
 */
const searchNewsServices = (html) => {
    try {
        const $ = cheerio.load(html);
        const headlinesRaw = $('.views-field.views-field-title a');
        const headlines = headlinesRaw.map((_, element) => {
            return {
                title: $(element).text().trim(),
                slug: $(element).attr('href')
            }
        }).get();
        const lastPageRaw = $('.pager .pager-last > a')?.attr('href');
        const lastPage = lastPageRaw ? parseInt(lastPageRaw.split('&page=')[1]) : 0;
        return {
            headlines,
            lastPage
        };
    } catch (error) {
        console.log(error);
    }
} 


module.exports = {
    searchNewsServices
}