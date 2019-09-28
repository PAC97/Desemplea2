const multer = require('multer');
const uuid = require('uuid/v4');
const path = require('path');
const storage = multer.diskStorage({
    destination: 'uploads',
    filename:(req, file, cb) =>{
        cb(null, uuid() + path.extname(file.originalname)); 
    }
});

const upload = multer({storage: storage});
module.exports = upload;

