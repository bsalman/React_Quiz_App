const express = require('express') ; 
const fileuplod = require ('express-fileupload') ; 
const cookie = require('cookie-parser')
const fs = require('fs') ;



const app = express();

app.use(express.static(__dirname + '/public')) ;
app.use(express.urlencoded({extended:false})) ;
app.use(cookie());
app.use(express.json()) ;
app.use(fileuplod({
    limits:{fileSize: 50 * 1024 * 1024 }
}));
const port = process.env.PORT || 4000
//====================================================================//

//====================================================================//
// app.use('/admin', adminRouter);

app.use('/', (req, res) => {
    const html = fs.readFileSync(__dirname + '/index.html' , 'utf-8')
    res.send(html);
});


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});


