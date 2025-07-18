

// Paste this inside your <script> tag
const Employees = [
    {
        userName: "Ujjwal Sharma",
        id: "660638 | A0",
         active: true,
        image: "1.png",
        imageStyle: "object-fit: cover; object-position: right center;",
        dob: "12/11/2000",
        joiningDate: "2025-04-10",
        releivingDate: "2025-07-25",
        deploymentHistory: [
            { from: "11 Dec 2023", to: "Present", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as deployed", shift: "A" },
            { from: "10 Dec 2023", to: "10 Dec 2023", actualStation: "8RB | Eeco Flair Nut Torque", plannedStation: "7RA | Break Pipe Fitment", shift: "A" },
            { from: "05 Dec 2023", to: "09 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A" },
            { from: "20 Nov 2023", to: "4 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A" },
            { from: "01 Sep 2023", to: "19 Nov 2023", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as Deployed", shift: "A" }
        ],
        attendance: [
            { date: "01/07/2025", shift: "A", punchIn: "06:10", punchOut: "15:30" },
            { date: "02/07/2025", shift: "A", punchIn: "06:15", punchOut: "15:25" },
            { date: "03/07/2025", shift: "A", punchIn: "06:00", punchOut: "15:20" },
            { date: "04/07/2025", shift: "A", punchIn: "06:05", punchOut: "15:15" },
            { date: "05/07/2025", shift: "A", punchIn: "Absent", punchOut: "" },
            { date: "06/07/2025", shift: "A", punchIn: "06:20", punchOut: "15:35" }
        ],
        training: [
            { type: "Refresher", topic: "ISO 45001 Safety Training", test: "ISO 45001 Safety Training", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Punch Operator Training", test: "Punch Operator Training", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "5 'S' Training", test: "5 'S' Training", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "ISO 9001 Quality Awareness Training", test: "ISO 9001 Quality Awareness Training", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Driver Training", test: "Driver Training", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Inspector Training", test: "Inspector Training", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Repairman Training", test: "Repairman Training", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Advanced Inspection Training", test: "Advanced Inspection Training", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" }
        ]
    },
    {
        userName: "Raj Kumar",
        id: "660669 | TW",
        active: true,
        image: "2.png",
        imageStyle: "object-fit: cover; object-position: center center;",
        dob: "12/11/2000",
        joiningDate: "2025-04-10",
        releivingDate: "2025-07-20",
        deploymentHistory: [
            { from: "11 Dec 2023", to: "Present", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as deployed", shift: "A", image: "Frame 25066.svg" },
            { from: "10 Dec 2023", to: "10 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "7RA | Break Pipe Fitment", shift: "A", image: "Frame 25066.svg" },
            { from: "05 Dec 2023", to: "09 Dec 2023", actualStation: "8RB | Eeco Flair Nut Torque", plannedStation: "Same as Deployed", shift: "A", image: "Frame 25066.svg" },
            { from: "20 Nov 2023", to: "4 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A", image: "Frame 25066.svg" },
            { from: "01 Sep 2023", to: "19 Nov 2023", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as Deployed", shift: "A", image: "Frame 25066.svg" }
        ],
        attendance: [
            { date: "01/07/2025", shift: "C", punchIn: "22:10", punchOut: "07:00" },
            { date: "02/07/2025", shift: "C", punchIn: "22:05", punchOut: "07:05" },
            { date: "03/07/2025", shift: "C", punchIn: "22:00", punchOut: "06:50" },
            { date: "04/07/2025", shift: "C", punchIn: "Absent", punchOut: "" },
            { date: "05/07/2025", shift: "C", punchIn: "22:12", punchOut: "07:10" },
            { date: "06/07/2025", shift: "C", punchIn: "22:08", punchOut: "07:00" }
        ],
        training: [
            { type: "Refresher", topic: "Company Policies", test: "Policy Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Paint Techniques", test: "Technique Test", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Color Matching", test: "Color Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Spray Gun Safety", test: "Gun Safety", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Coating Standards", test: "Standards Test", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Waste Management", test: "Waste Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Shift Handover", test: "Handover Protocol", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Equipment Care", test: "Care Basics", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" }
        ]
    },
    {
        userName: "Bomban Kumar",
        id: "660677 | A0",
        active: false,
        image: "Frame 25061.png",
        imageStyle: "",
        dob: "01/03/2000",
        joiningDate: "2023-01-01",
        releivingDate: "2025-12-31",
        deploymentHistory: [
            { from: "11 Dec 2023", to: "Present", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as deployed", shift: "A" },
            { from: "10 Dec 2023", to: "10 Dec 2023", actualStation: "8RB | Eeco Flair Nut Torque", plannedStation: "7RA | Break Pipe Fitment", shift: "A" },
            { from: "05 Dec 2023", to: "09 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A" },
            { from: "20 Nov 2023", to: "4 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A" },
            { from: "01 Sep 2023", to: "19 Nov 2023", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as Deployed", shift: "A" }
        ],
        attendance: [
            { date: "01/07/2025", shift: "C", punchIn: "22:10", punchOut: "07:00" },
            { date: "02/07/2025", shift: "C", punchIn: "22:05", punchOut: "07:05" },
            { date: "03/07/2025", shift: "C", punchIn: "22:00", punchOut: "06:50" },
            { date: "04/07/2025", shift: "C", punchIn: "Absent", punchOut: "" },
            { date: "05/07/2025", shift: "C", punchIn: "22:12", punchOut: "07:10" },
            { date: "06/07/2025", shift: "C", punchIn: "22:08", punchOut: "07:00" }
        ],
        training: [
            { type: "Refresher", topic: "Company Policies", test: "Policy Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Paint Techniques", test: "Technique Test", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Color Matching", test: "Color Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Spray Gun Safety", test: "Gun Safety", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Coating Standards", test: "Standards Test", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Waste Management", test: "Waste Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Shift Handover", test: "Handover Protocol", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Equipment Care", test: "Care Basics", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" }
        ]
    },
    {
        userName: "Shubham Sagar",
        id: "660684 | A0",
        active: true,
        image: "Frame 25061 (1).png",
        imageStyle: "",
        dob: "21/02/2002",
        joiningDate: "2023-01-01",
        releivingDate: "2025-12-31",
        deploymentHistory: [
            { from: "11 Dec 2023", to: "Present", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as deployed", shift: "A" },
            { from: "10 Dec 2023", to: "10 Dec 2023", actualStation: "8RB | Eeco Flair Nut Torque", plannedStation: "7RA | Break Pipe Fitment", shift: "A" },
            { from: "05 Dec 2023", to: "09 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A" },
            { from: "20 Nov 2023", to: "4 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A" },
            { from: "01 Sep 2023", to: "19 Nov 2023", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as Deployed", shift: "A" }
        ],
        attendance: [
            { date: "01/07/2025", shift: "C", punchIn: "22:10", punchOut: "07:00" },
            { date: "02/07/2025", shift: "C", punchIn: "22:05", punchOut: "07:05" },
            { date: "03/07/2025", shift: "C", punchIn: "22:00", punchOut: "06:50" },
            { date: "04/07/2025", shift: "C", punchIn: "Absent", punchOut: "" },
            { date: "05/07/2025", shift: "C", punchIn: "22:12", punchOut: "07:10" },
            { date: "06/07/2025", shift: "C", punchIn: "22:08", punchOut: "07:00" }
        ],
        training: [
            { type: "Refresher", topic: "Company Policies", test: "Policy Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Paint Techniques", test: "Technique Test", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Color Matching", test: "Color Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Spray Gun Safety", test: "Gun Safety", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Coating Standards", test: "Standards Test", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Waste Management", test: "Waste Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Shift Handover", test: "Handover Protocol", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Equipment Care", test: "Care Basics", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" }
        ]
    },
    {
        userName: "Mohd Azruddin",
        id: "660704 | TW",
        active: true,
        image: "3.png",
        imageStyle: "",
        dob: "12/08/1998",
        joiningDate: "2023-01-01",
        releivingDate: "2025-12-31",
        deploymentHistory: [
            { from: "11 Dec 2023", to: "Present", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as deployed", shift: "A" },
            { from: "10 Dec 2023", to: "10 Dec 2023", actualStation: "8RB | Eeco Flair Nut Torque", plannedStation: "7RA | Break Pipe Fitment", shift: "A" },
            { from: "05 Dec 2023", to: "09 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A" },
            { from: "20 Nov 2023", to: "4 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A" },
            { from: "01 Sep 2023", to: "19 Nov 2023", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as Deployed", shift: "A" }
        ],
        attendance: [
            { date: "01/07/2025", shift: "C", punchIn: "22:10", punchOut: "07:00" },
            { date: "02/07/2025", shift: "C", punchIn: "22:05", punchOut: "07:05" },
            { date: "03/07/2025", shift: "C", punchIn: "22:00", punchOut: "06:50" },
            { date: "04/07/2025", shift: "C", punchIn: "Absent", punchOut: "" },
            { date: "05/07/2025", shift: "C", punchIn: "22:12", punchOut: "07:10" },
            { date: "06/07/2025", shift: "C", punchIn: "22:08", punchOut: "07:00" }
        ],
        training: [
            { type: "Refresher", topic: "Company Policies", test: "Policy Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Paint Techniques", test: "Technique Test", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Color Matching", test: "Color Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Spray Gun Safety", test: "Gun Safety", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Coating Standards", test: "Standards Test", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Waste Management", test: "Waste Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Shift Handover", test: "Handover Protocol", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Equipment Care", test: "Care Basics", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" }
        ]
    },
    {
        userName: "Kuldeep Oraon",
        id: "660705 | A0",
        active: true,
        image: "4.png",
        imageStyle: "",
        dob: "10/07/2000",
        joiningDate: "2023-01-01",
        releivingDate: "2025-12-31",
        deploymentHistory: [
            { from: "11 Dec 2023", to: "Present", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as deployed", shift: "A" },
            { from: "10 Dec 2023", to: "10 Dec 2023", actualStation: "8RB | Eeco Flair Nut Torque", plannedStation: "7RA | Break Pipe Fitment", shift: "A" },
            { from: "05 Dec 2023", to: "09 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A" },
            { from: "20 Nov 2023", to: "4 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A" },
            { from: "01 Sep 2023", to: "19 Nov 2023", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as Deployed", shift: "A" }
        ],
        attendance: [
            { date: "01/07/2025", shift: "C", punchIn: "22:10", punchOut: "07:00" },
            { date: "02/07/2025", shift: "C", punchIn: "22:05", punchOut: "07:05" },
            { date: "03/07/2025", shift: "C", punchIn: "22:00", punchOut: "06:50" },
            { date: "04/07/2025", shift: "C", punchIn: "Absent", punchOut: "" },
            { date: "05/07/2025", shift: "C", punchIn: "22:12", punchOut: "07:10" },
            { date: "06/07/2025", shift: "C", punchIn: "22:08", punchOut: "07:00" }
        ],
        training: [
            { type: "Refresher", topic: "Company Policies", test: "Policy Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Paint Techniques", test: "Technique Test", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Color Matching", test: "Color Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Spray Gun Safety", test: "Gun Safety", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Coating Standards", test: "Standards Test", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Waste Management", test: "Waste Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Shift Handover", test: "Handover Protocol", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Equipment Care", test: "Care Basics", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" }
        ]
    },
    {
        userName: "Ankit",
        id: "660729 | TW",
        active: true,
        image: "5.png",
        imageStyle: "",
        dob: "09/03/2001",
        joiningDate: "2023-01-01",
        releivingDate: "2025-12-31",
        deploymentHistory: [
            { from: "11 Dec 2023", to: "Present", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as deployed", shift: "A" },
            { from: "10 Dec 2023", to: "10 Dec 2023", actualStation: "8RB | Eeco Flair Nut Torque", plannedStation: "7RA | Break Pipe Fitment", shift: "A" },
            { from: "05 Dec 2023", to: "09 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A" },
            { from: "20 Nov 2023", to: "4 Dec 2023", actualStation: "7RB | TMC Fitment", plannedStation: "Same as Deployed", shift: "A" },
            { from: "01 Sep 2023", to: "19 Nov 2023", actualStation: "7RA | Break Pipe Fitment", plannedStation: "Same as Deployed", shift: "A" }
        ],
        attendance: [
            { date: "01/07/2025", shift: "C", punchIn: "22:10", punchOut: "07:00" },
            { date: "02/07/2025", shift: "C", punchIn: "22:05", punchOut: "07:05" },
            { date: "03/07/2025", shift: "C", punchIn: "22:00", punchOut: "06:50" },
            { date: "04/07/2025", shift: "C", punchIn: "Absent", punchOut: "" },
            { date: "05/07/2025", shift: "C", punchIn: "22:12", punchOut: "07:10" },
            { date: "06/07/2025", shift: "C", punchIn: "22:08", punchOut: "07:00" }
        ],
        training: [
            { type: "Refresher", topic: "Company Policies", test: "Policy Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Paint Techniques", test: "Technique Test", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Color Matching", test: "Color Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Spray Gun Safety", test: "Gun Safety", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Coating Standards", test: "Standards Test", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Waste Management", test: "Waste Quiz", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Shift Handover", test: "Handover Protocol", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" },
            { type: "Refresher", topic: "Equipment Care", test: "Care Basics", preTest: "Pass", postTest: "Pass", dateTime: "12/05/2023, 14:23:52" }
        ]
    },
 ];

export default Employees;
       