// import React from "react";
// import '../index.css'

// function Navbar(){
//     return (
//         <div className="navbar">
//             <div className="h2">
//                 SKILLSENSE
//             </div>

//             <div className="nav-tabs">
//                 <a href="index.html" className="nav-tab active">AREA DASHBOARD</a>
//                 <a href="index.html" className="nav-tab">DEPLOYMENT</a>
//                 <a href="index.html" className="nav-tab">ON THE JOB TRAINING</a>
//                 <a href="index.html" className="nav-tab">SKILL MATRIX</a>
//                 <a href="index.html" className="nav-tab">REPORTS</a>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


import React from "react";
import NavTabs from "./NavTabs";
import "../Styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="h2">
                SKILLSENSE
            </div>
            <NavTabs />

        </div>
    );
}

export default Navbar;