const express = require('express');
const router = require('express').Router();

const magiNakiMam = async(req,res)=>{
   const rand = Math.random(0,1)
   const randRound = Math.round(rand)
   const choice = ["magi","maam"]
   res.json({Percentag: rand, Choice : choice[randRound]})
}

router.get("/", magiNakiMam)

module.exports = router;