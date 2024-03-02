import AdminShell from "@/components/admin/AdminShell"
import { Suspense } from "react"
import { MediasPageContent } from "@/features/medias"

type Props = {}

async function MediasPage({}: Props) {
  return (
    <AdminShell
      heading="Medias"
      description="You can add/edit the medias from the dashboard"
    >
      <Suspense fallback={<>Loading...</>}>
        <MediasPageContent />
      </Suspense>
    </AdminShell>
  )
}

export default MediasPage
