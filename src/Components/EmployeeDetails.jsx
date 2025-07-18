import React, { useState } from "react";
import "../Styles/EmployeeDetails.css";

export default function EmployeeDetails({ employee }) {
    const [activeTab, setActiveTab] = useState("deployment");

    // Form filters (optional logic hookup later)
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [station, setStation] = useState("");
    const [shift, setShift] = useState("");

    if (!employee) {
        return (
            <div className="employee-detail">
                <p style={{ padding: "20px" }}>Select an employee to view details.</p>
            </div>
        );
    }

    const today = new Date();
    const relieving = new Date(employee.releivingDate);
    const daysLeft = Math.ceil((relieving - today) / (1000 * 60 * 60 * 24));

    return (
        <div className="employee-detail">
            {/* Header: Image + Info */}
            <div className="details">
                <div className="person">
                    <img
                        src={new URL(`../assets/images/${employee.image}`, import.meta.url).href}
                        alt={employee.userName}
                    />
                    <div className="detail-text">
                        <h2 className="detail-name">{employee.userName}</h2>
                        <p className="detail-id">{employee.id}</p>
                        <p className="dob">Date of Birth: {employee.dob}</p>
                    </div>
                </div>

                <div className="joining-detail">
                    <div>Joining Date: <b>{employee.joiningDate}</b></div>
                    <div>Releiving Date: <b>{employee.releivingDate}</b></div>
                    <div>
                        Releiving In:{" "}
                        <b style={{ color: daysLeft <= 30 ? "#D83B01" : "#58A55C" }}>
                            {daysLeft < 0 ? "Already Relieved" : `${daysLeft} days`}
                        </b>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="tabs" id="tabs">
                <a
                    href="#"
                    className={`nav-tab-2 ${activeTab === "deployment" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("deployment");
                    }}
                >
                    DEPLOYMENT
                </a>
                <a
                    href="#"
                    className={`nav-tab-2 ${activeTab === "attendance" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("attendance");
                    }}
                >
                    ATTENDANCE
                </a>
                <a
                    href="#"
                    className={`nav-tab-2 ${activeTab === "training" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("training");
                    }}
                >
                    CLASSROOM TRAINING
                </a>
            </div>

            {/* Deployment Tab Content */}
            {activeTab === "deployment" && (
                <>
                    {/* Filters */}
                    <div className="selection-dropdowns-Wrapper-2">
                        <div className="dropdown-pair-2">
                            <span>From</span>
                            <input
                                type="date"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                            />
                        </div>
                        <div className="dropdown-pair-2">
                            <span>To</span>
                            <input
                                type="date"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                            />
                        </div>
                        <div className="dropdown-pair-2">
                            <span>Station</span>
                            <select value={station} onChange={(e) => setStation(e.target.value)}>
                                <option value="">All</option>
                                <option value="7RA">7RA | Break Pipe Fitment</option>
                                <option value="7RB">7RB | TMC Fitment</option>
                                <option value="8RB">8RB | Eeco Flair Nut Torque</option>
                            </select>
                        </div>
                        <div className="dropdown-pair-2">
                            <span>Shift</span>
                            <select value={shift} onChange={(e) => setShift(e.target.value)}>
                                <option value="">All</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>
                    </div>

                    {/* Deployment Table */}
                    <div className="table-wrapper">
                        <table className="table-details">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th></th>
                                    <th>Actual Station</th>
                                    <th>Planned Station</th>
                                    <th>Shift</th>
                                    <th>4M-MAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employee.deploymentHistory?.map((entry, idx) => {
                                    const isFirst = idx === 0;
                                    const isLast = idx === employee.deploymentHistory.length - 1;

                                    return (
                                        <tr key={idx}>
                                            {/* Date column */}
                                            <td>{entry.from} - {entry.to}</td>

                                            {/* Timeline column (vertical line with dot) */}
                                            <td className={`timeline-icon ${isFirst ? "first" : ""} ${isLast ? "last" : ""}`}>
                                                <div className="icon-wrapper">●</div>
                                            </td>

                                            {/* Station and Shift columns */}
                                            <td>{entry.actualStation}</td>
                                            <td>{entry.plannedStation}</td>
                                            <td>{entry.shift}</td>
                                            <td>
                                                <img
                                                    src='src/assets/images/Frame 25066.svg'
                                                    alt="4M-MAN"
                                                    style={{ height: "20px" }}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>

                        </table>
                    </div>
                </>
            )}


            {activeTab === "attendance" && (
                <>
                    {/* Attendance Filters */}
                    <div className="selection-dropdowns-Wrapper-3">
                        <div className="dropdown-pair-3">
                            <span>From</span>
                            <input
                                type="date"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                            />
                        </div>
                        <div className="dropdown-pair-3">
                            <span>To</span>
                            <input
                                type="date"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                            />
                        </div>
                        <div className="dropdown-pair-3">
                            <span>Attendance</span>
                            <select
                                value={shift}
                                onChange={(e) => setShift(e.target.value)}
                            >
                                <option value="">All</option>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </div>
                    </div>

                    {/* Working Summary */}
                    <div className="working">
                        <table className="working-detail">
                            <thead>
                                <tr>
                                    <th>Total Working Days</th>
                                    <th>Present</th>
                                    <th>Absent</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ color: "black", fontWeight: "bold" }}>
                                        {employee.attendance.length}
                                    </td>
                                    <td style={{ color: "green" }}>
                                        {employee.attendance.filter(a => a.punchIn !== "Absent").length}
                                    </td>
                                    <td style={{ color: "red" }}>
                                        {employee.attendance.filter(a => a.punchIn === "Absent").length}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Attendance Table */}
                    <div className="attandance">
                        <table className="attandance-detail">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Shift</th>
                                    <th>Punch In</th>
                                    <th>Punch Out</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employee.attendance
                                    .filter((entry) => {
                                        if (shift === "present") return entry.punchIn !== "Absent";
                                        if (shift === "absent") return entry.punchIn === "Absent";
                                        return true;
                                    })
                                    .map((entry, idx) => (
                                        <tr
                                            key={idx}
                                            style={{
                                                backgroundColor:
                                                    entry.punchIn === "Absent" ? "#ffe5e5" : "transparent"
                                            }}
                                        >
                                            <td>{entry.date}</td>
                                            <td>{entry.shift}</td>
                                            <td>{entry.punchIn}</td>
                                            <td>{entry.punchOut}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}


            {activeTab === "training" && (
                <>
                    {/* Filters Row (same style as deployment filters) */}
                    <div className="selection-dropdowns-Wrapper-2">
                        <div className="dropdown-pair-2">
                            <span>From</span>
                            <input type="date" />
                        </div>
                        <div className="dropdown-pair-2">
                            <span>To</span>
                            <input type="date" />
                        </div>
                        <div className="dropdown-pair-2">
                            <span>Type</span>
                            <select>
                                <option value="">All</option>
                                <option value="Refresher">Refresher</option>
                                <option value="Induction">Induction</option>
                            </select>
                        </div>
                    </div>

                    {/* Training Table */}
                    <div className="training">
                        <table className="training-detail">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Topic</th>
                                    <th>Test</th>
                                    <th>Pre-Test</th>
                                    <th>Post-Test</th>
                                    <th>Date & Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(employee.training || []).map((t, idx) => (
                                    <tr key={idx}>
                                        <td>{t.type}</td>
                                        <td>{t.topic}</td>
                                        <td>{t.test}</td>
                                        <td>
                                            <button
                                                style={{
                                                    backgroundColor: t.postTest === "Pass" ? "#b5f9b7ff" : "#D83B01",
                                                    color: "black",
                                                    border: "none",
                                                    padding: "6px 14px",
                                                    borderRadius: "10px",
                                                    fontWeight: "bold",
                                                    fontSize: "14px",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                {t.preTest}
                                            </button>
                                        </td>

                                        {/* Post-Test Button */}
                                        <td>
                                            <button
                                                style={{
                                                    backgroundColor: t.postTest === "Pass" ? "#b5f9b7ff" : "#D83B01",
                                                    color: "black",
                                                    border: "none",
                                                    padding: "6px 14px",
                                                    borderRadius: "10px",
                                                    fontWeight: "bold",
                                                    fontSize: "14px",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                {t.postTest}
                                            </button>
                                        </td>
                                        <td>{t.dateTime}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}



        </div>
    );
}
