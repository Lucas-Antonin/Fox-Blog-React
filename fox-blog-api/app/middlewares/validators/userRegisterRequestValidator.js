'use strict';

const { body, validationResult } = require('express-validator');
const { findByEmail, findById } = require('../../repositores/userRepository');
/**
 * Verify if Register form have all fields filled and valid
 */
module.exports = [
    body('user.username').not().isEmpty().isLength({ min: 3 }),
    body('user.email').isEmail().trim(),
    body('user.password').not().isEmpty().isLength({ min: 5 }),
    async (req, res, next) => {
        try {
            if (!validationResult(req).isEmpty()) {
                return res.status(400).json({ errors: validationResult(req).array() });
            }

            /**
             * Check if email is already in use
             */
            let userData = await findByEmail(req.body.user.email);

            if (userData) {
                return res.status(400).json(
                    {
                        errors: [{
                            "msg": "Email is already in use!",
                            "param": "email",
                            "location": "body"
                        }]
                    }
                );
            }

            return next()
        }
        catch (e) {
            next(e);
        }
    }
]
