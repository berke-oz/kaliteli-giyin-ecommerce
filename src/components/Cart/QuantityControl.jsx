import React from 'react';
import { Minus, Plus } from 'lucide-react';

const QuantityControl = ({ count, onChange }) => (
    <div className="flex items-center space-x-2">
        <button
            onClick={() => onChange(count - 1)}
            className="p-1 rounded border hover:bg-gray-100"
        >
            <Minus className="w-4 h-4" />
        </button>
        <span className="w-12 text-center">{count}</span>
        <button
            onClick={() => onChange(count + 1)}
            className="p-1 rounded border hover:bg-gray-100"
        >
            <Plus className="w-4 h-4" />
        </button>
    </div>
);

export default QuantityControl; 