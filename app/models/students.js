var mongoose = require('mongoose');

//define the student model
//module.exports allows us to pass this to other files whenever it is called
module.exports = mongoose.model('Student', {
    name : {type : String, default: '' }
});