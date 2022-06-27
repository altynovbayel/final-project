import React from 'react';
import cs from './input.module.scss'

const Input = () => {
  const [input , setInput] = React.useState('')
  return (
    <div className={cs.container}>
      <input
        type="text"
        required
        className={input.length > 0 ? `${cs.input} ${cs.active}` : cs.input}
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <label>Email</label>
    </div>
  );
};

export default Input;