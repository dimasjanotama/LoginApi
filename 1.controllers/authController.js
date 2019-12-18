const db = require('../database')


module.exports = {
    login: (req,res)=>{
        try {
            db.query(`select * from users where username ='${req.query.username}'`,(err,result)=>{
                if(err) throw err
                if(result.length>0){
                    if (req.query.password === result[0].password){
                        res.send({
                            status: '200',
                            message: 'Selamat, anda berhasil login',
                            result: result
                        })
                    } else {
                        res.send({
                            status: '401',
                            message: 'Password yang anda masukkan salah'
                        })
                    }
                } else {
                    res.send({
                        status: '404',
                        message: `Username ${req.query.username} tidak ditemukan`
                    })
                }
            })
        } catch (error) {
            console.log(error);
        }
    },
}
