import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {


    return (
        <>
            <Header />
            <div className="content">
                <Outlet />

            </div>
        </>
    )
}