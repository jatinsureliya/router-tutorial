import { Outlet, NavLink, useSearchParams, useLocation } from "react-router-dom";
import { getAllInvoices } from "../data";

function QueryNavLink({ to, ...props }) {
    let location = useLocation();

    return <NavLink to={to + location.search} {...props} />;
}

export default function InvoiceList() {
    let all_invoices = getAllInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >

                <input
                    value={searchParams.get("filter") || ""}
                    onChange={(e) => {
                        let filter = e.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />


                {all_invoices.filter(invoice => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    return invoice.name.toLowerCase().includes(filter.toLowerCase());
                })

                    .map(invoice => (
                        <QueryNavLink
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}

                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : ""
                                };
                            }}
                        >
                            ({invoice.number}) {invoice.name}
                        </QueryNavLink>
                    ))}
            </nav>
            <Outlet />
        </div >
    );
}