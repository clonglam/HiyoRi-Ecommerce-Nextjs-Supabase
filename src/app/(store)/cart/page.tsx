import CartSection from "@/components/cart/CartSection"
import RecommendationProducts from "@/components/products/RecommendationProducts"
import { gql } from "@/gql"
import { createClient } from "@/lib/supabase/server"
import { getClient } from "@/lib/urql/urql"
import { cookies } from "next/headers"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"

async function CartPage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    // redirect("/")
  }

  const CartPageQuery = gql(/* GraphQL */ `
    query CartPageQuery($first: Int!, $userId: UUID) {
      recommendations: productsCollection(first: $first) {
        edges {
          node {
            id
            ...ProductCardFragment
          }
        }
      }
      cartCollection(filter: { userId: { eq: $userId } }, first: 15) {
        edges {
          node {
            ...CartItemCardFragment
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `)

  const { data, error } = await getClient().query(CartPageQuery, {
    first: 4,
    userId: user?.id,
  })

  console.log("error", error)
  if (!data || !data.recommendations) return notFound()

  return (
    <div className="min-h-screen container">
      <section className="flex justify-between items-center py-8">
        <h1 className="text-3xl">Your Cart</h1>
        <Link href="/shop">Continue shopping</Link>
      </section>

      <Suspense fallback={<div>I am Loading</div>}>
        <CartSection />
        {/* <section>
          {data.cartCollection && data.cartCollection.edges.length > 0 ? (
            <div>
              {data.cartCollection?.edges.map(({ node }) => (
                <CartItemCard item={node} key={node.id} />
              ))}
            </div>
          ) : (
            <EmptyCart />
          )}
        </section> */}
      </Suspense>

      <Suspense fallback={<div>I am Loading</div>}>
        <RecommendationProducts
          recommendationsEdge={data.recommendations.edges}
        />
      </Suspense>
    </div>
  )
}

export default CartPage
