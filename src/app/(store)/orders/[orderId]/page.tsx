import React from "react"

type TrackOrderProps = {
  params: { orderId: string }
}

function TrackOrderPage({ params: { orderId } }: TrackOrderProps) {
  return (
    <div>
      TrackOrderPage
      <p>{orderId}</p>
    </div>
  )
}

export default TrackOrderPage
