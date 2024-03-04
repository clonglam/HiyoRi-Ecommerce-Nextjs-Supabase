"use client";
import { useToast } from "@/components/ui/use-toast";
import { User } from "@supabase/auth-helpers-nextjs";
import { useMutation, useQuery } from "@urql/next";
import { FetchCartQuery } from "../components/UserCartSection";
import { createCartMutation, updateCartsMutation } from "../query";
import useCartStore from "../useCartStore";

function useCartActions(user: User | null, productId: string) {
  const { toast } = useToast();
  const [, addToCart] = useMutation(createCartMutation);
  const [, updateCart] = useMutation(updateCartsMutation);
  const addProductStorage = useCartStore((s) => s.addProductToCart);

  const [{ data }, refetch] = useQuery({
    query: FetchCartQuery,
    variables: {
      userId: user ? user.id : undefined,
    },
  });

  const authAddOrUpdateProduct = async (quantity: number) => {
    const existedProduct = data?.cartsCollection.edges.find(
      ({ node }) => node.product_id === productId,
    );
    try {
      let res;
      if (!existedProduct) {
        res = await addToCart({
          productId,
          userId: user.id,
          quantity,
        });
        refetch({ requestPolicy: "network-only" });
      } else {
        res = await updateCart({
          productId,
          userId: user.id,
          newQuantity: existedProduct.node.quantity + quantity,
        });
      }
      if (res) toast({ title: "Success, Added a Product to the Cart." });
    } catch (err) {
      toast({ title: "Error, Unexpected Error occurred." });
    }
  };

  const guestAddProduct = (quantity: number) => {
    addProductStorage(productId, quantity);
    toast({ title: "Sucess, Added a Product to the Cart." });
  };

  const addProductToCart = (quantity: number) =>
    !user ? guestAddProduct(quantity) : authAddOrUpdateProduct(quantity);

  return { addProductToCart };
}

export default useCartActions;
