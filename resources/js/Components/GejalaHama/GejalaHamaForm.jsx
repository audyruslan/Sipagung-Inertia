import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function GejalaHamaForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [gejalahamaData, setGejalaHamaData] = useState({
        name: "",
    });

    const [error, setError] = useState();

    const submitGejalaHama = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("gejalahama-update", gejalahamaData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setGejalaHamaData((gejalahamaData) => ({
                        ...gejalahamaData,
                        name: "",
                    }));
                    toast.success("Gejala berhasil diubah!");
                },
            });
        } else {
            Inertia.post("gejalahama", gejalahamaData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setGejalaHamaData((gejalahamaData) => ({
                        ...gejalahamaData,
                        name: "",
                    }));
                    toast.success("Gejala berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setGejalaHamaData((gejalahamaData) => ({
            ...gejalahamaData,
            id: editData?.id,
            name: editData?.name,
        }));
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Gejala`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitGejalaHama}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Gejala</h1>
                        <input
                            onChange={(e) => {
                                setGejalaHamaData((gejalahamaData) => ({
                                    ...gejalahamaData,
                                    name: e.target.value,
                                }));
                            }}
                            value={gejalahamaData.name}
                            type="text"
                            name="name"
                            id="name"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.name && (
                            <span className="text-xs text-red-500">
                                {error?.name}
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white font-bold text-center py-2 rounded-lg mt-2"
                    >
                        Simpan
                    </button>
                </form>
            </ModalRoot>
        </div>
    );
}
