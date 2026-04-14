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
        createPieChart('bsPieChart', bsProgramsData);
        createPieChart('gradPieChart', gradProgramsData);
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
    { program: "B.S. Transportation Engineering", code: "BSTE", total: 129 }
];

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
    { program: "Master of Science in Transportation Engineering", code: "MSTE", total: 0 },
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

function createPieChart(ctxId, data) {
    const canvas = document.getElementById(ctxId);
    if (!canvas) return; // safety check
    
    const ctx = canvas.getContext('2d');
    const labels = data.map(item => item.code);
    const totals = data.map(item => item.total);

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: totals,
                backgroundColor: chartColors,
                borderColor: '#ffffff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Helps it fit inside tabs properly
            plugins: {
                legend: { position: 'right', labels: { boxWidth: 10, font: { size: 10 } } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${data[context.dataIndex].program}: ${context.parsed}`;
                        }
                    }
                }
            }
        }
    });
}

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", function() {
    
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});