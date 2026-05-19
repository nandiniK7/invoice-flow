const PdfButton = () => {

  const downloadPDF = () => {

    const element =
      document.getElementById("invoice-content")

    if (!element) {

      alert("Invoice not found")

      return
    }

    const printWindow = window.open(
      "",
      "",
      "width=800,height=600"
    )

    printWindow.document.write(`
      <html>
        <head>
          <title>Invoice</title>

          <style>

            body {
              font-family: Arial;
              padding: 20px;
            }

            button {
              display: none;
            }

          </style>

        </head>

        <body>
          ${element.innerHTML}
        </body>

      </html>
    `)

    printWindow.document.close()

    printWindow.focus()

    setTimeout(() => {

      printWindow.print()

      printWindow.close()

    }, 500)
  }

  return (

    <div className="text-center mt-8">

      <button
        onClick={downloadPDF}
        className="bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Download PDF
      </button>

    </div>
  )
}

export default PdfButton