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
        res.redirect('/v22/agent-ui-rep/details-record-b')
    } else {
        res.redirect('/v22/agent-ui-rep/info')
    }
})

// router.get('/agent-ui-rep/details-record-b', function (req, res) {
//     res.render('/v22/agent-ui-rep/details-record-b')
// })
}