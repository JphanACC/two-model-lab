const express = require('Express');
const app = express();
const path = require('path');
const PORT = 3000;
const methodOverride = require('method-override');

//middleware Stuff
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('index.ejs');
})



//listener
app.listen(PORT, () => {
    console.log(`Port listening: ${PORT}`);
})