import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function HamaForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [hamaData, setHamaData] = useState({
        name: "",
        detail: "",
        solution: "",
        image: "",
    });

    const [error, setError] = useState();

    const submitHama = (e) => {
        e.preventDefault(); 

        if (editData) {
            Inertia.post("hama-update", hamaData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setHamaData((hamaData) => ({
                        ...hamaData,
                        name: "",
                        detail: "",
                        solution: "",
                        image: "",
                    }));
                    toast.success("Hama berhasil diubah!");
                },
            });
        } else {
            Inertia.post("hama", hamaData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setHamaData((hamaData) => ({
                        ...hamaData,
                        name: "",
                        detail: "",
                        solution: "",
                        image: "",
                    }));
                    toast.success("Hama berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setHamaData((hamaData) => ({
            ...hamaData,
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
                        {`${editData ? "Edit" : "Tambah"} Hama`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitHama}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Hama</h1>
                        <input
                            onChange={(e) => {
                                setHamaData((hamaData) => ({
                                    ...hamaData,
                                    name: e.target.value,
                                }));
                            }}
                            value={hamaData.name}
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
                                setHamaData((hamaData) => ({
                                    ...hamaData,
                                    detail: e.target.value,
                                }));
                            }}
                            value={hamaData.detail}
                            type="text"
                            name="str"
                            id="str"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            {hamaData.detail}
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
                                setHamaData((hamaData) => ({
                                    ...hamaData,
                                    solution: e.target.value,
                                }));
                            }}
                            value={hamaData.solution}
                            type="text"
                            name="str"
                            id="str"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            {hamaData.solution}
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
                                setHamaData((hamaData) => ({
                                    ...hamaData,
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
                        className="bg-green-500 text-white font-bold text-center py-2 rounded-lg mt-2"
                    >
                        Simpan
                    </button>
                </form>
            </ModalRoot>
        </div>
    );
}
