
var express = require('express');
var router = express.Router();
var app = express();  
var bodyParser = require('body-parser');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Registro de usuario' });
});

router.get('/training', function(req, res, next) {
  res.render('', { title: 'Registro de usuario' });
});

// app.post('/servidor', function(req,res){
//     var status=2;
//     var result=req.body.keystrokes;
//     var message="todo bien";
//      console.log(result);
//     res.redirect('');
// });
module.exports = router;
// exports.gett=function(level){
// 	return level
// }