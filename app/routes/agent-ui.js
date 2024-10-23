const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

  // Code supplied by Gary for dealing with query strings
  router.use(function(req, res, next){
    Object.assign(res.locals,{
      postData: (req.body ? req.body : false)
    });

    Object.assign(res.locals,{
      getData: (req.query ? req.query : false)
    });

    next();
  });


// AGENT UI
router.post('/agent-ui/search', function(request, response) {
  var claimantni = request.session.data['claimant-ni']
  response.redirect('/agent-ui/info.html');
})
router.post('/agent-ui/info', (req, res, next) => {
  res.redirect('appointee-question');
});
router.post('/agent-ui/appointee-question', function(request, response) {

  var appointeeq = request.session.data['appointee-question']
  if (appointeeq == "Yes"){
      response.redirect("appointee-type.html")
  } else {
      response.redirect("claimant-bau.html")
  }
})

router.post('/agent-ui/claimant-details', function(request, response) {

  var claimantni = request.session.data['claimant-ni']
  var claimantdobday = request.session.data['claimant-dob-day']
  var claimantdobmonth = request.session.data['claimant-dob-month']
  var claimantdobyear = request.session.data['claimant-dob-year']
  var claimantdob = claimantdobday +"/"+ claimantdobmonth +"/"+ claimantdobyear
  request.session.data['claimant-dob']=claimantdob
  response.redirect("appointee-details.html")
})
router.post('/agent-ui/appointee-details', function(request, response) {
  var appointeeemail = request.session.data['']
  var claimantni = request.session.data['claimant-ni']
  var claimantdobday = request.session.data['claimant-dob-day']
  var claimantdobmonth = request.session.data['claimant-dob-month']
  var claimantdobyear = request.session.data['claimant-dob-year']
  var claimantdob = claimantdobday +"/"+ claimantdobmonth +"/"+ claimantdobyear
  request.session.data['claimant-dob']=claimantdob
  response.redirect("check.html")
})
router.post("check", (req, res, next) => {
  res.redirect("confirmation");
});
// ONLINE IDENTIFICTAION

// router.post('/apply-for-pip/oidv/check-identity', (req, res, next) => {
//       const checkIdentity = req.session.data['checkIdentity'];
//         if (checkIdentity === 'Yes') {
//           res.redirect('https://apply-for-pip-idv.herokuapp.com/zero-confidence/v1/identity/check-identity');
//       } else {
//           res.redirect('/apply-for-pip/oidv/check-identity-call');
//       }
// });

//
}
