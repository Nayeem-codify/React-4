import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
        <h1>Not Found</h1>
        <Link to="/">Back To Home</Link>
    </>
  )
}

export default ErrorPage

