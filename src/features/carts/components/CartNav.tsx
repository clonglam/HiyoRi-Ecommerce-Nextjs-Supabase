"use client";
import { useMemo } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { User } from "@supabase/auth-helpers-nextjs";
import { useQuery } from "@urql/next";
import CartLink from "./CartLink";
import { FetchCartQuery } from "./UserCartSection";
import useCartStore, { calcProductCountStorage } from "../useCartStore";

function CartNav() {
  const { user } = useAuth();
  return <>{!user ? <GuestCart /> : <UserCartNav currentUser={user} />}</>;
}

const GuestCart = () => {
  const cart = useCartStore((s) => s.cart);

  const productCountStorage = useMemo(
    () => calcProductCountStorage(cart),
    [cart],
  );
  return <CartLink productCount={productCountStorage} />;
};

const UserCartNav = ({ currentUser }: { currentUser: User }) => {
  const [{ data, fetching, error }, refetch] = useQuery({
    query: FetchCartQuery,
    variables: {
      userId: currentUser.id,
    },
  });

  const carts = data?.cartsCollection;

  const productCount = useMemo(
    () => (carts?.edges || []).reduce((acc, cur) => acc + cur.node.quantity, 0),
    [carts.edges],
  );

  return (
    <div>
      {error && <CartLink productCount={0} />}

      {fetching && <CartLink productCount={0} />}

      {carts && <CartLink productCount={productCount} />}
    </div>
  );
};
export default CartNav;
