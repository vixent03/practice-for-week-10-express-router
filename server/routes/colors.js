const express = require('express')

const router = express.Router();
const colors = [
 {
   name:"pink",
   type :"secondary color",
   mixturen:"red and white",
   hexnum :"#FFC0CB"
    },

    {
        name:"white",
        type:"primary",
        mixture:"none ",
        hexnum:"#FFFFFF"
    },

    {
        name:"blue",
        type:"primary",
        mixture:"none",
        hexnum:"#0000FF"
    }
];

router.get("/",(req,res)=>{
    res.json(colors)
})

router.get("/:colorId",(req,res)=>{

    const colorId = req.params.colorId
    let checkColor = ''
   colors.forEach((color)=>{
    if(colorId === color.name){
        checkColor = color
    }
   })
   res.json(checkColor)
})

module.exports = router