const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');

router.get('', categoriesCtrl.index)
router.get('/:id', categoriesCtrl.show)

module.exports = router;