import { useState } from "react"

const InvoiceForm = ({ items, setItems }) => {

  const [item, setItem] = useState({
    description: "",
    quantity: "",
    rate: "",
  })

  const addItem = () => {

    if (
      !item.description ||
      !item.quantity ||
      !item.rate
    ) {
      return
    }

    const newItem = {
      ...item,
      amount:
        Number(item.quantity) * Number(item.rate),
    }

    setItems([...items, newItem])

    setItem({
      description: "",
      quantity: "",
      rate: "",
    })
  }

  return (

    <div className="grid md:grid-cols-4 gap-4 mb-6">

      <input
        type="text"
        placeholder="Description"
        className="border p-3 rounded-lg"
        value={item.description}
        onChange={(e) =>
          setItem({
            ...item,
            description: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Quantity"
        className="border p-3 rounded-lg"
        value={item.quantity}
        onChange={(e) =>
          setItem({
            ...item,
            quantity: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Rate"
        className="border p-3 rounded-lg"
        value={item.rate}
        onChange={(e) =>
          setItem({
            ...item,
            rate: e.target.value,
          })
        }
      />

      <button
        onClick={addItem}
        className="bg-black text-white rounded-lg px-4 py-3"
      >
        Add Item
      </button>

    </div>
  )
}

export default InvoiceForm