import React, { useState } from 'react'

const Loading = () => {
  const [dots, setDots] = useState("")
  const timer = setInterval(() => {
    const updots = dots + "."
    setDots(updots)
  },800);
  (() => timer)();
  
  return (
    <div>Compiling...{dots}</div>
  )
}

export default Loading;