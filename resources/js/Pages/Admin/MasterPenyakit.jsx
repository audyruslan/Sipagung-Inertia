import React, { useState } from "react";
import Admin from "../../Layouts/Admin";
import Penyakit from "./Penyakit"
import GejalaPenyakit from "./GejalaPenyakit";
import BasisPenyakit from "./BasisPenyakit";

export default function MasterPenyakit() {
    const [tab, setTab] = useState("penyakit");

    return (
        <Admin judul="Master Penyakit">
            <div className="p-4 space-y-3">
                <div className="flex space-x-3">
                    <div
                        className={`px-4 py-2 cursor-pointer rounded-xl ${
                            tab == "penyakit"
                                ? "bg-green-500 text-white"
                                : "bg-gray-100 text-green-500 border-green-500"
                        } font-semibold`}
                        onClick={() => {
                            setTab("penyakit");
                        }}
                    >
                        Data Penyakit
                    </div>
                    <div
                        className={`px-4 py-2 cursor-pointer rounded-xl ${
                            tab == "gejalapenyakit"
                                ? "bg-green-500 text-white"
                                : "bg-gray-100 text-green-500 border-green-500"
                        } font-semibold`}
                        onClick={() => {
                            setTab("gejalapenyakit");
                        }}
                    >
                        Gejala Penyakit
                    </div>
                    <div
                        className={`px-4 py-2 cursor-pointer rounded-xl ${
                            tab == "basispenyakit"
                                ? "bg-green-500 text-white"
                                : "bg-gray-100 text-green-500 border-green-500"
                        } font-semibold`}
                        onClick={() => {
                            setTab("basispenyakit");
                        }}
                    >
                        Basis Penyakit
                    </div>
                </div>
                {tab == "penyakit" && <Penyakit />}
                {tab == "gejalapenyakit" && <GejalaPenyakit />}
                {tab == "basispenyakit" && <BasisPenyakit />}
            </div>
        </Admin>
    );
}
