const coll = require('../localData/demoData.json')
const mongoose = require('mongoose');
const express = require('express');
const router = require('express').Router();
const Todos = require('../models/todoModel')




//Get all todos
 const getTodos = async(req,res)=>{
    try {
        const todolist = await Todos.find();
        res.json(todolist)


    } catch (error) {
        res.status(500).send('VUya')
    }

    
};
router.get('/',getTodos)
///


///----------------------------------------------////


//Get One Todo
const getOneTodo= async(req,res)=>{


    try {
        const id = req.params.todoIdNo;
        const todolist = await Todos.findOne({id});
        res.json(todolist)


    } catch (error) {
        res.status(500).send('VUya')
    }
};
router.get('/:todoIdNo', getOneTodo);
///



///----------------------------------------------////




//Create a todo 
const createOneTodo= async(req,res)=>{
    try {
        const w = await Todos(req.body).save();
        const todolist = await Todos.find();
        res.json(todolist)
    } catch (error) {
        res.status(400).send('vuya')
    }
}
router.post('/',createOneTodo)
///----------------------------------------------////




//Update a todo
const updateOneTodo= async(req,res)=>{

    try {
        const id = req.params.todoIdNo;
    
        await Todos.findByIdAndUpdate(id,req.body);
        const todolist = await Todos.find();
        res.json(todolist)
       
        
    } catch (error) {
        res.status(500).send('Jhamela')
        
    }
    
}
router.patch('/:todoIdNo',updateOneTodo)


///----------------------------------------------////




//Delete a todo
const deleteOneTodo =  async(req,res)=> {

    
    try {
        const id = req.params.todoIdNo;
    
        await Todos.findByIdAndDelete(id);
        const todolist = await Todos.find();
        res.json(todolist)
       
        
    } catch (error) {
        res.status(500).send('Jhamela')
        
    }
    
}
router.delete('/:todoIdNo',deleteOneTodo)

///


///----------------------------------------------////

// Delet All Todo



module.exports = router;