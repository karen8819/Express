const valuePost = ((req, res, next)=>{
    const tareaNueva = req.body;
    if(req.method === 'POST' && Object.values(tareaNueva).length === 0){
        res.status(400).json('se necesita un payload');
    }else{
        next();
    }
})

module.exports = valuePost