import React, { useContext, useMemo } from 'react'

import './BudgetContent.css'
import { Tabs, Tab } from 'components/ui'

import Transactions from "./transactions/Transactions"
import { transactionsContext } from "services/context/budget/transactionsContext"
import { categoriesContext } from "services/context/budget/categoriesContext"
import DougnutChart from "components/ui/DougnutChart/DougnutChart"


const incomeColors = [
  "#557B83",
  "#82954B",
  "#A2D5AB",
  "#E5EFC1",
  "#85C88A",
  "#0d5235",
  "#82A284",
  "#BABD42",
]

const expanseColors = [
  "#4C0033",
  "#790252",
  "#AF0171",
  "#E80F88",
  "#513252",
  "#7A4069",
  "#CA4E79",
  "#FFC18E",
]

const BudgetContent = () => {


  const { data: transactions } = useContext(transactionsContext)
  const { data: catData } = useContext(categoriesContext)

  const chartData = useMemo(() => {
    const data = [...transactions]
    const chartData = { income: null, expanse: null }

    if (transactions && transactions.length && catData && catData.length) {

      chartData.income = {}
      chartData.expanse = {}

      data.forEach(d => {
        let catName = catData.find(c => c.id == d.category).name
        if (d.type === 'income') {
          if (chartData.income[catName]) {
            chartData.income[catName] += +d.amount
          } else {
            chartData.income[catName] = +d.amount
          }
        } else {
          if (chartData.expanse[catName]) {
            chartData.expanse[catName] += +d.amount
          } else {
            chartData.expanse[catName] = +d.amount
          }
        }

      })

    }



    return chartData
  }, [transactions, catData])


  console.log(chartData)


  return (
    <div className="budget_content">
      <div className="container">
        <Tabs>
          <Tab title="data">
            <Transactions />
          </Tab>

          <Tab title="income">
            <DougnutChart data={chartData.income} colors={incomeColors} />
          </Tab>

          <Tab title="expanses">
            <DougnutChart data={chartData.expanse} colors={expanseColors} />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default BudgetContent