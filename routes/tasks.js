const express = require('express');
const Tasks = require("../models/taskModel")

const router = require('express').Router();




router.get("/", getTasks);

router.post("/",logTask);

router.patch("/:id",updateTask);

router.delete("/:id",deleteTask);


async function getTasks(req,res){

    const allTasks = await Tasks.find();

    res.json(allTasks)



};


async  function logTask(req,res){

    try {
        const taskRecord = await req.body;
        await Tasks(taskRecord).save()
        const allTasks = await Tasks.find();
        res.json(allTasks)
        
    } catch (error) {
        res.status(400).send('Vuya')
    }
    

};



async function updateTask(req,res){

    try {
        const id = req.params.id;
        await Tasks.findByIdAndUpdate(id,req.body);
        const allTasks = await Tasks.find();
        res.json(allTasks)
        
    } catch (error) {
        
    }
};

async function deleteTask(req,res){
    try{
        const id = req.params.id;
        await Tasks.findByIdAndDelete(id);
        const allTasks = await Tasks.find();
        res.json(allTasks)

    } catch(error){

    }
}


module.exports = router