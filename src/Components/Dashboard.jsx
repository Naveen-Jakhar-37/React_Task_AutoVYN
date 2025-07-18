import React from "react";
import '../Styles/Dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="breadcrumb">
                <span className="current"> Area Dashboard</span>
                <span className="separator"> &gt; </span>
                <a href="">Operator</a>
            </div>

            <div className="selection-dropdowns-Wrapper">
                <div className="dropdown-pair">
                    <span>Site: </span>
                    <select>
                        <option>MSIL</option>
                        <option>MSIL</option>
                    </select>
                </div>

                <div className="dropdown-pair">
                    <span>Location: </span>
                    <select className="largetext">
                        <option>Gurgaon Vehicle Plant</option>
                        <option>Gurgaon Vehicle Plant</option>
                    </select>
                </div>

                <div className="dropdown-pair">
                    <span>Plant: </span>
                    <select>
                        <option>PLT-GP1</option>
                        <option>PLT-GP1</option>
                    </select>
                </div>

                <div className="dropdown-pair">
                    <span>Shop: </span>
                    <select>
                        <option>AS1</option>
                        <option>AS1</option>
                    </select>
                </div>

                <div className="button">
                    <button>More</button>
                </div>
            </div>

        </div>

    );
};

export default Dashboard;
