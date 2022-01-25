Siswa = require ("./siswaModel")
//handle index action
exports.index = function(req,res){
    Siswa.get(function(err,siswa){
        if(err){
            res.json({
                status : "Error",
                message : err
            });
        }
        res.json({
            status : "Success",
            message : "Siswa Retrieved Successfully",
            data : siswa
        })
    })
}

//handle create siswa data
exports.new = function(req,res){
    let siswa = new Siswa();
    siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
    siswa.tanggallahir = req.body.tanggallahir;
    siswa.jeniskelamin = req.body.jeniskelamin;
    siswa.hobi = req.body.hobi;

    siswa.save().then(data=> {
        res.json({
            status : "Success",
            Message : "Data Siswa Telah Dibuat",
            Siswa : data
        });
    }).catch(err => {
        res.status(500).send({
            messsage : err.message || "Internal Server Error"
        })
    })
};