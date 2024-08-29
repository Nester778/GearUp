import React, { useState } from 'react';
import './CustomCheckbox.css';

export default function CustomCheckbox() {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="checkbox-container">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <span className="checkmark">
                {checked && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="checkmark-icon"
                    >
                        <path d="M5 12l5 5L20 7" />
                    </svg>
                )}
            </span>
        </div>
    );
};