const url = require('url');

exports.sampleRequest = function (req, res) {
  const reqUrl = url.parse(req.url, true);
  var response;
  var numb = parseInt(reqUrl.query.number);
  if(!isNaN(numb)){
    response = Array.apply(0, Array(numb)).mao(function (item, index) {
        return index+1;
    })
  }
  else{
     response = {"response": "input is NaN"};
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
}
