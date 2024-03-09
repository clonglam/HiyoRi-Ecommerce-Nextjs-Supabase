import { cn } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import { CartLink, CartNav } from "../../features/carts";
import { UserNav } from "@/features/auth";
import { Icons } from "./icons";
import Branding from "./Branding";
import MobileNavbar from "./MobileNavbar";
import SearchInput from "./SearchInput";
import { SideMenu } from "./SideMenu";

interface MainNavbarProps {
  adminLayout?: boolean;
}

async function MainNavbar({ adminLayout = false }: MainNavbarProps) {
  return (
    <nav className="bg-background/95 fixed z-50 w-full">
      <div
        className={cn(
          adminLayout ? "mx-auto px-[3rem] max-w-[2500px] py-3" : "container",
        )}
      >
        <div className="hidden md:flex gap-x-8 justify-between items-center">
          {/* Menu & branding */}
          <div className="flex gap-x-3 items-center">
            <SideMenu />
            <Branding />
          </div>

          {adminLayout ? (
            <></>
          ) : (
            <Suspense>
              <SearchInput />
            </Suspense>
          )}

          {/* Nav Action */}
          <div className="flex gap-x-5 relative items-center">
            <Suspense>
              <UserNav />
            </Suspense>

            <Link href={"/wish-list"}>
              <Icons.heart className="w-4 h-4" aria-label="wishlist" />
            </Link>

            <Suspense fallback={<CartLink productCount={0} />}>
              {!adminLayout && <CartNav />}
            </Suspense>
          </div>
        </div>

        <MobileNavbar adminLayout={adminLayout} />
      </div>
    </nav>
  );
}

export default MainNavbar;
