import { Link } from "@inertiajs/inertia-react";
import React from "react";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";

export default function Sidebar(props) {
    return (
        <div className="sm:h-screen h-fit p-5 bg-white shadow-xl w-full sm:w-fit md:w-64 fixed sm:relative bottom-0">
            <div className="hidden sm:flex space-x-4 py-5 justify-center items-center">
                <GiIcons.GiCorn size={32} className="text-green-600" />
                <h1 className="font-bold text-3xl text-green-600 hidden md:block sm:hidden">
                    SIPAGUNG
                </h1>
            </div>

            <div className="mt-0 sm:mt-10 flex flex-row sm:flex-col space-y-0 sm:space-y-2 items-center sm:items-start justify-evenly sm:justify-start">
                <Link className="w-auto sm:w-full" href="beranda">
                    <div
                        className={`flex ${
                            props.active == "Beranda"
                                ? "bg-green-600 border-green-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdDashboard size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Beranda</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="diagnosa-hama">
                    <div
                        className={`flex ${
                            props.active == "Diagnosa Hama"
                                ? "bg-green-600 border-green-900  text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaUserMd size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">
                            Diagnosa Hama
                        </h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="diagnosa-penyakit">
                    <div
                        className={`flex ${
                            props.active == "Diagnosa Penyakit"
                                ? "bg-green-600 border-green-900  text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaUserMd size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">
                            Diagnosa Penyakit
                        </h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="riwayat">
                    <div
                        className={`flex ${
                            props.active == "Riwayat"
                                ? "bg-green-600 border-green-900  text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaUserInjured size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Riwayat</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="keterangan">
                    <div
                        className={`flex ${
                            props.active == "Keterangan"
                                ? "bg-green-600 border-green-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaChartLine size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">
                            Keterangan
                        </h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="about">
                    <div
                        className={`flex ${
                            props.active == "About"
                                ? "bg-green-600 border-green-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaUser size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">About</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}
