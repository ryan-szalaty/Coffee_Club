const express = require('express');
const app = express();
const path = require('path');

const coffeeData = require('./data/coffee_data');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:id', (req, res) => {
    const id = req.params.id;
    let index;
    id === "hot" ? index = 0 : index = 1;
    res.render('coffeePage', {preference: [coffeeData[index], id]});
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on PORT 8000.');
})