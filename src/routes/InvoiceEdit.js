import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, updateInvoice } from "../data";

export default function InvoiceEdit() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return (

        <main style={{ padding: "1rem" }}>
            {typeof invoice == 'undefined' ? (
                <p> "{params.invoiceId}" Invoice not found</p>
            ) : (<>
                <h2>Total Due: <input type="text" value={invoice.amount} /> </h2>
                <p>
                    {invoice.name}: <input type="number" value={invoice.number} />
                </p>
                <p>Due Date: {invoice.due}</p>
                <p>
                    <button
                        onClick={() => {
                            updateInvoice(invoice.number);
                        }}
                    >
                        Update
                    </button>
                </p>
            </>
            )
            }

        </main >

    );
}