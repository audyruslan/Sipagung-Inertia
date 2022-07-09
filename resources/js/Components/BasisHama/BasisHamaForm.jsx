import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";
import { baseUrlApi } from "../../Store/Global";
import axios from "axios";

export default function BasisHamaForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);
    const [gejalahamas, setGejalaHamas] = useState([]);
    const [hamas, setHamas] = useState([]);

    const urlApi = useRecoilValue(baseUrlApi);

    const [basishamaData, setBasisHamaData] = useState({
        gejalahama_id: "",
        hama_id: "",
        value: "",
    });

    const [error, setError] = useState();

    const submitBasisHama = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("basishama-update", basishamaData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setBasisHamaData((basishamaData) => ({
                        ...basishamaData,
                        gejalahama_id: "",
                        hama_id: "",
                        value: "",
                    }));
                    toast.success("Data berhasil diubah!");
                },
            });
        } else {
            Inertia.post("basishama", basishamaData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setBasisHamasData((basishamaData) => ({
                        ...basishamaData,
                        gejalahama_id: "",
                        hama_id: "",
                        value: "",
                    }));
                    toast.success("Data berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setBasisHamaData((basishamaData) => ({
            ...basishamaData,
            id: editData?.id,
            gejalahama_id: editData?.gejalahama_id,
            hama_id: editData?.hama_id,
            value: editData?.value,
        }));

        const getGejalaHamas = async () => {
            await axios.get(urlApi + "gejalahama-data").then((res) => {
                setGejalaHamas(res.data);
                setBasisHamaData((basishamaData) => ({
                    ...basishamaData,
                    gejalahama_id: res.data[0]?.id,
                }));
            });
        };
        const getHamas = async () => {
            await axios.get(urlApi + "hama-data").then((res) => {
                setHamas(res.data);
                setBasisHamaData((basishamaData) => ({
                    ...basishamaData,
                    hama_id: res.data[0]?.id,
                }));
            });
        };
        getGejalaHamas();
        getHamas();
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Basis Pengetahuan`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitBasisHama}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Gejala</h1>
                        <select
                            onChange={(e) => {
                                setBasisHamaData((basishamaData) => ({
                                    ...basishamaData,
                                    gejalahama_id: e.target.value,
                                }));
                            }}
                            value={basishamaData.gejalahama_id}
                            type="text"
                            name="gejalahama_id"
                            id="gejalahama_id"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            <option value="">Pilih Gejala</option>
                            {gejalahamas.map((gej, key) => {
                                return (
                                    <option key={key} value={gej.id}>
                                        {gej.name}
                                    </option>
                                );
                            })}
                        </select>
                        {error?.gejalahama_id && (
                            <span className="text-xs text-red-500">
                                {error?.gejalahama_id}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Penyakit</h1>
                        <select
                            onChange={(e) => {
                                setBasisHamaData((basishamaData) => ({
                                    ...basishamaData,
                                    hama_id: e.target.value,
                                }));
                            }}
                            value={basishamaData.hama_id}
                            type="text"
                            name="hama_id"
                            id="hama_id"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            <option value="">Pilih Penyakit</option>
                            {hamas.map((ham, key) => {
                                return (
                                    <option key={key} value={ham.id}>
                                        {ham.name}
                                    </option>
                                );
                            })}
                        </select>
                        {error?.hama_id && (
                            <span className="text-xs text-red-500">
                                {error?.hama_id}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Bobot</h1>
                        <input
                            onChange={(e) => {
                                setBasisHamaData((basishamaData) => ({
                                    ...basishamaData,
                                    value: e.target.value,
                                }));
                            }}
                            value={basishamaData.value}
                            type="number"
                            min="0"
                            name="value"
                            step=".01"
                            id="value"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.value && (
                            <span className="text-xs text-red-500">
                                {error?.value}
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold text-center py-2 rounded-lg mt-2"
                    >
                        Simpan
                    </button>
                </form>
            </ModalRoot>
        </div>
    );
}
