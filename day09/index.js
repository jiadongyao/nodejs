const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');

let pool = mysql.createPool({
    connectionLimit:10,
    user:'root'
});
let app = express();

app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    console.log('test...');
    // res.end('test express...')
    res.sendFile(__dirname+'/public/index.html');
});

app.get('/sign-up',(req,res)=>{
    res.sendFile(__dirname+'/public/sign-up.html')
})  //会有更好的处理方法

//注册
app.post('/signUp',(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        let sql = 'INSERT INTO db_demo.user VALUE (null,?,?)';
        connection.query(sql,[username,password],(err,results,fields)=>{
            // console.log(results);
           if(err) throw err;
           if(results.affectedRows===1){
               res.sendFile(__dirname+'/public/index.html')
           }else{
               res.sendFile(__dirname+'/public/sign-up.html')
           }

        });
        connection.release();
    })
});
//登录
app.post('/signIn',(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    // console.log(username+password);
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        let sql='SELECT * FROM db_demo.user WHERE username = ? AND password = ?';
        connection.query(sql,[username,password],(err,results,fields)=>{
            if(err) throw err;
            // console.log(results)
            if(results.length===1){
                res.sendFile(__dirname+'/public/home.html')
            }else {
                res.sendFile(__dirname+'/public/index.html')
            }
        });
        connection.release();
    })
});

app.listen(80);