const express = require('express');

const app = express();
const port  = process.env.PORT || 3000;


app.use('/api', require('./router/router').router);

app.listen(port, ()=>{
    console.log(`running on port ${port}`);
});