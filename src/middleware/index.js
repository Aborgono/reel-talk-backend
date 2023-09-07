const admin = require('../config/firebase-config')

class Middleware {
    async decodeToken(req, res, next) {
        const token = req.headers.authorization.split(' ')[1];

        try {
            const decodeValue = await admin.auth().verifyIdToken(token);
            // console.log(decodeValue);
            if (decodeValue) {
                req.user = decodeValue.email;
                return next()
            }
            return res.json ({message: 'unathorized'});
        }catch (e){
            return res.json({message:"internal error"})

        }
    }
    async checkToken(req, res, next) {
        let token = req.headers.authorization
        if (token) {
            token = req.headers.authorization.split(' ')[1];

            try {
                const decodeValue = await admin.auth().verifyIdToken(token);
                // console.log(decodeValue);
                if (decodeValue) {
                    req.user = decodeValue.email;
                    return next()
                }
                return res.json ({message: 'unathorized'});
            }catch (e){
                return res.json({message:"internal error"})

            }
        }
            return next()
    }
}



module.exports = new Middleware();