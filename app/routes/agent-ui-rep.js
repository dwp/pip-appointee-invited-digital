const express = require('express')
const router = express.Router()

module.exports = function (router) {

// router.get('/agent-ui-rep/search', function (req, res) {
//     res.render('/v22/agent-ui-rep/search')
// })

router.post('/v22/agent-ui-rep/search', function (req, res) {
    const searchNumber = req.session.data['search-number']
    // console.log("search number is: " + searchNumber);
    if (searchNumber == 'AB112233C') {
        test = req.session.data['test-var']
        if (!test){
            req.session.data['claimant-ni'] = 'AB112233C'
            req.session.data['claimant-first-name'] = 'Janet'
            req.session.data['claimant-last-name'] = 'Harding'
            req.session.data['claimant-email'] = 'jh@gmail.com'
            req.session.data['claimant-dob'] = '12 January 1946'
            req.session.data['claimant-postcode'] = 'SW9 6GR'
            req.session.data['claimant-mobile'] = '07876543210'
            req.session.data['test-var'] = 'true'
        }
        
        res.redirect('/v22/agent-ui-rep/details-record-b')
    } else {
        res.redirect('/v22/agent-ui-rep/info')
    }
})

// router.get('/agent-ui-rep/details-record-b', function (req, res) {
//     res.render('/v22/agent-ui-rep/details-record-b')
// })
}