const
  express = require('express'),
  app = express()


app.get('/', function(req, res){
  res.sendFile('Javascript/js_test.html', {root:__dirname})
})

app.get('/ajax', function(req,res){
  res.sendFile('Javascript/ajax_return.html', {root:__dirname})
})

app.listen(3000, function(){
  console.log('Server running on 3000')
})
