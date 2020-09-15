const express = require('Express');
const app = express();
const path = require('path');
const PORT = 3000;
const methodOverride = require('method-override');
app.set('view engine', 'ejs')

//setting up controllers
const computerController = require('./controllers/compController')

//middleware Stuff
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.render('index.ejs');
})

//Computer route
app.use("/computerSection", computerController)


//listener
app.listen(PORT, () => {
    console.log(`Port listening: ${PORT}`);
})