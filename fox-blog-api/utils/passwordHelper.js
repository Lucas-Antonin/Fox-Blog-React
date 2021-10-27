const passwordHelper = require('bcrypt');
const saltRounds = 10;

/**
 * Encrypt an plain text string and return it's hash
 */
module.exports.passwordEncryptor = (plainPassword) => {
    return new Promise( (resolve, reject) => {
        passwordHelper.hash(plainPassword.toString(), saltRounds, async function (err, hash) {
            if(err){
                reject(err);
            }
            else{
                resolve(hash);
            }
        });
    });
}

/**
 * Compare an password with its database hash and return if it's valid
 */
 module.exports.compare = (formPassword,databasePassword) => {
    return new Promise( (resolve, reject) => {
        try {
            let result = passwordHelper.compareSync(formPassword.toString(),databasePassword.toString());
            resolve(result);
        }
        catch (e) {
            reject(e);
        }
    });
}