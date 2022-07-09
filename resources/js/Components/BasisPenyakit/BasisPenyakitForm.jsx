import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";
import { baseUrlApi } from "../../Store/Global";
import axios from "axios";

export default function BasisPenyakitForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);
    const [gejalapenyakits, setGejalaPenyakits] = useState([]);
    const [penyakits, setPenyakits] = useState([]);

    const urlApi = useRecoilValue(baseUrlApi);

    const [basispenyakitData, setBasisPenyakitData] = useState({
        gejalapenyakit_id: "",
        penyakit_id: "",
        value: "",
    });

    const [error, setError] = useState();

    const submitBasisPenyakit = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("basispenyakit-update", basispenyakitData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setBasisPenyakitData((basispenyakitData) => ({
                        ...basispenyakitData,
                        gejalapenyakit_id: "",
                        penyakit_id: "",
                        value: "",
                    }));
                    toast.success("Data berhasil diubah!");
                },
            });
        } else {
            Inertia.post("basispenyakit", basispenyakitData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setBasisPenyakitsData((basispenyakitData) => ({
                        ...basispenyakitData,
                        gejalapenyakit_id: "",
                        penyakit_id: "",
                        value: "",
                    }));
                    toast.success("Data berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setBasisPenyakitData((basispenyakitData) => ({
            ...basispenyakitData,
            id: editData?.id,
            gejalapenyakit_id: editData?.gejalapenyakit_id,
            penyakit_id: editData?.penyakit_id,
            value: editData?.value,
        }));

        const getGejalaPenyakits = async () => {
            await axios.get(urlApi + "gejalapenyakit-data").then((res) => {
                setGejalaPenyakits(res.data);
                setBasisPenyakitData((basispenyakitData) => ({
                    ...basispenyakitData,
                    gejalapenyakit_id: res.data[0]?.id,
                }));
            });
        };
        const getPenyakits = async () => {
            await axios.get(urlApi + "penyakit-data").then((res) => {
                setPenyakits(res.data);
                setBasisPenyakitData((basispenyakitData) => ({
                    ...basispenyakitData,
                    penyakit_id: res.data[0]?.id,
                }));
            });
        };
        getGejalaPenyakits();
        getPenyakits();
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
                    onSubmit={submitBasisPenyakit}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Gejala</h1>
                        <select
                            onChange={(e) => {
                                setBasisPenyakitData((basispenyakitData) => ({
                                    ...basispenyakitData,
                                    gejalapenyakit_id: e.target.value,
                                }));
                            }}
                            value={basispenyakitData.gejalapenyakit_id}
                            type="text"
                            name="gejalapenyakit_id"
                            id="gejalapenyakit_id"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            <option value="">Pilih Gejala</option>
                            {gejalapenyakits.map((gej, key) => {
                                return (
                                    <option key={key} value={gej.id}>
                                        {gej.name}
                                    </option>
                                );
                            })}
                        </select>
                        {error?.gejalapenyakit_id && (
                            <span className="text-xs text-red-500">
                                {error?.gejalapenyakit_id}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Penyakit</h1>
                        <select
                            onChange={(e) => {
                                setBasisPenyakitData((basispenyakitData) => ({
                                    ...basispenyakitData,
                                    penyakit_id: e.target.value,
                                }));
                            }}
                            value={basispenyakitData.penyakit_id}
                            type="text"
                            name="penyakit_id"
                            id="penyakit_id"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            <option value="">Pilih Penyakit</option>
                            {penyakits.map((pen, key) => {
                                return (
                                    <option key={key} value={pen.id}>
                                        {pen.name}
                                    </option>
                                );
                            })}
                        </select>
                        {error?.penyakit_id && (
                            <span className="text-xs text-red-500">
                                {error?.penyakit_id}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Bobot</h1>
                        <input
                            onChange={(e) => {
                                setBasisPenyakitData((basispenyakitData) => ({
                                    ...basispenyakitData,
                                    value: e.target.value,
                                }));
                            }}
                            value={basispenyakitData.value}
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
