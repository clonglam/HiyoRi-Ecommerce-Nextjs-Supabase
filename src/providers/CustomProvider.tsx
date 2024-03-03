"use client";

import { SupabaseAuthProvider } from "./AuthProvider";
import UrqlProvider from "./UrqlProvider";

export default function CustomProvider({ children }: React.PropsWithChildren) {
  return (
    <SupabaseAuthProvider>
      <UrqlProvider>{children}</UrqlProvider>
    </SupabaseAuthProvider>
  );
}
