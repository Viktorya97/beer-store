import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { generateToken } from '../hooks/generateToken'
import routesData from './data'

function AppRoutes() {
  const navigate = useNavigate()

  useEffect(() => {
    generateBearerToken()

    const interval = setInterval(() => {
      localStorage.removeItem('token')
      navigate('/')
      generateBearerToken()
    }, 300000)

    return () => clearInterval(interval)
  }, [])

  const generateBearerToken = () => {
    const generatedToken = generateToken()
    localStorage.setItem('token', generatedToken)
  }

  return (
    <Routes>
      {routesData.map(({ id, path, element }) => {
        return <Route path={path} element={element} key={id} />
      })}
    </Routes>
  )
}

export default AppRoutes
