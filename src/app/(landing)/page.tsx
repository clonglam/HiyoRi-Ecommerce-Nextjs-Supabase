import CategoryScrollCards from "@/components/landing/CategoryScrollCards"
import { scollCards } from "@/config/categories"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CategoryScrollCards categoryScrollCards={scollCards} />
    </main>
  )
}
