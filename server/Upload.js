const multer = require('multer');
//const { client } = require('./connectionDB');
const path = require('path');

//const Dir = '';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'upload'));
    },

    filename: (req, file, cb) => {
        const filename = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + '-' + filename);
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

module.exports = upload;