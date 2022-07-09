import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";
import * as MdIcons from "react-icons/md";
import PenyakitForm from "../../Components/Penyakit/PenyakitForm";
import PenyakitTable from "../../Components/Penyakit/PenyakitTable";

export default function Penyakit() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const [dataEdit, setDataEdit] = useRecoilState(modalData);
    return (
        <div className="space-y-3">
            <h1 className="font-semibold text-gray-700 text-xl">Data Penyakit</h1>
            <PenyakitForm />
            <button
                onClick={() => {
                    setDataEdit(null);
                    setShowModal(true);
                }}
                className="text-green-500 border-2 border-green-600 px-3 py-1 rounded-xl 
                focus:ring focus:outline-none focus:ring-green-200 hover:bg-green-500
                hover:text-white transition-all duration-200 flex items-center space-x-2"
            >
                <MdIcons.MdAddCircle size={16} />
                <h1>Tambah</h1>
            </button>
            <PenyakitTable />
        </div>
    );
}
