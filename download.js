function saveDataAndNext(nextPage) {
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(input => {
        localStorage.setItem(input.id, input.value);
    });
    window.location.href = nextPage;
}

function goBack(previousPage) {
    window.location.href = previousPage;
}

function downloadCSV() {
    let data = "Name,Age,Gender\n";
    data += `${localStorage.getItem("name")},${localStorage.getItem("age")},${localStorage.getItem("gender")}`;

    const blob = new Blob([data], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.csv";
    link.click();
}

function downloadExcel() {
    alert("Excel Download Coming Soon!");
}

function downloadPDF() {
    alert("PDF Download Coming Soon!");
}
