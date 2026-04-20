// Scroll Progress Bar
window.addEventListener('scroll', function() {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollTotal) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Function to handle tab switching
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Toggle dropdown visibility
document.querySelector(".dropbtn").addEventListener("click", function () {
    document.querySelector(".dropdown-content").classList.toggle("show");
});

function showProgram(programId) {

    // Hide all
    document.querySelectorAll(".program-content").forEach(p => {
        p.classList.remove("active");
    });

    // Show selected
    document.getElementById(programId).classList.add("active");

    // ACTIVE BUTTON STYLE
    document.querySelectorAll(".dropdown-content a").forEach(link => {
        link.classList.remove("active");
    });
    event.target.classList.add("active");

    // Close dropdown
    document.querySelector(".dropdown-content").classList.remove("show");
}

// Mobile Menu Toggle Logic
document.addEventListener('DOMContentLoaded', function() {
    //Main Menu Elements
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    const secondaryMenuToggle = document.getElementById('mobile-secondary-menu');
    const secondaryNavMenu = document.getElementById('secondary-nav-menu');

    if (secondaryMenuToggle && secondaryNavMenu) {
        secondaryMenuToggle.addEventListener('click', function() {
            secondaryNavMenu.classList.toggle('active');
            secondaryMenuToggle.classList.toggle('active'); 
        });
    }

    // --- INITIALIZE CHARTS AND TABLES HERE ---
    if (document.getElementById('bs-table-body')) {
        populateTable(bsProgramsData, 'bs-table-body', 'bs-total-cell');
        populateTable(gradProgramsData, 'grad-table-body', 'grad-total-cell');
        renderDepartmentSelector();
        updateDepartmentBarChart(deptProgramData[0].department);
        createBarChart('gradBarChart', gradProgramsData, 'Graduate Programs');
        // LIMA Campus Initialization:
        /*renderLimaDepartmentSelector();
        updateLimaDepartmentBarChart(limaDeptProgramData[0].department); */
    }
});

// EDITABLE DATA AREA FOR FIGURES
const bsProgramsData = [
    { program: "B.S. Aerospace Engineering", code: "BSAeE", total: 434 },
    { program: "B.S. Automotive Engineering", code: "BSAE", total: 122 },
    { program: "B.S. Biomedical Engineering", code: "BSBioE", total: 98 },
    { program: "B.S. Ceramics Engineering", code: "BSCerE", total: 73 },
    { program: "B.S. Chemical Engineering", code: "BSChE", total: 958 },
    { program: "B.S. Civil Engineering", code: "BSCE", total: 1887 },
    { program: "B.S. Computer Engineering", code: "BSCpE", total: 739 },
    { program: "B.S. Electrical Engineering", code: "BSEE", total: 1184 },
    { program: "B.S. Electronics Engineering", code: "BSECE", total: 688 },
    { program: "B.S. Food Engineering", code: "BSFE", total: 302 },
    { program: "B.S. Geodetic Engineering", code: "BSGeoE", total: 245 },
    { program: "B.S. Geological Engineering", code: "BSGE", total: 174 },
    { program: "B.S. Industrial Engineering", code: "BSIE", total: 1086 },
    { program: "B.S. Instrumentation and Control Engineering", code: "BSICE", total: 585 },
    { program: "B.S. Mechanical Engineering", code: "BSME", total: 2175 },
    { program: "B.S. Mechatronics Engineering", code: "BSMexE", total: 398 },
    { program: "B.S. Metallurgical Engineering", code: "BSMetE", total: 174 },
    { program: "B.S. Naval Architecture and Marine Engineering", code: "BSNAME", total: 233 },
    { program: "B.S. Petroleum Engineering", code: "BSPetE", total: 1012 },
    { program: "B.S. Sanitary Engineering", code: "BSSE", total: 439 },
    { program: "B.S. Transportation  System Engineering", code: "BSTE", total: 129 }
];

const deptProgramData = [
    {
        department: "Department of Electronics Engineering",
        programs: [
            { program: "B.S. Aerospace Engineering", code: "BSAeE", total: 434 },
            { program: "B.S. Biomedical Engineering", code: "BSBioE", total: 98 },
            { program: "B.S. Electronics Engineering", code: "BSECE", total: 688 },
            { program: "B.S. Instrumentation and Control Engineering", code: "BSICE", total: 585 },
            { program: "B.S. Mechatronics Engineering", code: "BSMexE", total: 398 }
        ]
    },
    {
        department: "Department of Mechanical Engineering",
        programs: [
            { program: "B.S. Automotive Engineering", code: "BSAE", total: 122 },
            { program: "B.S. Mechanical Engineering", code: "BSME", total: 2175 },
            { program: "B.S. Naval Architecture and Marine Engineering", code: "BSNAME", total: 233 },
            { program: "B.S. Petroleum Engineering", code: "BSPetE", total: 1012 }
        ]
    },
    {
        department: "Department of Chemical Engineering",
        programs: [
            { program: "B.S. Ceramics Engineering", code: "BSCerE", total: 73 },
            { program: "B.S. Chemical Engineering", code: "BSChE", total: 958 },
            { program: "B.S. Food Engineering", code: "BSFE", total: 302 },
            { program: "B.S. Metallurgical Engineering", code: "BSMetE", total: 174 }
        ]
    },
    {
        department: "Department of Civil Engineering",
        programs: [
            { program: "B.S. Civil Engineering", code: "BSCE", total: 1887 },
            { program: "B.S. Geodetic Engineering", code: "BSGeoE", total: 245 },
            { program: "B.S. Geological Engineering", code: "BSGE", total: 174 },
            { program: "B.S. Sanitary Engineering", code: "BSSE", total: 439 },
            { program: "B.S. Transportation  System Engineering", code: "BSTE", total: 129 }
        ]
    },
    {
        department: "Department of Electrical Engineering",
        programs: [
            { program: "B.S. Computer Engineering", code: "BSCpE", total: 739 },
            { program: "B.S. Electrical Engineering", code: "BSEE", total: 1184 }
        ]
    },
    {
        department: "Department of Industrial Engineering",
        programs: [
            { program: "B.S. Industrial Engineering", code: "BSIE", total: 1086 }
        ]
    }
];

// LIMA Data dynamically linked to bsProgramsData
/* const limaDeptProgramData = [
    {
        department: "Department of Electronics Engineering",
        programs: [
            bsProgramsData.find(p => p.code === "BSAeE"),
            bsProgramsData.find(p => p.code === "BSBioE"),
            bsProgramsData.find(p => p.code === "BSICE"),
            bsProgramsData.find(p => p.code === "BSMexE")
        ]
    },
    {
        department: "Department of Mechanical Engineering",
        programs: [ bsProgramsData.find(p => p.code === "BSAE") ]
    },
    {
        department: "Department of Chemical Engineering",
        programs: [ bsProgramsData.find(p => p.code === "BSFE") ]
    },
    {
        department: "Department of Civil Engineering",
        programs: [ bsProgramsData.find(p => p.code === "BSTE") ]
    }
];
*/

const gradProgramsData = [
    { program: "Doctor of Philosophy in Electronics Engineering", code: "PhDECE", total: 51 },
    { program: "Doctor of Philosophy in Engineering Education", code: "PhDEEd", total: 33 },
    { program: "Doctor of Philosophy in Engineering Management", code: "PhDEM", total: 19 },
    { program: "Straight Master's-Doctoral in Electronics Engineering", code: "SMD-ECE", total: 25 },
    { program: "Master of Science in Advanced Manufacturing", code: "MSAM", total: 9 },
    { program: "Master of Science in Artificial Intelligence", code: "MSAI", total: 7 },
    { program: "Master of Science in Computer Engineering", code: "MSC.CpE", total: 19 },
    { program: "Master of Science in Construction Management", code: "MSCM", total: 47 },
    { program: "Master of Science in Earthquake Engineering", code: "MSEqE", total: 7 },
    { program: "Master of Science in Electronics Engineering", code: "MSECE", total: 13 },
    { program: "Master of Science in Energy Engineering", code: "MSEgyE", total: 18 },
    { program: "Master of Science in Engineering Management", code: "MSEM", total: 48 },
    { program: "Master of Science in Material Science and Engineering", code: "MSMSE", total: 10 },
    { program: "Master of Science in Transportation System Engineering", code: "MSTE", total: 0 },
    { program: "Master of Engineering", code: "Master of Engineering", total: 75 }
];

const chartColors = [
    '#324671', '#d29a28', '#c91e3e', '#7f8a9a', '#22a762', 
    '#1c4e7f', '#2c3e50', '#a0522d', '#b03060', '#6aa84f', 
    '#0047AB', '#FF8C00', '#ED2939', '#696969', '#3CB371', 
    '#20B2AA', '#4682B4'
];

function populateTable(data, tbodyId, totalCellId) {
    const tableBody = document.getElementById(tbodyId);
    if (!tableBody) return;
    
    let totalSum = 0;
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = tableBody.insertRow();
        const cellProgram = row.insertCell(0);
        const cellTotal = row.insertCell(1);

        cellProgram.textContent = item.program;
        cellTotal.textContent = item.total.toLocaleString(); 
        totalSum += item.total;
    });

    document.getElementById(totalCellId).textContent = totalSum.toLocaleString();
}

let departmentChartInstance = null;

function renderDepartmentSelector() {
    const selector = document.getElementById('department-selector');
    if (!selector) return;

    selector.innerHTML = '';

    deptProgramData.forEach((dept, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = dept.department;
        button.className = 'department-btn';
        button.addEventListener('click', () => {
            updateDepartmentBarChart(dept.department);
            setActiveDepartmentButton(index);
        });
        selector.appendChild(button);
    });

    setActiveDepartmentButton(0);
}

function setActiveDepartmentButton(activeIndex) {
    const buttons = document.querySelectorAll('.department-btn');
    buttons.forEach((button, index) => {
        button.classList.toggle('active', index === activeIndex);
    });
}

function getDepartmentPrograms(departmentName) {
    const department = deptProgramData.find(item => item.department === departmentName);
    return department ? department.programs : [];
}

function createBarChart(ctxId, data, titleText) {
    const canvas = document.getElementById(ctxId);
    if (!canvas) return;
    canvas.height = 330;
    const ctx = canvas.getContext('2d');
    const labels = data.map(item => item.code);
    const totals = data.map(item => item.total);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Enrollments',
                data: totals,
                backgroundColor: chartColors,
                borderColor: '#333333',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                axis: 'xy',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: false
            },
            plugins: {
                legend: { display: false },
                title: {
                    display: !!titleText,
                    text: titleText,
                    font: { size: 14, weight: 'bold' }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function(context) {
                            const value = context.raw !== undefined ? context.raw : context.parsed.x;
                            return `${context.dataset.label}: ${value}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Number of Students',
                        font: { weight: 'bold', size: 12 }
                    },
                    ticks: {
                        font: { size: 10 }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Programs',
                        font: { weight: 'bold', size: 12 }
                    },
                    ticks: {
                        font: { size: 10 }
                    }
                }
            }
        }
    });
}

function updateDepartmentBarChart(departmentName) {
    const data = getDepartmentPrograms(departmentName);
    const title = document.getElementById('selected-department-name');
    if (title) {
        title.textContent = departmentName;
    }

    if (!data.length) return;

    const labels = data.map(item => item.code);
    const totals = data.map(item => item.total);

    if (!departmentChartInstance) {
        const canvas = document.getElementById('departmentBarChart');
        if (!canvas) return;
        canvas.height = 330; // Larger chart height
        const ctx = canvas.getContext('2d');
        departmentChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Total Enrollments',
                    data: totals,
                    backgroundColor: chartColors,
                    borderColor: '#333333',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'nearest',
                    axis: 'xy',
                    intersect: false
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function(context) {
                                const value = context.raw !== undefined ? context.raw : context.parsed.x;
                                return `${context.dataset.label}: ${value}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Number of Students',
                            font: { weight: 'bold', size: 12 }
                        },
                        ticks: {
                            font: { size: 10 }
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Programs',
                            font: { weight: 'bold', size: 12 }
                        },
                        ticks: {
                            font: { size: 10 }
                        }
                    }
                }
            }
        });
    } else {
        departmentChartInstance.data.labels = labels;
        departmentChartInstance.data.datasets[0].data = totals;
        departmentChartInstance.update();
    }
}
/*
// --- LIMA CAMPUS CHART LOGIC ---
let limaDepartmentChartInstance = null;

function renderLimaDepartmentSelector() {
    const selector = document.getElementById('lima-department-selector');
    if (!selector) return;
    selector.innerHTML = '';

    limaDeptProgramData.forEach((dept, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = dept.department;
        button.className = 'lima-department-btn department-btn'; 
        button.addEventListener('click', () => {
            updateLimaDepartmentBarChart(dept.department);
            setLimaActiveDepartmentButton(index);
        });
        selector.appendChild(button);
    });

    setLimaActiveDepartmentButton(0); 
}

function setLimaActiveDepartmentButton(activeIndex) {
    const buttons = document.querySelectorAll('.lima-department-btn');
    buttons.forEach((button, index) => {
        button.classList.toggle('active', index === activeIndex);
    });
}

function updateLimaDepartmentBarChart(departmentName) {
    const department = limaDeptProgramData.find(item => item.department === departmentName);
    const data = department ? department.programs : [];
    
    const title = document.getElementById('lima-selected-department-name');
    if (title) title.textContent = departmentName;

    if (!data || !data.length) return;

    const labels = data.map(item => item.code);
    const totals = data.map(item => item.total);

    if (!limaDepartmentChartInstance) {
        const canvas = document.getElementById('limaDepartmentBarChart');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        limaDepartmentChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Total Enrollments',
                    data: totals,
                    backgroundColor: chartColors, // Reusing your existing chartColors array
                    borderColor: '#333333',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        title: { display: true, text: 'Number of Students', font: { weight: 'bold', size: 12 } }
                    },
                    y: {
                        title: { display: true, text: 'Programs', font: { weight: 'bold', size: 12 } }
                    }
                }
            }
        });
    } else {
        limaDepartmentChartInstance.data.labels = labels;
        limaDepartmentChartInstance.data.datasets[0].data = totals;
        limaDepartmentChartInstance.update();
    }
}
*/
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", function() {
    
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});