import React, { useEffect } from 'react'

const Alert = ({ setStatus, setContent, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])

  return (
    <article>
      <p>
        content: {setContent}; status: {setStatus}
      </p>
    </article>
  )
}

export default Alert

// alert should be show in 3 second
// so what is solution for them

// first, load return article in 3 second
// use useEffect and call remove alert
// + first, setTimeout is 3 second and clear alert
