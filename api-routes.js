//import express route
const express = require ("express");
const router = express.Router();
//import siswaController
const siswaController = require ("./siswaController");

router.get("/",(req,res)=> {
    res.json({
        status : "API Its Working",
        message : "Wellcome to Web Siswa"
    });
});

//siswa routes
router.route("/siswa")
.get(siswaController.index)
.post(siswaController.new);

module.exports = router;