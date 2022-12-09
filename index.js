const express = require('express');
const app = express();

app.post('/create',(req,res,next)=> {
            let dateandtime = new Date();
            let date = ("0" + dateandtime.getDate()).slice(-2);
            let month = ("0" + (dateandtime.getMonth() + 1)).slice(-2);
            let year = dateandtime.getFullYear();
            let hours = dateandtime.getHours();
            let minutes = dateandtime.getMinutes();
            let seconds = dateandtime.getSeconds();

            // console date & time in YYYY-MM-DD HH:MM:SS format
            console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);   
            let datetime= year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
            
            let fs = require('fs');
            let writer = fs.createWriteStream('current date-time.txt');
            writer.write(`${datetime}`);
        });
        app.listen(process.env.PORT||8000);