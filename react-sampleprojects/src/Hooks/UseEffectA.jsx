
import React ,{ useState, useEffect } from 'react';






function UseEffectA() {
    const [state,setState] = useState("red")
    useEffect(() => {
        setTimeout(() =>setState("Green"),5000)
        }, []);
    
    console.log(state)

  return (
    <div>
    <h2>This Colur Will Change to <span style={state==='red'?{color:'red'}:{color:'Green'}}>{state}</span> Green</h2>
    </div>

  )
}

export default UseEffectA;