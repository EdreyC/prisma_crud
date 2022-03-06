import { useState } from 'react'

import "./styles/app.css"

function App() {

  return (
    <div className="App">
      <h1>Create your user here</h1>
      <input type="email" />
      <input type="password" />
      <button>Enviar</button>
    </div>
  )
}

export default App
