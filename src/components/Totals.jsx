const Totals = ({ items }) => {

  const subtotal = items.reduce(
    (acc, item) => acc + item.amount,
    0
  )

  const tax = subtotal * 0.18

  const total = subtotal + tax

  return (

    <div className="mt-8 text-right space-y-2">

      <h2 className="text-xl">
        Subtotal: ₹{subtotal.toFixed(2)}
      </h2>

      <h2 className="text-xl">
        Tax (18%): ₹{tax.toFixed(2)}
      </h2>

      <h1 className="text-2xl font-bold">
        Total: ₹{total.toFixed(2)}
      </h1>

    </div>
  )
}

export default Totals