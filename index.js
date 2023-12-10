const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
const booksRoutes = require('C:\\Users\\lauri\\OneDrive\\Bureau\\Projett js\\routes\\authorsR.js');
const authorsRoutes = require('C:\\Users\\lauri\\OneDrive\\Bureau\\Projett js\\routes\\authorsR.js');


app.use(express.static('public'));


main().catch(err => console.error('Impossible de se connecter à MongoDB'));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/local");
    console.log('Connecter à MongoDB');
}

app.use(express.json());

const genererPageA = require('./pages/index-get.js')
    // Gérer la route de mon projet html pour la mise en place de ma page de principale
app.get('/', async(req, res) => {
    const indexHtml = await genererPageA();
    res.send(indexHtml);
});

/*app.get('/creationA', async(req, res) => {
    const creationA = await genererPageA();
    res.send(creationA);
});*/

/*app.get('/', async(req, res) => {
    const creationB = await genererPageA();
    res.send(creationB);
});*/

app.use('/style', express.static('C:\\Users\\lauri\\OneDrive\\Bureau\\Projett js\\structure\\style.css'));
app.use('/booksR', booksRoutes);
app.use('/authorsR', authorsRoutes);

/*compter les livres
app.get('/count-books', async(req, res) => {
    try {
        const bookCount = await Book.countDocuments();
        res.json({ count: bookCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});
*/

app.listen(port, () => {
    console.log(`Serveur démarré : http://localhost:${port}`);
});