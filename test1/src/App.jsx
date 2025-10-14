import { useEffect } from "react"
import { useState } from 'react';

function App(){
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log("Component Mounted or updated");
  },[count]);

return(
  <div>
    <p>Count: {count}</p>
    <button onClick={()=> setCount(count +1)}>Increment</button>
  </div>
);
}

export default App;


