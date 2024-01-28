import React from "react"
import { Button } from "../ui/button"
import { Icons } from "../icons"

type Props = {}

function AddToWishListButton({}: Props) {
  return (
    <Button className="rounded-full p-3" variant="ghost">
      <Icons.heart className="w-4 h-4" />
    </Button>
  )
}

export default AddToWishListButton
