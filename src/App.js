
import { useState } from 'react';
import { Input } from './inpute';
import './App.css';

function App() {
  const [isMatchLogin, setIsMatchLogin] = useState(true);
  const [isMatchPassword, setIsMatchPassword] = useState(true);
  const [formValue, setFormValue] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <Input name={'login'} label={'Логин'} regex={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/} setForm={setFormValue} />
        <Input name={'password'} label={'Пароль'} regex={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/} setForm={setFormValue} />

        <button type='submit' disabled={!isMatchLogin || !isMatchPassword}>Login</button>
      </form>
    </div>
  );
}

export default App;
