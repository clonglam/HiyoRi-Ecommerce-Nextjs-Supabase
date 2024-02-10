import { getMedias } from "@/_actions/medias"
import AdminShell from "@/components/admin/AdminShell"
import { Icons } from "@/components/icons"
import { keytoUrl } from "@/lib/s3/s3"
import Image from "next/image"
import Link from "next/link"

type Props = {}

async function MediasPage({}: Props) {
  const medias = await getMedias()

  return (
    <AdminShell
      heading="Medias"
      description="You can add/edit the medias from the dashboard"
    >
      <div
        className="grid max-w-[1200px] mx-auto gap-3 gap-y-5"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        }}
      >
        <Link
          href={"/admin/medias/new"}
          className=" h-[120px] border-2 border-dashed border-zinc-400 text-zinc-400 flex flex-col justify-center items-center"
        >
          <Icons.add size={32} />
          <p className="text-sm">Add media</p>
        </Link>

        {medias.map((media) => (
          <Link
            href={`/admin/medias/${media.id}`}
            className="object-contain object-center group relative h-[120px] w-[120px]"
            key={media.key}
          >
            <Image
              src={keytoUrl(media.key)}
              alt={media.alt}
              width={120}
              height={120}
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              className="group-hover:opacity-30 transition-all duration-300 object-contain"
            />
          </Link>
        ))}
      </div>
    </AdminShell>
  )
}

export default MediasPage
