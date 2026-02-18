import { useState } from 'react';


export function App() {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);
  const [value, setValue] = useState('');
  const [list, setList] = useState([
    {id: '1', label: 'Fazer cafe',complete: false},
    {id: '2', label: 'Fazer cafe',},
    {id: '3', label: 'fazer almoço',complete: false},
    {id: '4', label: 'fazer janta',complete: false},
  ]);
   //if(hide) return null;

  return (
    <div>

       {hide && <p>Teste 1</p>}
       {!hide && <p>Teste 2</p>}

       {hide 
          ? <p>Teste 1</p> 
          : <p>Teste 2</p>
       }

       <button onClick={() => setCount(count + 1)}>
        {count}
       </button>
        <button onClick={() => setHide(!hide)}>
         Toogle
       </button>
       <br/>
       <br/>
       <input value={value} onChange={(e) => setValue(e.target.value)} />
       <button onClick={() => {
        setList([
            ...list,
            { id: `${list.length + 1}`, label:value, complete: false }]);
            setValue('');
       }}>
          Adicionar
       </button>

      

       <ol>
        {list.map((ListItem) => (
          <li key={ListItem.id}>
            {ListItem.label}
            
            {ListItem.complete ? 'concluido': ''}
            
            <button onClick={() => {
                setList([...list.map(item => item.id === ListItem.id ? {...item, complete: true} : item)]);
            }}>
              Concluir
            </button>
            <button onClick={() => {
                setList([...list.filter(item => item.id !== ListItem.id)]);
            }}>
              Remover
            </button>
          </li>
          
        ))}
       </ol>
    </div>
  )
}

