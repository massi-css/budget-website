import React, { useContext } from 'react'
import { categoriesContext } from "services/context/budget/categoriesContext"
import { transactionsContext } from "services/context/budget/transactionsContext"


import SingleTrans from "./SingleTrans"

const TransContent = () => {

  const { filteredData: transactions, loading, error } = useContext(transactionsContext)
  const { data: categories, loading: catLoading } = useContext(categoriesContext)



  return (
    <div className="trans_content">

      {!loading && !catLoading && transactions && transactions.length && categories.length && !error ? (
        <>
          {transactions.map((transaction) => (
            <SingleTrans transaction={transaction} key={transaction.id} categories={categories} />
          ))}
        </>
      ) : (<></>)}


      {loading && catLoading && (
        <p className="loading"> loading ... </p>
      )}

      {error && !loading && (
        <p className="data-error"> {error}  </p>
      )}

      {!loading && transactions && !transactions.length && !error && (
        <p className="no-data"> No data </p>
      )}







    </div>
  )
}

export default TransContent