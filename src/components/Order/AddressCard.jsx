import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const AddressCard = ({ address, isSelected, onSelect, onEdit, onDelete }) => {
    return (
        <div
            onClick={onSelect}
            className={`p-4 border rounded-lg transition-all duration-200 cursor-pointer
                      ${isSelected
                    ? 'border-[#23A6F0] bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-[#23A6F0]'
                }`}
        >
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    <input
                        type="radio"
                        checked={isSelected}
                        onChange={onSelect}
                        className="w-4 h-4 text-[#23A6F0] border-gray-300 focus:ring-[#23A6F0]"
                    />
                    <h3 className="font-semibold text-lg">{address.title}</h3>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit();
                        }}
                        className="p-1.5 text-gray-400 hover:text-[#23A6F0] hover:bg-blue-50 
                                 rounded-lg transition-colors duration-200"
                    >
                        <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 
                                 rounded-lg transition-colors duration-200"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="text-gray-600">
                <p className="mb-1">
                    {address.name} {address.surname}
                </p>
                <p className="mb-2">{address.phone}</p>
                <p>
                    {address.neighborhood}, {address.district}/{address.city.toUpperCase()}
                </p>
            </div>
        </div>
    );
};

export default AddressCard; 