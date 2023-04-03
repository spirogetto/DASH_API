import { useState,useEffect } from "react"


function Temp() {

    const uri = 'https://dash-life-api.onrender.com/todos'
    const [Shows, setShow] = useState([])
    const conditions = {
        headers: {
			"Access-Control-Allow-Origin" : "https://dash-life-api.onrender.com/todos"
		}
    }
  

    const getData = async()=>{

        const data = await fetch(uri,conditions)
        const data2 = await data.json()
        await setShow(data2)
            
    }
    useEffect(() => {
        getData();
    })



  return (
    <div>

        <h2>{Shows[0]?.title}</h2>
        
    </div>
  )
}

export default Temp