import { useState, useEffect } from 'react'
import reactDOM from 'react-dom'
import PropTypes from 'prop-types'

const ModalPortal = ({ children }) => {
  const [domReady, setDomReady] = useState(false)

  useEffect(() => {
    setDomReady(true)
  }, [])

  if (domReady) {
    const $el = document.getElementById('modal-root')
    return reactDOM.createPortal(children, $el)
  } else {
    return null
  }
}

ModalPortal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default ModalPortal
