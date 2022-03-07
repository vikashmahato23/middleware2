// const { application } = require('express')
const express=require('express')

const app=express()

app.use(logger)



app.get("/books",logger, (req,res)=>{
  console.log("dsfdsf")

    return res.send({route:"/books"})
})
app.use(checkPermission)
app.get("/libraries",checkPermission,(req,res)=>{
   

    return res.send({ route: "/libraries", permission: true}

    )
   
})
app.get("/authors",checkPermission,(req,res)=>{

    
    return res.send( { route: "/authors", permission: true})
   
})

function logger(req,res,next){
   console.log
   next();

}
function checkPermission(req,res,next){
  
   if(req.path=="/authors"){
     
        next()

    
   }
     else if(req.path=="//libraries"){
        next()
     }
   
}
app.listen(5000,()=>{
    console.log("port 500")
})