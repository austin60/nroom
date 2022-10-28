const express=require('express');
const router=express.Router();
const blogModel=require('../models/model');

//route to facilitate post to db
router.post("/post",async(req,res)=>{
    const newBlog=new blogModel({
        title:req.body.title,
        content:req.body.content,
        category:req.body.category,
        author:req.body.author
    })
    newBlog.save()
     .then(data=>res.json(data))
     .catch(err=>console.log(err))
})

//route to get data from db
router.get("/",async(req,res)=>{
    const blogs=await blogModel.find({}).sort({date:-1})
    res.json(blogs)
})

//route to update db data
router.put("/admin/edit/:id",async(req,res)=>{
    try{
        await blogModel.findByIdAndUpdate(req.params.id,{
            title:req.body.editTitle,
            content:req.body.editContent,
            category:req.body.editCategory
        })
    }catch(err){
        console.error(err.mesage)
    }
})
//route to delete db data
router.delete("/admin/delete/:id",async(req,res)=>{
    try{
        await blogModel.findByIdAndDelete(req.params.id)
    }
    catch(err){
        console.error(err.mesage) 
    }
})

module.exports=router;