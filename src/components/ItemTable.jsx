const ItemTable = ({ items, setItems }) => {

  const deleteItem = (index) => {

    const updatedItems = [...items]

    updatedItems.splice(index, 1)

    setItems(updatedItems)
  }

  return (

    <div className="overflow-x-auto mt-6">

      <table className="w-full border border-collapse">

        <thead>

          <tr className="bg-gray-200">

            <th className="border p-3">
              Description
            </th>

            <th className="border p-3">
              Quantity
            </th>

            <th className="border p-3">
              Rate
            </th>

            <th className="border p-3">
              Amount
            </th>

            <th className="border p-3">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {items.length > 0 ? (

            items.map((item, index) => (

              <tr key={index}>

                <td className="border p-3">
                  {item.description}
                </td>

                <td className="border p-3">
                  {item.quantity}
                </td>

                <td className="border p-3">
                  ₹{item.rate}
                </td>

                <td className="border p-3">
                  ₹{item.amount}
                </td>

                <td className="border p-3">

                  <button
                    type="button"
                    onClick={() => deleteItem(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))

          ) : (

            <tr>

              <td
                colSpan="5"
                className="text-center p-4"
              >
                No items added
              </td>

            </tr>
          )}

        </tbody>

      </table>

    </div>
  )
}

export default ItemTable