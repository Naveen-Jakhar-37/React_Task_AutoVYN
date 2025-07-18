
import React, { useMemo } from "react";
import "../Styles/EmployeeList.css";

export default function EmployeeList({
    employees,
    showActive,
    searchTerm,
    selected,
    onSelect
}) {
    const filtered = useMemo(() => {
        return employees
            // 1) if showActive, keep only status==="active", else keep everything NOT active
            .filter(emp => emp.active === !showActive)
            // 2) then apply your live‐search
            .filter(emp => {
                const term = searchTerm.toLowerCase();
                return (
                    !term ||
                    emp.userName.toLowerCase().includes(term) ||
                    emp.id.toLowerCase().includes(term)
                );
            });
    }, [employees, showActive, searchTerm]);

    return (
        <div className="employee-list">
            {filtered.map(emp => {
                const isSel = selected?.id === emp.id;
                const today = new Date();
                const relieving = new Date(emp.releivingDate);
                const daysLeft = Math.ceil(
                    (relieving - today) / (1000 * 60 * 60 * 24)
                );
                const borderColor = daysLeft <= 30 ? "#D83B01" : "#58A55C";


                return (
                    <button
                        key={emp.id}
                        className={`buttons${isSel ? " active" : ""}`}
                        onClick={() => onSelect(emp)}
                    >
                        <div className="info">
                            <img
                                src={new URL(`../assets/images/${emp.image}`, import.meta.url).href}
                                alt={emp.userName}
                                style={{ border: `3px solid ${borderColor}` }}
                            />
                            <div className="text">
                                <div className="name">{emp.userName}</div>
                                <div className="id">{emp.id}</div>
                            </div>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
