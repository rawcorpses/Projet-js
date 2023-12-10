const express = require('express');
const router = express.Router();
const Author = require('C:\\Users\\lauri\\OneDrive\\Bureau\\Projett js\\schema\\authorsSchema');


// les auteurs
router.get('/', async(req, res) => {
    try {
        const autheurs = await Author.find({});
        res.send(autheurs);
    } catch (err) {
        res.status(500).send(err);
    }
});

// autheurs ID
router.get('/:id', async(req, res) => {
    const id = req.params.id;

    try {
        const auteur = await Author.findById(id);

        if (auteur) {
            res.send(auteur);
        } else {
            res.status(404).send('Auteur pas trouvé');
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/", async(req, res) => {
    const { firstName, lastName, dateOfBirth } = req.body;

    try {
        const newAuthor = new Author({
            first_name: firstName,
            last_name: lastName,
            date_of_birth: dateOfBirth,
        });
        const enregistrer = await newAuthor.save();
        res.status(201).send(enregistrer);

    } catch (err) {
        res.status(400).send(err);
    }
});


router.put('/:id', async(req, res) => {
    const authorId = req.params.id;

    try {
        const updatedAuthor = await Author.findByIdAndUpdate(authorId, req.body, { new: true });

        if (!updatedAuthor) {
            return res.status(404).send('Auteur non trouvé');
        }

        res.send(updatedAuthor);
    } catch (err) {
        res.status(500).send('Erreur serveur lors de la mise à jour de l\'auteur');
    }
});

router.delete("/:id", async(req, res) => {
    const authorID = req.params.id;

    try {
        const author = await Author.findByIDAndDelete(authorID);
        if (!author) return res.status(404).send('Autheur pas trouvé');
        res.send(author);
    } catch (err) {
        res.status(500).send("Suppression autheur");
    }
});

/*compter autheurs
app.get('/count-authors', async(req, res) => {
    try {
        const authorCount = await Author.countDocuments();
        res.send(authorCount);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});
*/

module.exports = router;