"use client";
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

function NewsletterForm() {
  return (
    <form className="">
      <h3 className="text-xl mb-5 font-light">Sign up to Our Newsletter</h3>
      <div className="space-y-3 mb-5">
        <Label>Email*</Label>
        <Input placeholder="Email" />
      </div>
      <Button type="submit" variant={"outline"} size="lg">
        Submit
      </Button>
    </form>
  );
}

export default NewsletterForm;
