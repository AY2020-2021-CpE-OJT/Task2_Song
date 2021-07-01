//routes/index.js

module.exports = function(app)
{
    //get all family
    app.get('/api/family',(req,res)=>{
        res.end();
    });

    //get single member by name
    app.get('/api/family/:name',(req,res)=>{
        res.end();
    });

    //get member my position
    app.get('api/family/:position',(req,res)=>{
        res.end();
    });

    //get member my age
    app.get('api/family/:age',(req,res)=>{
        res.end();
    });

    //create member
    app.post('api/family',(req,res)=>{
        res.end();
    });

    //update member age
    app.put('api/family/:age',(req,res)=>{
        res.end();
    });

    //delete member
    app.delete('api/family/:name',(req,res)=>{
        res.send();
    })
}