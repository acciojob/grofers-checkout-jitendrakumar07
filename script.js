document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    // Get all price elements
    const priceElements = document.querySelectorAll(".price");
    let total = 0;
    
    // Sum up all values (using parseFloat so that it works even if edited)
    priceElements.forEach(el => {
      const value = parseFloat(el.textContent);
      if (!isNaN(value)) {
        total += value;
      }
    });
    
    // Format total as needed (here, we leave it as a number)
    
    // Append a new row to the table showing the total
    const table = document.querySelector("table");
    // Remove any existing total row (optional, in case of multiple clicks)
    const existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
      existingTotalRow.remove();
    }
    const newRow = document.createElement("tr");
    newRow.id = "totalRow";
    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");
    totalCell.textContent = total;
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
    
    // Also update the element with id "ans" (for test assertions)
    document.getElementById("ans").textContent = total;
  });
});
