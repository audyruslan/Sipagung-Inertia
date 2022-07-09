import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function PenyakitForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [penyakitData, setPenyakitData] = useState({
        name: "",
        detail: "",
        solution: "",
        image: "",
    });

    const [error, setError] = useState();

    const submitPenyakit = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("penyakit-update", penyakitData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setPenyakitData((penyakitData) => ({
                        ...penyakitData,
                        name: "",
                        detail: "",
                        solution: "",
                        image: "",
                    }));
                    toast.success("Data berhasil diubah!");
                },
            });
        } else {
            Inertia.post("penyakit", penyakitData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setPenyakitData((penyakitData) => ({
                        ...penyakitData,
                        name: "",
                        detail: "",
                        solution: "",
                        image: "",
                    }));
                    toast.success("Data berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setPenyakitData((penyakitData) => ({
            ...penyakitData,
            id: editData?.id,
            name: editData?.name,
            detail: editData?.detail,
            solution: editData?.solution,
            image: editData?.image,
        }));
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Penyakit`}
                    </h1>
                }
            >
                <form onSubmit={submitPenyakit} className="flex flex-col space-y-3">
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Penyakit</h1>
                        <input
                            onChange={(e) => {
                                setPenyakitData((penyakitData) => ({
                                    ...penyakitData,
                                    name: e.target.value,
                                }));
                            }}
                            value={penyakitData.name}
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
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Detail</h1>
                        <textarea
                            onChange={(e) => {
                                setPenyakitData((penyakitData) => ({
                                    ...penyakitData,
                                    detail: e.target.value,
                                }));
                            }}
                            value={penyakitData.detail}
                            type="text"
                            name="str"
                            id="str"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            {penyakitData.detail}
                        </textarea>
                        {error?.detail && (
                            <span className="text-xs text-red-500">
                                {error?.detail}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Solution</h1>
                        <textarea
                            onChange={(e) => {
                                setPenyakitData((penyakitData) => ({
                                    ...penyakitData,
                                    solution: e.target.value,
                                }));
                            }}
                            value={penyakitData.solution}
                            type="text"
                            name="str"
                            id="str"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            {penyakitData.solution}
                        </textarea>
                        {error?.solution && (
                            <span className="text-xs text-red-500">
                                {error?.solution}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Gambar</h1>
                        <input
                            onChange={(e) => {
                                setPenyakitData((penyakitData) => ({
                                    ...penyakitData,
                                    image: e.target.files,
                                }));
                            }}
                            type="file"
                            name="image"
                            id="image"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.image && (
                            <span className="text-xs text-red-500">
                                {error?.image}
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
