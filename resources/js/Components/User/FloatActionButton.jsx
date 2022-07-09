import React from "react";
import * as FaIcons from "react-icons/fa";

export default function FloatActionButton() {
    return (
        <div class="fixed bottom-10 right-7">
            <button class="p-0 w-16 h-16 bg-green-600 rounded-full hover:bg-green-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                <div class="w-4 h-4 inline-block">
                    <FaIcons.FaSearchPlus size={16} className="text-white" />
                </div>
            </button>
        </div>
    );
}
