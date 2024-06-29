import React from 'react'

interface DropdownProps {
    label: string,
    options: Array<{ label: string, value: string }>,
    handlerClick: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ label, options, handlerClick }) => {
    return (
        <>  
            <div className="dropdown m-2 text-center">
                <a className="btn btn-secondary dropdown-toggle" id="idDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {label}
                </a>
                <ul className="dropdown-menu">
                    {
                        options.map((option) => {
                            return (
                                <li key={option.value}>
                                    <button className="dropdown-item" onClick={() => handlerClick(option.value)}>{option.label}</button>
                                </li>
                            )
                        })
                    }
                </ul>

            </div >
        </>
    )
}
