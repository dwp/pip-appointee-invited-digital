// app/routes/agent-ui-rep.js
module.exports = function (router) {
    router.post('/v22/agent-ui-rep/claimant-details', function(req, res) {
        console.log('Form submitted with data:', req.body)
        // Store all form data in session
        req.session.data['claimant-ni'] = req.body['claimant-ni']
        console.log('Session data after storage:', req.session.data)
        req.session.data['claimant-first-name'] = req.body['claimant-first-name']
        req.session.data['claimant-last-name'] = req.body['claimant-last-name']
        req.session.data['claimant-email'] = req.body['claimant-email']
        
        // Format the date of birth
        const day = req.body['claimant-dob-day']
        const month = req.body['claimant-dob-month']
        const year = req.body['claimant-dob-year']
        req.session.data['claimant-dob'] = `${day}/${month}/${year}`
        
        req.session.data['claimant-postcode'] = req.body['claimant-postcode']
        req.session.data['claimant-mobile'] = req.body['claimant-mobile']
        
        res.redirect('/v22/agent-ui-rep/details-record')
    })
}