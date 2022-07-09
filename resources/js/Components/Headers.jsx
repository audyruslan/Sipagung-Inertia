import React from "react";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export default function Header(props) {
    return (
        <div className="w-full bg-white h-16 flex items-center p-3 justify-between relative">
            <h1 className="text-gray-700 text-xl font-bold">{props.title}</h1>
        </div>
    );
}
