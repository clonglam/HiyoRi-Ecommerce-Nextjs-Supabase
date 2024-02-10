import Image from "next/image"
import { notFound } from "next/navigation"

type Props = { params: { mediaId: string } }

async function EditMediaModals({ params: { mediaId } }: Props) {
  // const media = await getMedia(mediaId)
  // if (!media) return notFound()

  return (
    <></>
    // <Modal header="Modify Image">
    //   <div className="flex">
    //     <div className="flex-1">
    //       <Image
    //         src={"https://hugo-coding.s3.us-west-1.amazonaws.com/" + media.key}
    //         alt={media.name}
    //         width={580}
    //         height={260}
    //       />
    //     </div>
    //     <div>
    //       <UpdateMediaForm media={media} />
    //     </div>
    //   </div>
    // </Modal>
  )
}

export default EditMediaModals
