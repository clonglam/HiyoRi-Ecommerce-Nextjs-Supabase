import React from "react"

import UploadMediasModal from "@/components/dashboard/media/UploadMediasModal"

type Props = {}

async function NewMediaPage({}: Props) {
  return (
    // <Modal header="Add Media">
    <UploadMediasModal name={""} />
    // </Modal>
  )
}

export default NewMediaPage
