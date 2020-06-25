const express = require('express');

const articleRoute = require('./routes/articles');

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use('/articles', articleRoute);

app.get('/', (req, res) => {
    const articles = [{
            title: 'Test Article',
            description: 'Test description',
            createdAt: new Date()
        },
        {
            title: 'Test Article 2',
            description: 'Test description 2',
            createdAt: new Date()
        }
    ];
    res.render('index', { articles: articles });
});


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});