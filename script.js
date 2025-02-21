document.addEventListener('DOMContentLoaded', () => {
  // Get all elements with the class "price"
  const priceElements = document.querySelectorAll('.price');
  let total = 0;
  
  // Sum up the values
  priceElements.forEach(el => {
    const value = parseFloat(el.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });
  
  // Create a new table row and cell to display the total
  const newRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', '2');
  totalCell.textContent = "Total: Rs " + total;
  newRow.appendChild(totalCell);
  
  // Append the new row to the table
  const table = document.querySelector('table');
  table.appendChild(newRow);
});
