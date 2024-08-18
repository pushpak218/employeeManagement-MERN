const Data=require('../model/DataModel')



//get all data

const getAllData = async(req,res)=>{
    try{
        const data= await Data.find({})
        res.status(200).json(data)
        console.log("data found")
      //  console.log(data)
    } catch(error){
            console.log(error)
            res.status(400).json({error: error.message})
    }

    
}





//get a create data
 const createData= async(req,res)=>{



    const{ts,machine_status,vibration}=req.body
    try{
        const data= await Data.create({ts,machine_status,vibration})
        res.status(200).json(data)

    } catch(error){
            console.log(error)
            res.status(400).json({error: error.message})
    }

 }



//filter top 100 data base on ts field for today date (select top 100 from daata)


const filterData= async(req,res)=>{
    const{ts}=req.body
    try{
        const data= await Data.find({ts})
        res.status(200).json(data)

    } catch(error){
            console.log(error)
            res.status(400).json({error: error.message})
    }

 }


 ///


 const filterData1 = async (req, res) => {
    const { ts } = req.body;

    try {
        // Get today's date
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to the beginning of the day

        // Define the start and end of today
        const startOfToday = today;
        const endOfToday = new Date(today);
        endOfToday.setHours(23, 59, 59, 999); // Set time to the end of the day

        // Filter data for today's date and limit to the top 100
        const data = await Data.aggregate([
            {
                $match: {
                    ts: {
                        $gte: startOfToday, // Greater than or equal to start of today
                        $lte: endOfToday    // Less than or equal to end of today
                    }
                }
            },
            {
                $sort: { ts: 1 } // Sort by ts field in ascending order
            },
            {
                $limit: 100 // Limit to top 100 records
            }
        ]);

        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}







//delete a  data

const deleteData= async(req,res)=>{
    //  const result = await collection.deleteMany({});
    
    try{
        const result= await Data.deleteMany({})
        res.status(200).json({ deletedCount: result.deletedCount });
        console.log("deleted")
}
    catch(error){
        console.log(error)
        res.status(400).json({error: error.message})
    }
}





//100 a data

const get100Data = async(req,res)=>{
    try{
        const data= await Data.find({}).limit(100)
        res.status(200).json(data)
        console.log("data found")
        
      //  console.log(data)
    } catch(error){
            console.log(error)
            res.status(400).json({error: error.message})
    }

    
}






module.exports ={
    createData,
    getAllData,
    deleteData,
    filterData,
    filterData1,
    get100Data

}