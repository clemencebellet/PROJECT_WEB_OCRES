const router = require('express').Router();
let Tache = require('../models/tache.model');

router.route('/').get((req, res) => {
    Tache.find()
        .then(taches => res.json(taches))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const eventname = req.body.eventname;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newTache = new Tache({
        eventname,
        description,
        duration,
        date,
    });

    newTache.save()
        .then(() => res.json('Tache added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Tache.findById(req.params.id)
        .then(tache => res.json(tache))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Tache.findByIdAndDelete(req.params.id)
        .then(() => res.json('tache deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Tache.findById(req.params.id)
        .then(tache => {
            tache.eventname = req.body.eventname;
            tache.description = req.body.description;
            tache.duration = Number(req.body.duration);
            tache.date = Date.parse(req.body.date);

            tache.save()
                .then(() => res.json('tache updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;