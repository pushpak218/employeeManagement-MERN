
import { useEffect,useState } from "react";

import DataDetails from '../component/data'
import MachineStatusChart from '../component/chart'


const Home=()=>{

    const [data,setData]=useState([])

    useEffect(()=>{
        const fetchData=async ()=>{
            console.log("fetching data")
            const response=await fetch('http://localhost:4000/api/workouts/')
             console.log(response)
            const data=await response.json()
            //console.log(data)
            console.log("fetched data")

            if(response.ok){
                setData(data)
            }
        }
        fetchData()
    },[])
    return (
        <div className="Home">
            <div className="data">
            <MachineStatusChart data={data}/>
                
            </div>
            <h1>Home</h1>
        </div>
    );
    
}


export default Home;