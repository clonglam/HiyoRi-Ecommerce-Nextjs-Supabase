"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { AuthUser, Session } from "@supabase/supabase-js"
import { useToast } from "@/components/ui/use-toast"
import supabase from "../supabase/client"
import useCartStore from "@/components/cart/useCartStore"

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
  // const [session, setSession] = useState<Session | null>(null)
  const cart = useCartStore((s) => s.cart)

  const { toast } = useToast()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("_event", _event)

      switch (_event) {
        case "INITIAL_SESSION":
          supabase.auth.getUser().then(({ data }) => {
            setUser(data.user)
          })
          console.log("cart", cart)
          break
        case "PASSWORD_RECOVERY":
          supabase.auth.signOut()
          setUser(null)
          break

        case "SIGNED_IN":
          supabase.auth.getUser().then(({ data }) => {
            setUser(data.user)
          })
          toast({
            title: "Welcome Back.",
            description: "Your are arleady signed in.",
          })
          break
        case "SIGNED_OUT":
          setUser(null)
          break

        case "TOKEN_REFRESHED":
          supabase.auth.getUser().then(({ data }) => {
            setUser(data.user)
          })
          break
        case "USER_UPDATED":
          supabase.auth.getUser().then(({ data }) => {
            setUser(data.user)
          })
          break
        case "MFA_CHALLENGE_VERIFIED":
          supabase.auth.getUser().then(({ data }) => {
            setUser(data.user)
          })
          break
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <SupabaseAuthContext.Provider value={{ user }}>
      {children}
    </SupabaseAuthContext.Provider>
  )
}
