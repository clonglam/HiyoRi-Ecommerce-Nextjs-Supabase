"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "../ui/use-toast";

type Props = {};

function ErrorToaster({}: Props) {
  const { toast } = useToast();
  const searchParams = useSearchParams();

  useEffect(() => {
    const message = searchParams.get("message");

    if (message) toast({ title: "Error", description: message });
  }, [searchParams]);

  return <></>;
}

export default ErrorToaster;
