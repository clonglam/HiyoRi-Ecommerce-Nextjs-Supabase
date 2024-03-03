"use client";
import { useAuth } from "@/providers/AuthProvider";
import UserCartSection from "./UserCartSection";

import GuestCartSection from "./GuestCartSection";

function CartSection() {
  const { user } = useAuth();

  return <>{user ? <UserCartSection user={user} /> : <GuestCartSection />}</>;
}

export default CartSection;
