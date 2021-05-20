const express=require('express');
const app=express();  //run the express server 
const port=8000;
//setting up the router before the server starts
const router=require('./routes/index');
app.use('/',router);

// app.get('/',function()
// {

// });


app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Error ${err}`);
    }
    else{
        console.log(`Server is running with port no ${port}`);
    }
});