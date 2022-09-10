let tableContainer = document.querySelector("table");

fetch("https://api.publicapis.org/entries")
  .then((response) => response.json())
  .then((data) => data.entries)
  .then((resultArray) => {
    let arrayOfTableHeaders = Object.keys(resultArray[0]);
    arrayOfTableHeaders.unshift("No");

    let tableHeaderRow = document.createElement("tr");

    arrayOfTableHeaders.forEach((header)=> {
      let tableHeaderCell = document.createElement("th");
      tableHeaderCell.innerHTML = `${header}`
      tableHeaderRow.appendChild(tableHeaderCell);
    });
    tableContainer.appendChild(tableHeaderRow);

    for (let i = 0; i < resultArray.length; i++) {
      let tableBodyContantRow = document.createElement("tr");
      tableBodyContantRow.innerHTML = `
      <td>${i + 1}</td>
      <td>${resultArray[i].API}</td>
      <td>${resultArray[i].Description}</td>
      <td>${resultArray[i].Auth}</td>
      <td>${resultArray[i].HTTPS}</td>
      <td>${resultArray[i].Cors}</td>
      <td><a href="${resultArray[i].Link} ">Link</a></td>
      <td>${resultArray[i].Category}</td>
      `;
      tableContainer.appendChild(tableBodyContantRow);
    }
    
  });