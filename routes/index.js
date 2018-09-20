import express from 'express';
import User from '../models/user'

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    let languages = [
        {
            language: 'Spanish'
        },
        {
            language: "French"
        },
        {
            langauge: "German"
        }
    ];
    res.json(languages);
});

router.get('/users', (req, res, next) => {
    let users = [
        new User('James Coonce', 'jcoonce', 'none@none.com'),
        new User('Bob Coonce', 'bcoonce', 'none@none.com'),
        new User('Euri', 'euri', 'none@none.com'),
        new User('Norman', 'jcoonce', 'none@none.com'),
        new User('James Coonce', 'jcoonce', 'none@none.com'),
        new User('Bob Coonce', 'bcoonce', 'none@none.com'),
        new User('Euri', 'euri', 'none@none.com'),
        new User('Norman', 'jcoonce', 'none@none.com'),
        new User('James Coonce', 'jcoonce', 'none@none.com'),
        new User('Bob Coonce', 'bcoonce', 'none@none.com'),
        new User('Euri', 'euri', 'none@none.com'),
        new User('Norman', 'jcoonce', 'none@none.com'),
        new User('James Coonce', 'jcoonce', 'none@none.com'),
        new User('Bob Coonce', 'bcoonce', 'none@none.com'),
        new User('Euri', 'euri', 'none@none.com'),
        new User('Norman', 'jcoonce', 'none@none.com'),
        new User('James Coonce', 'jcoonce', 'none@none.com'),
        new User('Bob Coonce', 'bcoonce', 'none@none.com'),
        new User('Euri', 'euri', 'none@none.com'),
        new User('Norman', 'jcoonce', 'none@none.com'),
    ];
    res.json(users);
});

export default router;