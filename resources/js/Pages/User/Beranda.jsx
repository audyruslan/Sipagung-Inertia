import React from "react";
import Statistic from "../../Components/User/Statistic";
import User from "../../Layouts/User";

export default function Beranda() {
    return (
        <User judul="Beranda">
            <div>
                <Statistic />
            </div>
        </User>
    );
}
