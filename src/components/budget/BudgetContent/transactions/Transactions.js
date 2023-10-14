import React from 'react'
import './Transactions.css'

import TransHeader from "./shared/TransHeader"
import TransContent from "./shared/TransContent"

const Transactions = () => {
  return (
    <section className="trans">
      <TransHeader />
      <TransContent />
    </section>
  )
}

export default Transactions