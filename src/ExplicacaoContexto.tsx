import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  const handleIncrement = () => {
    setActiveCycle(activeCycle + 1)
  }

  return (
    <div>
      <h1>NewCycleForm: {activeCycle} </h1>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>Countdown : {activeCycle}</h1>
}

export function ExplicacaoContexto() {
  const [activeCycle, setActiveCycle] = useState(0)
  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
