import { useState } from 'react';
import { InputAdd } from './components/InputAdd';
import { TodoItem } from './components/TodoItem';
import { TodoAPI } from './shared/services/api/TodoAPI';

TodoAPI.getAll().then(data => console.log('APP',data));

export function App() {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);
  const [value, setValue] = useState('');
  const [list, setList] = useState([
    { id: '1', label: 'Fazer café', complete: false },
    { id: '2', label: 'Fazer café', complete: false }, // corrigido
    { id: '3', label: 'Fazer almoço', complete: false },
    { id: '4', label: 'Fazer janta', complete: false },
  ]);

  const handlerAdd = (value: string) => {
    setList([
      ...list,
      { id: `${list.length + 1}`, label: value, complete: false }
    ]);
    setValue('');
  };

  return (
    <div>
      {hide ? <p>Teste 1</p> : <p>Teste 2</p>}

      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <button onClick={() => setHide(!hide)}>
        Toggle
      </button>

      <br /><br />

      <InputAdd onAdd={handlerAdd} />

      <ol>
        {list.map((ListItem) => (
          <TodoItem
            key={ListItem.id}
            id={ListItem.id}
            label={ListItem.label}
            complete={ListItem.complete}
            onComplete={() =>
              setList(list.map(item =>
                item.id === ListItem.id
                  ? { ...item, complete: true }
                  : item
              ))
            }
            onRemove={() =>
              setList(list.filter(item => item.id !== ListItem.id))
            }
          />
        ))}
      </ol>
    </div>
  );
}