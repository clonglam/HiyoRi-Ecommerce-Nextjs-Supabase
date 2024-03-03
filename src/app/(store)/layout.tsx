import { CartSheet } from "@/features/carts";
import MainFooter from "@/components/layouts/MainFooter";
import Navbar from "@/components/layouts/MainNavbar";
import { ReactNode } from "react";

type Props = { children: ReactNode };

async function StoreLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="pt-[50px]">{children}</main>
      <CartSheet />
      <MainFooter />
    </>
  );
}

export default StoreLayout;
