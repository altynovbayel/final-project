import React from 'react';
import cs from './Sort.module.scss'
import {categoryOptions} from "../../utils/navbarSort";

const Sort = ({data , setData , productBase, setProductBase , dataMain , setDataMain , listPlaceholder , page, setPage}) => {
  const [input , setInput] = React.useState('')
  const [dropDown , setDropDown] = React.useState(null)

  React.useEffect(() => { setDropDown('all') } , [])

  React.useEffect(() => {
    if(dropDown === 'all'){
      setData(productBase)
      setDataMain(productBase)
    }else {
      const base = productBase.filter(item => item.category === dropDown)
      setData(base)
      setDataMain(base)
    }
  }, [dropDown])

  React.useEffect(() => {
    const base = data.filter(item => item.productName.toLowerCase().includes(input.toLowerCase()))
    setPage(1)
    setDataMain(base)
  }, [input])


  return (
    <div className={cs.sort}>
      <div className={cs.inputData}>
        <input
          type="text"
          required
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        <label>{dropDown === 'all'
          ? 'Поиск'
          : `Поиск по ${listPlaceholder[dropDown]}`
        }</label>
      </div>
      <select
        className={cs.select}
        onChange={event => setDropDown(event.target.value)}
        defaultValue='Select'
      >
        <option value="Select" disabled>Select....</option>
        {
          categoryOptions.map(item => <option key={item.value} value={item.value}>{item.label}</option>)
        }
      </select>
    </div>
  );
};

export default Sort;