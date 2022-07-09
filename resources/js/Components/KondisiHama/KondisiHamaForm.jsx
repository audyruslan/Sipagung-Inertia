import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function KondisiHamaForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [kondisihamaData, setKondisiHamaData] = useState({
        name: "",
    });

    const [error, setError] = useState();

    const submitKondisiHama = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("kondisihama-update", kondisihamaData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setKondisiHamaData((kondisihamaData) => ({
                        ...kondisihamaData,
                        name: "",
                    }));
                    toast.success("Kondisi berhasil diubah!");
                },
            });
        } else {
            Inertia.post("kondisihama", kondisihamaData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setKondisiHamaData((kondisihamaData) => ({
                        ...kondisihamaData,
                        name: "",
                    }));
                    toast.success("Kondisi berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setKondisiHamaData((kondisihamaData) => ({
            ...kondisihamaData,
            id: editData?.id,
            name: editData?.name,
        }));
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Kondisi`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitKondisiHama}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Kondisi</h1>
                        <input
                            onChange={(e) => {
                                setKondisiHamaData((kondisihamaData) => ({
                                    ...kondisihamaData,
                                    name: e.target.value,
                                }));
                            }}
                            value={kondisihamaData.name}
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
