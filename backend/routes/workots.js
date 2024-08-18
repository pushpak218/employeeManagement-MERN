const express=require('express')

const{createData,getAllData,deleteData,filterData,filterData1,get100Data}=require('../controllers/datacontroller')

const router = express.Router()

router.get('/',getAllData)


router.get('/:ts',filterData1)


router.post('/',createData) 




router.post('/:id',(req,res)=>{
    res.send("welcome  to post"+req.params.id)
})




router.delete('/',deleteData)


router.put('/:id',(req,res)=>{
    res.send("welcome to put"+req.params.id)
}
);

module.exports=router;