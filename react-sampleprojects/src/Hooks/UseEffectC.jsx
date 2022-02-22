import React,{useState , useEffect} from "react"

const UseEffectC = () => {
    const [close, setclose] = useState(true);
    const [change, setChange] = useState(true);
    let PartClose =()=>{
        return( <h1>{change?"This Page will be Delted":null} </h1>)
    };
    // { close = false ? PartClose = h1 : setclose = true }
    const Changed = ()=>{
        setclose = false;

    }
    
    useEffect(() => {
        return () => {
           
            console.log("Removed")

            
        }


    }, []);


  return (
    <div>

  { close ? <PartClose/> : <span></span> }
   
    <button type="button" onClick={()=>setChange(!change)}> Button To Remove  Component</button>
    </div>
  )
}

export default UseEffectC;