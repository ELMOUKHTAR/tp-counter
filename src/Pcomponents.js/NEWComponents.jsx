import {useState} from 'react'

function NEWComponents({children}) {
    let [count , setCount ] = useState(0)

  return (
    <div>
      <button onClick={()=> setCount(count++)}>+</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count--)}>-</button>
 {children}
    </div>
  )
}

export default NEWComponents
