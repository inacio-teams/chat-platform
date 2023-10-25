import React from 'react'

import cover from '../../assets/auth-img.jpg'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${cover.src})` }}
    >
      {children}
    </div>
  )
}

export default AuthLayout
