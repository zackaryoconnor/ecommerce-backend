const jwt = require('jsonwebtoken')




const verify = (request, response, next) => {
    const token = request.header('auth-token')
    if (!token) return response.status(401).send('Access Denied')


    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        request.user = verified
        next()
    } catch (error) {
        response.status(400).send('Invalid Token')
    }
}




module.exports = verify 