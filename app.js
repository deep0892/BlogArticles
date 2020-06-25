const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const articleRoute = require('./routes/articles');
const Article = require('./models/article');

mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/articles', articleRoute);

app.get('/', async(req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' });
    res.render('articles/index', { articles: articles });
});


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});