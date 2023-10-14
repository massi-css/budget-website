import React, { useEffect, useRef, useState } from 'react'
import './Header.css'

import LogoImg from 'assets/images/logo.png'

import { Button, Modal } from "components/ui"

import BudgetForm from 'components/budget/BudgetForm/BudgetForm'


const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const isMount = useRef(false)
  useEffect(() => {
    if (!isMount.current) {

      if (window.scrollY > 60) {
        setIsScrolled(true)
      }

      window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      })

      isMount.current = true
    }
  }, [])
  return (
    <header className={` header  ${isScrolled ? 'scrolled' : ''} `}>
      <div className="container">

        <div className="header_row">
          {/* brand  */}
          <div className="header_brand">
            <div className="logo">
              <img src={LogoImg} alt="brand logo" />
            </div>
            <h1>Budget App</h1>
          </div>
          {/* action  */}
          <div className="header_actions">
            <div className="header_actions-add">
              <Button onClick={() => setShowModal(true)}> + </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal visible={showModal} closeModal={() => setShowModal(false)} >
        <BudgetForm closeModal={() => setShowModal(false)} />
      </Modal>
    </header>
  )
}

export default Header