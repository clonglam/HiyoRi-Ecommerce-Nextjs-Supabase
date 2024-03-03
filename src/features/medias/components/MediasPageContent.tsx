"use client";
import { useRouter } from "next/navigation";
import UploadMediaContainer from "./UploadMediaContainer";

function MediasPageContent() {
  const router = useRouter();

  const openMediaDetails = (mediaId: string) => {
    router.push(`/admin/medias/${mediaId}`);
  };

  return <UploadMediaContainer onClickItemsHandler={openMediaDetails} />;
}

export default MediasPageContent;
