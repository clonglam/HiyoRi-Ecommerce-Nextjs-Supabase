"use client";
import { DocumentType, gql } from "@/gql";
import { useQuery } from "@urql/next";
import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import EmptyCart from "./EmptyCart";
import CartItemCard from "./CartItemCard";
import CheckoutButton from "./CheckoutButton";
import useCartStore, {
  CartItems,
  calcProductCountStorage,
} from "../useCartStore";
import { useToast } from "@/components/ui/use-toast";

function GuestCartSection() {
  const { toast } = useToast();
  const cartItems = useCartStore((s) => s.cart);
  const addProductToCart = useCartStore((s) => s.addProductToCart);
  const removeProduct = useCartStore((s) => s.removeProduct);

  const [{ data, fetching, error }, _] = useQuery({
    query: FetchGuestCartQuery,
    variables: {
      cartItems: Object.keys(cartItems).map((key) => key),
      first: 8,
    },
  });

  const subtotal = useMemo(
    () => calcSubtotal({ prdouctsDetails: data, quantity: cartItems }),
    [data, cartItems],
  );

  const productCount = useMemo(
    () => calcProductCountStorage(cartItems),
    [cartItems],
  );
  if (fetching) return LoadingCartSection();
  if (error) return <div>Error</div>;

  const addOneHandler = (productId: string, quantity: number) => {
    if (quantity < 8) {
      addProductToCart(productId, 1);
    } else {
      toast({ title: "Proudct Limit is reached." });
    }
  };
  const minusOneHandler = (productId: string, quantity: number) => {
    if (quantity > 1) {
      addProductToCart(productId, -1);
    } else {
      toast({ title: "Minimum is reached." });
    }
  };
  const removeHandler = (productId: string) => {
    removeProduct(productId);
    toast({ title: "Product Removed." });
  };

  return (
    <>
      {Object.keys(cartItems).length > 0 ? (
        <section
          aria-label="Cart Section"
          className="grid grid-cols-12 gap-x-6 gap-y-5"
        >
          <div className="col-span-12 md:col-span-9 max-h-[420px] md:max-h-[640px] overflow-y-auto">
            {data.productsCollection.edges.map(({ node }) => (
              <CartItemCard
                key={node.id}
                id={node.id}
                product={node}
                quantity={cartItems[node.id].quantity}
                addOneHandler={() =>
                  addOneHandler(node.id, cartItems[node.id].quantity)
                }
                minusOneHandler={() =>
                  minusOneHandler(node.id, cartItems[node.id].quantity)
                }
                removeHandler={() => removeHandler(node.id)}
              />
            ))}
          </div>

          <Card className="w-full h-[180px] px-3 col-span-12 md:col-span-3">
            <CardHeader className="px-3 pt-2 pb-0 text-md">
              <CardTitle className="text-lg mb-0">Subtotoal: </CardTitle>
              <CardDescription>{`${productCount} Items`}</CardDescription>
            </CardHeader>
            <CardContent className="relative overflow-hidden px-3 py-2">
              <p className="text-3xl md:text-lg lg:text-2xl font-bold">{`$ ${subtotal.toFixed(2).toString()}`}</p>
            </CardContent>

            <CardFooter className="gap-x-2 md:gap-x-5 px-3">
              <CheckoutButton guest={true} order={cartItems} />
            </CardFooter>
          </Card>
        </section>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default GuestCartSection;

export const LoadingCartSection = () => (
  <section
    className="grid grid-cols-12 gap-x-6 gap-y-5"
    aria-label="Loading Skeleton"
  >
    <div className="col-span-12 md:col-span-9 space-y-8">
      {[...Array(4)].map((_, index) => (
        <div
          className="flex items-center justify-between gap-x-6 gap-y-8 border-b p-5"
          key={index}
        >
          <Skeleton className="h-[120px] w-[120px]" />
          <div className="space-y-3 w-full">
            <Skeleton className="h-6 max-w-xs" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4 w-full max-w-xl" />
            <Skeleton className="h-4 w-full max-w-lg" />
          </div>
        </div>
      ))}
    </div>
    <div className="w-full h-[180px] px-3 col-span-12 md:col-span-3 border p-5">
      <div className="space-y-3 w-full">
        <Skeleton className="h-6 max-w-xs" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4 mb-6" />
        <Skeleton className="h-4 mb-6 max-w-[280px]" />
      </div>
    </div>
  </section>
);

const calcSubtotal = ({
  prdouctsDetails,
  quantity,
}: {
  prdouctsDetails: DocumentType<typeof FetchGuestCartQuery>;
  quantity: CartItems;
}) => {
  const productPrices =
    prdouctsDetails && prdouctsDetails.productsCollection.edges
      ? prdouctsDetails.productsCollection.edges
      : [];

  if (!productPrices.length) return 0;

  return productPrices.reduce(
    (acc, cur) => acc + quantity[cur.node.id].quantity * cur.node.price,
    0,
  );
};

const FetchGuestCartQuery = gql(/* GraphQL */ `
  query FetchGuestCartQuery(
    $cartItems: [String!]
    $first: Int
    $after: Cursor
  ) {
    productsCollection(
      first: $first
      after: $after
      filter: { id: { in: $cartItems } }
    ) {
      edges {
        node {
          id
          ...CartItemCardFragment
        }
      }
    }
  }
`);
