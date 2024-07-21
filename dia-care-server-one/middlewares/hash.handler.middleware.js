const bcrypt = require('bcryptjs');

const HASH_PASSWORD_FUNC=(str)=>{
    const salt = bcrypt.genSaltSync(10);
    const hashed_str = bcrypt.hashSync(str, salt);
    return hashed_str;
}

module.exports = HASH_PASSWORD_FUNC;

