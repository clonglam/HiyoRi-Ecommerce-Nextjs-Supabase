"use client"

import { AuthUser } from "@supabase/supabase-js"

import { useToast } from "@/components/ui/use-toast"
import { createContext, useContext, useEffect, useState } from "react"
import createClient from "../supabase/client"

type SupabaseAuthContextType = {
  user: AuthUser | null
}

const SupabaseAuthContext = createContext<SupabaseAuthContextType>({
  user: null,
})

export const useAuth = () => {
  return useContext(SupabaseAuthContext)
}

interface SupabaseAuthProviderProps {
  children: React.ReactNode
}

export const SupabaseAuthProvider: React.FC<SupabaseAuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const supabase = createClient()

  const { toast } = useToast()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
      }
    }
    getUser()
  }, [supabase, toast])

  return (
    <SupabaseAuthContext.Provider value={{ user }}>
      {children}
    </SupabaseAuthContext.Provider>
  )
}
