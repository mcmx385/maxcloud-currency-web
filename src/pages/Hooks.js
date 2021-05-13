import React, { useState } from 'react'

// function countInit() {
//   console.log('first render')
//   return 0
// }

function Hooks() {
  //   const [count, setCount] = useState(() => countInit())
  //   const [count, setCount] = useState(0)
  const [state, setState] = useState({ count: 0, theme: 'blue' })
  const count = state.count
  const theme = state.theme
  function minCount() {
    // setCount((prevCount) => prevCount - 1)
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 }
    })
  }
  function addCount() {
    // setCount((prevCount) => prevCount + 1)
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 }
    })
  }
  return (
    <>
      <button onClick={minCount}>-</button>
      <span>
        {count}
        {theme}
      </span>
      <button onClick={addCount}>+</button>
    </>
  )
}
export default Hooks
