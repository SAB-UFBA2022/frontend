import { createContext, useState, useMemo } from 'react'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({})

  const provideValues = useMemo(() => ({ auth, setAuth }), [auth, setAuth])

  return <AuthContext.Provider value={provideValues}>{children}</AuthContext.Provider>
}

export default AuthContext
