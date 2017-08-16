var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles ={
    'article-one': {
      title:'Article one | krishna',
      heading:'Article one',
      date: 'Aug 16,2017',
      contents:`   
                <p>
                    This article one in IMAD course and practice session.This article one in IMAD course and practice sessionThis article one in IMAD course and practice sessionThis article one in IMAD course and practice sessionThis article one in IMAD course and practice session
                    
                </p>
                 <p>
                    This article one in IMAD course and practice session.This article one in IMAD course and practice sessionThis article one in IMAD course and practice sessionThis article one in IMAD course and practice sessionThis article one in IMAD course and practice session
                    
                </p>`
    },
    'article-two':{
          title:'Article two | krishna',
          heading:'Article two',
          date: 'Aug 16,2017',
          contents:`   
                     <p>
                        This article two in IMAD course and practice session.
                        
                    </p>`
    },
    'article-three': {
          title:'Article three | krishna',
          heading:'Article three',
          date: 'Aug 16,2017',
          contents:`   
                     <p>
                        This article three in IMAD course and practice session.
                        
                    </p>`
    }
    
};
function createTemplate(data){
        var title = data.title;
        var date = data.date;
        var heading = data.heading;
        var contents = data.contents;
        var htmltemplate = `
        <html>
            <head>
                <title>
                   ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1 " />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">HOME</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}               
                    </div>
                    <div>
                        ${contents}
                    </div>
                </div>
            </body>
        </html>
        `;
    return htmltemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
