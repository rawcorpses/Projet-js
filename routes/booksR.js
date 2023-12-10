const express = require('express');
const router = express.Router();
const Book = require('C:\\Users\\lauri\\OneDrive\\Bureau\\Projett js\\schema\\booksSchema');


// routes des livres
router.get('/', async(req, res) => {
    try {
        const livres = await Book.find().populate('author');
        res.send(livres);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// livre avec son id
router.get('/:id', async(req, res) => {
    const id = req.params.id; //permet d'utiliser l'url de l'id

    try {
        const livre = await Book.find(id).populate('author');

        if (livre) {
            res.send(livre);
        } else {
            res.status(404).send('Livre pas trouvé');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

router.post("/", async(req, res) => {
    const { title, author, summary, isbn } = req.body;

    try {
        const newBook = new Book({
            title,
            author,
            summary,
            isbn,
        });
        const enregistrer = await newBook.save();
        res.status(201).json(enregistrer);

    } catch (err) {
        res.status(400).send(err);
    }
});

router.put("/:id", async(req, res) => {
    const id = req.params.id;

    try {
        const bookUpdate = await Book.findByIdAndUpdate(id).populate('author');
        if (!bookUpdate) {
            return res.status(404).send('Livre non trouvé');
        }

        res.send(bookUpdate);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
});

router.delete("/", async(req, res) => {
    const id = red.params.id;

    try {
        const bookdDelete = await Book.findByIDAndDelete(id);
        if (!bookdDelete) return res.status(404).send('Autheur pas trouvé');
        res.send(bookdDelete);
    } catch (err) {
        res.status(500).send("Suppression livre");
    }
});

//compter livres
app.get('/count-books', async(req, res) => {
    try {
        const bookCount = await Book.countDocuments();
        res.send(bookCount);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});
module.exports = router;