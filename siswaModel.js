const mongoose = require ("mongoose");

//setup schema
const SiswaSchema = mongoose.Schema({
    nama : {
        type : String,
        require : true,
    },
    tanggallahir : {
        type : String,
        require : true,
    },
    jeniskelamin : {
        type : String,
        require : true,
    },
    hobi : {
        type : String,
        require : true,
    },
    create_date : {
        type : Date,
        default : Date.now,
    },
});

//exports siswa model
const Siswa = module.exports = mongoose.model('siswa',SiswaSchema);
module.exports.get = function(callback,limit){
    Siswa.find(callback).limit(limit);
}