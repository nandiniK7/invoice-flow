const ClientForm = ({ client, setClient }) => {

  return (

    <div className="grid md:grid-cols-2 gap-4 mb-8">

      <input
        type="text"
        placeholder="Client Name"
        className="border p-3 rounded-lg"
        value={client.name}
        onChange={(e) =>
          setClient({
            ...client,
            name: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Client Address"
        className="border p-3 rounded-lg"
        value={client.address}
        onChange={(e) =>
          setClient({
            ...client,
            address: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Invoice Number"
        className="border p-3 rounded-lg"
        value={client.invoiceNumber}
        onChange={(e) =>
          setClient({
            ...client,
            invoiceNumber: e.target.value,
          })
        }
      />

      <input
        type="date"
        className="border p-3 rounded-lg"
        value={client.date}
        onChange={(e) =>
          setClient({
            ...client,
            date: e.target.value,
          })
        }
      />

    </div>
  )
}

export default ClientForm