"use client";
import { gql } from "@/gql";
import { useAuth } from "@/providers/AuthProvider";
import { cn } from "@/lib/utils";
import { useMutation } from "@urql/next";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/layouts/icons";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import useWishlistStore from "../useWishlistStore";

type Props = {
  productId: string;
};

const AddProductToWishList = gql(/* GraphQL */ `
  mutation AddProductToWishList($productId: String, $userId: UUID) {
    insertIntowishlistCollection(
      objects: { user_id: $userId, product_id: $productId }
    ) {
      affectedCount
      records {
        __typename
        user_id
        product_id
      }
    }
  }
`);
const RemoveWishlistItemMutation = gql(/* GraphQL */ `
  mutation RemoveWishlistItemMutation($productId: String, $userId: UUID) {
    deleteFromwishlistCollection(
      filter: {
        and: [{ user_id: { eq: $userId } }, { product_id: { eq: $productId } }]
      }
      atMost: 1
    ) {
      records {
        __typename
      }
    }
  }
`);

function AddToWishListButton({ productId }: Props) {
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const wishlist = useWishlistStore((s) => s.wishlist);
  const toggleWishlist = useWishlistStore((s) => s.toggleWishItem);

  const [, addToWishlist] = useMutation(AddProductToWishList);
  const [, removeWishlistItem] = useMutation(RemoveWishlistItemMutation);

  const onClickHandler = async () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      if (wishlist[productId]) {
        const res = await removeWishlistItem({ productId, userId: user.id });
        if (res.data) toast({ title: "Removed from wishlist." });
      } else {
        const res = await addToWishlist({ productId, userId: user.id });
        if (res.data) toast({ title: "Products is added to the list" });
      }

      toggleWishlist(productId);
    }
  };
  return (
    <Button
      className="rounded-full p-3"
      variant="ghost"
      onClick={onClickHandler}
    >
      <Icons.heart
        className={cn(
          "w-4 h-4",
          wishlist[productId] ? "fill-red-600 " : "fill-none",
        )}
      />
    </Button>
  );
}

export default AddToWishListButton;
