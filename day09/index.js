const express=require('express');

let app = express();

app.get('/', (req, res) => {
    console.log('/...');
    // res.end('test express...')
    res.sendFile(__dirname+'/public/index.html');
});
app.get('/sign-up',(req,res)=>{
    res.sendFile(__dirname+'/public/sign-up.html')
})  //会有更好的处理方法

app.listen(80);