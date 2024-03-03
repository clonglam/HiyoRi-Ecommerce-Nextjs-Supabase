import { redirect } from "next/navigation";
import React from "react";

type Props = {};

function MediaPage({}: Props) {
  redirect("/admin/medias");
  return <div>MediaPage</div>;
}

export default MediaPage;
