import React, { useContext, useState } from 'react'
import { categoriesContext } from "services/context/budget/categoriesContext"
import { transactionsContext } from "services/context/budget/transactionsContext"

const TransHeader = () => {


  const { handleFilters } = useContext(transactionsContext)

  const { data: catData } = useContext(categoriesContext)


  const [inputs, setInputs] = useState({
    keys: '',
    category: '',
    type: ''
  })


  const handleChange = (e) => {

    const name = e.target.name
    const value = e.target.value

    const f = { ...inputs, [name]: value }
    setInputs(f)
    handleFilters(f)
  }


  return (
    <div className="trans_header">

      <h3 className="trans_header-title">
        Recent Transactions
      </h3>
      <div className="trans_header-filters">

        <select className="filters-select" name="keys" value={inputs.keys} onChange={handleChange} >
          <option value=""> Sort By </option>
          <option value="date"> Date </option>
          <option value="amount"> Amount </option>
        </select>

        <select className="filters-select" name="category" value={inputs.category} onChange={handleChange} >
          <option value=""> Categories </option>
          {catData && catData.map(cat => (
            <option key={cat.id} value={cat.id}> {cat.name} </option>
          ))}
        </select>

        <select className="filters-select" name="type" value={inputs.type} onChange={handleChange} >
          <option value=""> All </option>
          <option value="income"> Income </option>
          <option value="expanse"> Expanse </option>
        </select>


      </div>
    </div>
  )
}

export default TransHeader