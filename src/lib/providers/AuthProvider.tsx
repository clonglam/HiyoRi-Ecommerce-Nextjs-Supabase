"use client"

import { AuthUser } from "@supabase/supabase-js"

import { createContext, useContext, useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useToast } from "@/components/ui/use-toast"
import { env } from "@/env.mjs"

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

  const { toast } = useToast()

  const supabase = createClientComponentClient({
    supabaseKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    supabaseUrl: `https://${env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co`,
  })

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
