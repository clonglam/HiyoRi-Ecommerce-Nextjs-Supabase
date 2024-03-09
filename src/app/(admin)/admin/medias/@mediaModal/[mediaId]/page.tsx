import { getMedia } from "@/_actions/medias";
import { UpdateMediaForm } from "@/features/medias";
import Modal from "@/components/ui/Modal";
import { keytoUrl } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = { params: { mediaId: string } };

async function EditMediaModals({ params: { mediaId } }: Props) {
  // TODO: Change from server Action to GrahpQL
  const media = await getMedia(mediaId);
  if (!media) return notFound();

  return (
    <Modal header="Modify Image" containerClassName="px-5">
      <div className="flex flex-col md:flex-row gap-y-5 gap-x-5">
        <div className="flex-1 w-[640px]">
          <Image
            src={keytoUrl(media.key)}
            alt={media.alt}
            width={640}
            height={640}
            className="max-w-[640px] w-full h-auto object-cover"
          />
        </div>
        <div className="border-t md:border-t-0 md:border-l border-zinc-600 pt-5">
          <UpdateMediaForm media={media} />
        </div>
      </div>
    </Modal>
  );
}

export default EditMediaModals;
