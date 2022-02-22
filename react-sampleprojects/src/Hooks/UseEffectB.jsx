
import React , {useState , useEffect} from 'react'

const UseEffectB = () => {
    const [Number, setNumber] = useState(123);
    useEffect(() => {
        
    
        }, []);
    const ChangedNum =()=>{
        setNumber(567)
    }
  return (
    <div>
     <h1>While Clicking THe Button The Value Can be Changed</h1>
     <button onClick={ChangedNum}>Button</button>
     <h2>{Number}</h2>
     </div>
  )
}

export default UseEffectB;