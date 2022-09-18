import { useMemo, createContext, useState } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({})

  const providerValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth])

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>
}
