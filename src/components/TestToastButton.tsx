"use client"
import React from "react"
import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"

type Props = {}

function TestToastButton({}: Props) {
  const { toast } = useToast()
  return (
    <Button
      onClick={() => {
        console.log("atfasfa sfa")
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      TestToastButton
    </Button>
  )
}

export default TestToastButton
