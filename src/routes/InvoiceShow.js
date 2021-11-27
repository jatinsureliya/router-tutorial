import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function InvoiceShow() {
    let params = useParams();
    let navigate = useNavigate();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));

    console.log(invoice);
    return (

        <main style={{ padding: "1rem" }}>
            {typeof invoice == 'undefined' ? (
                <p> "{params.invoiceId}" Invoice not found</p>
            ) : (<>
                <h2>Total Due: {invoice.amount}</h2>
                <p>
                    {invoice.name}: {invoice.number}
                </p>
                <p>Due Date: {invoice.due}</p>
                <p>
                    <button
                        onClick={() => {
                            deleteInvoice(invoice.number);
                            navigate("/invoices");
                        }}
                    >
                        Delete
                    </button>
                    <button onClick={() => navigate(`/invoices/${invoice.number}/edit`)}>
                        Edit
                    </button>
                </p>
            </>
            )
            }

        </main >

    );
}