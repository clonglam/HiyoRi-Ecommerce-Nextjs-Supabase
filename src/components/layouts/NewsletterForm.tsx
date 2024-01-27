"use client"
import React from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

function NewsletterForm() {
  return (
    <>
      NewsletterForm
      <p>Sign up to Our Newsletter</p>
      <form>
        <div>
          <Label>Email*</Label>
          <Input placeholder="Email" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}

export default NewsletterForm
