import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./Layout";

import Expenses from "./routes/expenses";
import InvoiceEdit from "./routes/InvoiceEdit";
import InvoiceList from "./routes/InvoiceList";
import InvoiceShow from "./routes/InvoiceShow";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="invoices" element={<InvoiceList />}>
                    <Route
                        index
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>Select an invoice</p>
                            </main>
                        }
                    />
                    <Route path=":invoiceId" element={<InvoiceShow />} />
                    <Route path=":invoiceId/edit" element={<InvoiceEdit />} />
                </Route>

                <Route path="expenses" element={<Expenses />} />

                <Route path="/level" element={<Level />}>
                    <Route path="l1" element={<Level1 />} />
                    <Route path="l2" element={<Level2 />} />
                    <Route path="l3" element={<Level3 />} />
                    <Route path="l4" element={<Level4 />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Route>


        </Routes>
    </BrowserRouter>,
    rootElement
);

function NotFound() {
    return (
        <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
        </main>
    );
}

function Level() {
    return (
        <>
            <h1>Level 0</h1>
            <Link to="/level/l1">Go To Level 1</Link>
            <Outlet />
        </>

    );
}
function Level1() {
    return (
        <>
            <h1>Level 1</h1>
            <Link to="/level/l2">Go To Level 2</Link>
            <Outlet />
        </>

    );
}
function Level2() {
    return (
        <>
            <h1>Level 2</h1>
            <Link to="/level/l3">Go To Level 3</Link>
            <Outlet />
        </>
    );
}
function Level3() {
    return (
        <>
            <h1>Level 3</h1>
            <Link to="/level/l4">Go To Level 4</Link>
            <Outlet />
        </>
    );
}
function Level4() {
    return (
        < >
            <h1>Level 4</h1>
        </>
    );
}