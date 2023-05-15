const { Router } = require('express');
const { getMeal, saveMeals, deletMeal, editMeal } = require('./MealController')

const router = Router();

router.get('/', getMeal)
router.post('/saveMeals', saveMeals)
router.post('/deleteMeal', deletMeal)
router.post('/editMeal', editMeal)

module.exports = router;