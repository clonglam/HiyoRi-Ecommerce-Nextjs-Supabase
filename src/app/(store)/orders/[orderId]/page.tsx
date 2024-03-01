import { Shell } from "@/components/layouts/Shell"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import OrderProgress from "../_components/OrderProgress"

type TrackOrderProps = {
  params: { orderId: string }
}

function TrackOrderPage({ params: { orderId } }: TrackOrderProps) {
  return (
    <Shell layout="narrow">
      <h1>{`Order Id: #${orderId}`}</h1>
      <h2 className="text-xl font-semibold">Arrive at Tomorrow 22:00 </h2>
      <div>
        Order Status
        <OrderProgress />
      </div>
      <Card>
        <CardHeader className="font-semibold">Shipping Address</CardHeader>
        <CardContent>
          <p>Hugo Lam</p>
          <p>4242 ORrder 122</p>
          <p>Vancourver 332 212</p>
        </CardContent>
      </Card>
    </Shell>
  )
}

export default TrackOrderPage
