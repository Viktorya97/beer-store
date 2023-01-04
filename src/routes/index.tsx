import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { generateToken } from '../hooks/generateToken'
import routesData from './data'

function AppRoutes() {
  const navigate = useNavigate()

  useEffect(() => {
    generateBearerToken()
    const expiredDate = getRandom()

    const interval = setInterval(() => {
      localStorage.removeItem('token')
      navigate('/')
      generateBearerToken()
    }, expiredDate)

    return () => clearInterval(interval)
  }, [])

  const generateBearerToken = () => {
    const generatedToken = generateToken()
    localStorage.setItem('token', generatedToken)
  }

  const getRandom = (min = 5, max = 10) => {
    const floatRandom = Math.random()
    const difference = (max - min) * 60000
    const random = Math.round(difference * floatRandom)
    return random + min
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
