const router = require('express').Router();
const books = require('./book.routes');

router.use('/books', books);

module.exports = router;
