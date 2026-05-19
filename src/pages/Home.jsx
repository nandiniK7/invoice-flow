import React, { useState } from "react";

const Home = () => {
  const [clientName, setClientName] = useState("");
  const [address, setAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [date, setDate] = useState("");

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");

  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!description || !quantity || !rate) {
      alert("Please fill all fields");
      return;
    }

    const newItem = {
      description,
      quantity,
      rate,
      amount: quantity * rate,
    };

    setItems([...items, newItem]);

    setDescription("");
    setQuantity("");
    setRate("");
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const downloadPDF = () => {
    const element = document.getElementById("invoice");

    if (!element) {
      alert("Invoice not found");
      return;
    }

    const printWindow = window.open("", "", "width=900,height=700");

    printWindow.document.write(`
      <html>
        <head>
          <title>Invoice</title>

          <style>
            body {
              font-family: Arial;
              padding: 40px;
              color: black;
            }

            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }

            th, td {
              border: 1px solid #ccc;
              padding: 12px;
              text-align: center;
            }

            h1 {
              color: #0891b2;
            }

            .no-print {
              display: none;
            }
          </style>
        </head>

        <body>
          ${element.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8">
      <div
        id="invoice"
        className="max-w-6xl mx-auto bg-gray-900 text-white shadow-2xl border border-gray-700 rounded-2xl p-8"
      >
        <h1 className="text-5xl font-bold text-center text-cyan-400 mb-10">
          Invoice Builder
        </h1>

        {/* Client Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <input
            type="text"
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="border border-gray-600 bg-gray-800 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="text"
            placeholder="Invoice Number"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            className="border border-gray-600 bg-gray-800 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="text"
            placeholder="Client Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="col-span-2 border border-gray-600 bg-gray-800 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-600 bg-gray-800 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Add Items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-600 bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border border-gray-600 bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="number"
            placeholder="Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="border border-gray-600 bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            onClick={addItem}
            className="no-print bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-lg font-semibold transition"
          >
            Add Item
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl">
            <thead className="bg-cyan-500 text-black">
              <tr>
                <th className="border border-gray-700 p-4">
                  Description
                </th>

                <th className="border border-gray-700 p-4">
                  Quantity
                </th>

                <th className="border border-gray-700 p-4">
                  Rate
                </th>

                <th className="border border-gray-700 p-4">
                  Amount
                </th>

                <th className="border border-gray-700 p-4 no-print">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-700 p-4 text-center">
                    {item.description}
                  </td>

                  <td className="border border-gray-700 p-4 text-center">
                    {item.quantity}
                  </td>

                  <td className="border border-gray-700 p-4 text-center">
                    ₹{item.rate}
                  </td>

                  <td className="border border-gray-700 p-4 text-center">
                    ₹{item.amount}
                  </td>

                  <td className="border border-gray-700 p-4 text-center no-print">
                    <button
                      onClick={() => deleteItem(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="text-right mt-10 space-y-3">
          <h2 className="text-2xl font-semibold">
            Subtotal: ₹{subtotal.toFixed(2)}
          </h2>

          <h2 className="text-2xl font-semibold">
            Tax (18%): ₹{tax.toFixed(2)}
          </h2>

          <h2 className="text-4xl font-bold text-cyan-400">
            Total: ₹{total.toFixed(2)}
          </h2>
        </div>

        {/* Download PDF */}
        <div className="text-center mt-10">
          <button
            onClick={downloadPDF}
            className="no-print bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl text-lg font-semibold transition"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;