import { useState } from "react";



export function App() {
  
  return (
    <div>
      Ola      
    </div>
  )
}

//Função JS
const teste = () => {
  return 1 + 1;
}

//Função JS
const useTeste = () => {
  return 1 + 1;
}

//React hook
const useTest = () => {
  const [value] = useState(1 + 1);
  return value;
}

//Componente funcional React
const Test = () => {
  return (
    <div>teste</div>
  )
}

//Função JS que retorna html react
const test = () => {
  return (
    <div>teste</div>
  )
}