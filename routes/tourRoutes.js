const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

// Create a checkBody middleware
// Check if body contains the name and the price property
// If not, send back 400 (bad request)
// Add it to the post handler stack

router.route('/statics').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getOneTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
