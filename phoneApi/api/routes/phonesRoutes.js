module.exports = function(app) {
    const phones = require('../controllers/phonesController');
  
    // todoList Routes
    app.route('/phones')
      .get(phones);

}