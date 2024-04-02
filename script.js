const products = [
  {
    category: "Mobile",
    brand: "Oneplus",
    model: "Oneplus 8",
    vendor: "Vendor 1",
    quantity: 30,
    costPrice: 60000,
    sellingPrice: 70000,
    discount: 50,
    condition: "Used",
    warranty: 2000,
    profitMargin: 35,
    location: "Gulberg",
  },
  {
    category: "Watch",
    brand: "Watch ultra",
    model: "Watch ultra 7s",
    vendor: "Vendor 2",
    quantity: 100,
    costPrice: 5000,
    sellingPrice: 8000,
    discount: 20,
    condition: "Original",
    warranty: 500,
    profitMargin: 100,
    location: "Hafeez center",
  },
  {
    category: "Laptop",
    brand: "Dell",
    model: "Inspiron 15",
    vendor: "Vendor 3",
    quantity: 20,
    costPrice: 40000,
    sellingPrice: 45000,
    discount: 10,
    condition: "Refurbished",
    warranty: 300,
    profitMargin: 15,
    location: "Liberty Market",
  },
  {
    category: "Camera",
    brand: "Canon",
    model: "EOS Rebel T7",
    vendor: "Vendor 4",
    quantity: 50,
    costPrice: 30000,
    sellingPrice: 35000,
    discount: 15,
    condition: "New",
    warranty: 700,
    profitMargin: 20,
    location: "Model Town",
  },
];

// On page load the default products will be shown with this function
function addRowsToTable() {
  const table = document.getElementById("myTable");

  for (let i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
  products.forEach((product, index) => {
    const row = table.insertRow(-1);
    row.innerHTML = `
            <td><input type="checkbox" /></td>
            <td>${product.category}</td>
            <td>${product.brand}</td>
            <td>${product.model}</td>
            <td>${product.vendor}</td>
            <td>${product.quantity}</td>
            <td>${product.costPrice}</td>
            <td>${product.sellingPrice}</td>
            <td>${product.discount}</td>
            <td>${product.condition}</td>
            <td>${product.warranty}</td>
            <td>${product.profitMargin}</td>
            <td>${product.location}</td>
            <td>
              <div class="all-button">
              <button onclick="deleteProduct(${index})">Delete Product</button>

                <button onclick="openEditModal(${index})">Edit Product</button>
                </div>
            </td>
          `;
  });
}

window.onload = addRowsToTable;

// This function is used to open the Edit modal and update the data of Product
function openEditModal(index) {
  const product = products[index];

  document.getElementById("editCategory").value = product?.category;
  document.getElementById("editBrand").value = product?.brand;
  document.getElementById("editModel").value = product?.model;
  document.getElementById("editVendor").value = product?.vendor;
  document.getElementById("editQuantity").value = product?.quantity;
  document.getElementById("editCostPrice").value = product?.costPrice;
  document.getElementById("editSellingPrice").value = product?.sellingPrice;
  document.getElementById("editDiscount").value = product?.discount;
  document.getElementById("editCondition").value = product?.condition;
  document.getElementById("editWarranty").value = product?.warranty;
  document.getElementById("editProfitMargin").value = product?.profitMargin;
  document.getElementById("editLocation").value = product?.location;

  document.getElementById("editModal").style.display = "block";

  document
    .getElementById("editForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      product.category = document.getElementById("editCategory").value;
      product.brand = document.getElementById("editBrand").value;
      product.model = document.getElementById("editModel").value;
      product.vendor = document.getElementById("editVendor").value;
      product.quantity = document.getElementById("editQuantity").value;
      product.costPrice = document.getElementById("editCostPrice").value;
      product.sellingPrice = document.getElementById("editSellingPrice").value;
      product.discount = document.getElementById("editDiscount").value;
      product.condition = document.getElementById("editCondition").value;
      product.warranty = document.getElementById("editWarranty").value;
      product.profitMargin = document.getElementById("editProfitMargin").value;
      product.location = document.getElementById("editLocation").value;

      const tableRow = document.getElementById("myTable").rows[index + 1];
      tableRow.cells[1].textContent = product.category;
      tableRow.cells[2].textContent = product.brand;
      tableRow.cells[3].textContent = product.model;
      tableRow.cells[4].textContent = product.vendor;
      tableRow.cells[5].textContent = product.quantity;
      tableRow.cells[6].textContent = product.costPrice;
      tableRow.cells[7].textContent = product.sellingPrice;
      tableRow.cells[8].textContent = product.discount;
      tableRow.cells[9].textContent = product.condition;
      tableRow.cells[10].textContent = product.warranty;
      tableRow.cells[11].textContent = product.profitMargin;
      tableRow.cells[12].textContent = product.location;

      document.getElementById("editModal").style.display = "none";
    });
}

// This function is used to open the Add modal and Create the data of New Product

function addProduct() {
  const category = document.getElementById("createCategory").value;
  const brand = document.getElementById("createBrand").value;
  const model = document.getElementById("createModel").value;
  const vendor = document.getElementById("createVendor").value;
  const quantity = parseInt(document.getElementById("createQuantity").value);
  const costPrice = parseFloat(
    document.getElementById("createCostPrice").value
  );
  const sellingPrice = parseFloat(
    document.getElementById("createSellingPrice").value
  );
  const discount = parseFloat(document.getElementById("createDiscount").value);
  const condition = document.getElementById("createCondition").value;
  const warranty = parseInt(document.getElementById("createWarranty").value);
  const profitMargin = parseFloat(
    document.getElementById("createProfitMargin").value
  );
  const location = document.getElementById("createLocation").value;

  const newProduct = {
    category: category,
    brand: brand,
    model: model,
    vendor: vendor,
    quantity: quantity,
    costPrice: costPrice,
    sellingPrice: sellingPrice,
    discount: discount,
    condition: condition,
    warranty: warranty,
    profitMargin: profitMargin,
    location: location,
  };

  products.push(newProduct);

  updateTable(newProduct);

  document.getElementById("createModal").style.display = "none";

  document.getElementById("createForm").reset();
}

// Function is used to close modals

function closeEditModal() {
  document.getElementById("editModal").style.display = "none";
}
function closeCreateModal() {
  document.getElementById("createModal").style.display = "none";
}

// Add the new product to Table with this function

function updateTable(product) {
  const table = document.getElementById("myTable");

  const row = table.insertRow(-1);

  const checkboxCell = row.insertCell(0);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkboxCell.appendChild(checkbox);

  row.insertCell(1).textContent = product.category;
  row.insertCell(2).textContent = product.brand;
  row.insertCell(3).textContent = product.model;
  row.insertCell(4).textContent = product.vendor;
  row.insertCell(5).textContent = product.quantity;
  row.insertCell(6).textContent = product.costPrice;
  row.insertCell(7).textContent = product.sellingPrice;
  row.insertCell(8).textContent = product.discount;
  row.insertCell(9).textContent = product.condition;
  row.insertCell(10).textContent = product.warranty;
  row.insertCell(11).textContent = product.profitMargin;
  row.insertCell(12).textContent = product.location;

  const buttonsCell = row.insertCell(13);
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "all-button";
  const editButton = document.createElement("button");
  editButton.textContent = "Edit Product";
  editButton.onclick = function () {
    openEditModal(products.length - 1);
  };
  buttonsContainer.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Product";
  deleteButton.onclick = function () {
    deleteProduct(products.length - 1);
  };
  buttonsContainer.appendChild(deleteButton);

  buttonsCell.appendChild(buttonsContainer);
}

document
  .getElementById("addProductButton")
  .addEventListener("click", function () {
    document.getElementById("createModal").style.display = "block";
  });
document
  .getElementById("createSaveButton")
  .addEventListener("click", addProduct);

document.getElementById("sortDropdown").addEventListener("change", function () {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  // Run loop until no switching is needed
  while (switching) {
    switching = false;
    rows = table.rows;
    // Loop to go through all rows
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      // Get the two elements to compare, one from current row and one from the next
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check if the two rows should switch place, based on the direction, asc or desc
      if (this.value == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (this.value == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      // If a switch has been marked, make the switch and mark that a switch has been done
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
});

// Delete The product with this function
function deleteProduct(index) {
  products.splice(index, 1);
  console.log(products);
  addRowsToTable();
}

//Filter data with Search Box
document.getElementById("searchInput").addEventListener("input", function () {
  const searchText = this.value.toLowerCase();
  const table = document.getElementById("myTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let shouldShowRow = false;
    for (let j = 1; j < cells.length; j++) {
      const cellText = cells[j].textContent.toLowerCase();
      if (cellText.includes(searchText)) {
        shouldShowRow = true;
        break;
      }
    }
    if (shouldShowRow) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});
