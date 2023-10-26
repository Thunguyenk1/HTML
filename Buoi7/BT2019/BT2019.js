//Xu ly select
var dataList = {
  "Apple": ["iPhone", "iPad", "Macbook"],
	"Sam Sung": ["Samsung galaxy S23 Ultra", "Samsung galaxy S22 Ultra", "Samsung Galaxy Z Flip5"],
	"Xiaomi": ["Xiaomi Google Tivi", "Xiaomi A2", "Xiaomi P1"]
}

var ManufacturerTag = document.getElementById('Manufacturer_id')
for(Manufacturer in dataList) {
    ManufacturerTag.innerHTML += 
    `<option value="${Manufacturer}">${Manufacturer}</option>`
}

var CategorynameTag = document.getElementById('Category_id')
function changeManufacturerName() {

	var value = ManufacturerTag.value
	CategorynameTag.innerHTML = '<option value="">--- Chon ---</option>'
	if(value != '') {
		var categoryList = dataList[value]
		for (var i = 0; i < categoryList.length; i++) {
			CategorynameTag.innerHTML += `<option value="${categoryList[i]}">${categoryList[i]}</option>`
		}
	}
}

//Xu ly input
var PriceTag = document.getElementById("Price_id");
var QuantityTag = document.getElementById("Quantity_id");
var TotalPriceTag = document.getElementById("TotalPrice_id");
function updateTotalPrice() {
	price = PriceTag.value
	quantity = QuantityTag.value

	TotalPriceTag.value = price * quantity
}

//Xu ly them sua xoa
var ProductTag = document.getElementById("Product_id");
var dataTable = document.getElementById("data-table");
var count = 0;
var currentIndex  = -1;

var ProductList = [];

function addData() {
  let Product = ProductTag.value;
  let Category = CategorynameTag.value;
  let Price = PriceTag.value;
  let Quantity = QuantityTag.value;
  let TotalPrice = TotalPriceTag.value;
  let Manufacturer = ManufacturerTag.value;

  ProductList.push({
    'Product': Product,
    'Category': Category,
    'Price': Price,
    'Quantity': Quantity,
    'TotalPrice': TotalPrice,
    'Manufacturer': Manufacturer,
  });
  console.log(ProductList);
  showDataTable();
}

function showDataTable() {
  dataTable.innerHTML = "";

  for (let i = 0; i < ProductList.length; i++) {
    dataTable.innerHTML += `<tr>
                    <td>${i + 1}</td>
                    <td>${ProductList[i].Product}</td>
                    <td>${ProductList[i].Category}</td>
                    <td>${ProductList[i].Price}</td>
                    <td>${ProductList[i].Quantity}</td>
                    <td>${ProductList[i].TotalPrice}</td>
                    <td>${ProductList[i].Manufacturer}</td>
                    <td><button class="btn btn-edit" onclick="editItem(${i})">Edit</button></td>
                    <td><button class="btn btn-delete" onclick="deleteItem(${i})">Delete</button></td>
                </tr>`;
  }
}

function editItem(index) {
  currentIndex = index;

  ProductTag.value = ProductList[index].productName;
  PriceTag.value = ProductList[index].price;
  QuantityTag.value = ProductList[index].quantity;
  TotalPriceTag.value = ProductList[index].totalPrice;
  ManufacturerTag.value = ProductList[index].manufacturerName;

  changeManufacturerName();

  CategorynameTag.value = ProductList[index].categoryName;

  saveBtn.innerHTML = "Update Product";
  showDataTable();
}

function deleteItem(index) {
  ProductList.splice(index, 1);

  showDataTable();
}

function resetData() {
  ProductTag.value = "";
  CategorynameTag.value = "";
  PriceTag.value = "";
  QuantityTag.value = "";
  TotalPriceTag.value = "";
  ManufacturerTag.value = "";
}
