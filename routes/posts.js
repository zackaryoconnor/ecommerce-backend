const router = require('express').Router()
const verify = require('../middleware/verifyToken')




router.get('/', verify, (request, response) => {
    response.send(request.user)
})




module.exports = router