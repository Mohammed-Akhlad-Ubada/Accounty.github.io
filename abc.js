
var count=0;

function addNewItem() {
    var newItemForm = document.createElement('div');
    newItemForm.classList.add('item-form');

    newItemForm.innerHTML = `
    <div class="form-group">
    <label for="itemName">Item Name:</label>
    <input type="text" class="form-control" id="itemName" name="itemName[]" required>
</div>
<div class="form-group">
    <label for="itemPrice">Item Price:</label>
    <input type="number" class="form-control" id="itemPrice" name="itemPrice[]" required>
</div>
    `;
count++;
    document.getElementById('itemsContainer').appendChild(newItemForm);
}

function generatePDF() {
    var customerName = document.getElementById('customerName').value;

    var items = document.querySelectorAll('.item-form');
    var pdfContent = `
    <div class="container"><h2>Accounty</h2></div> <table class="table">
    <thead>
      <tr>
        <th scope="col">Customer Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${customerName}</td>
      </tr>
    </tbody>
  </table>`;
  var sum=0;
    items.forEach(function (item, index) {
        var itemName = item.querySelector('[name="itemName[]"]').value;
        var itemPrice = parseInt(item.querySelector('[name="itemPrice[]"]').value);
        sum= sum+itemPrice;
        console.log(sum);
        if(index==0)
{
    pdfContent +=`<table class="table">
    <thead>
      <tr>
        <th scope="col">S.No</th>
        <th scope="col">Item Name</th>
        <th scope="col">Item Price</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>${index +1}</td>
      <td>${itemName}</td>
      <td>${itemPrice}</td>
    </tr>
  </tbody>`
}
else {
        pdfContent += `
<tbody>
    <tr>
      <td>${index +1}</td>
      <td>${itemName}</td>
      <td>${itemPrice}</td>
    </tr>
  </tbody>
        `;
}
if(index==count)
{
  pdfContent+=`
  <tbody>
    <tr>
      <td class="text-primary"><h5>Total</h5></td>
      <td></td>
      <td><h5>${sum}</h5></td>
    </tr>
  </tbody>
  
  
  </table>`;
}

 });

    var element = document.createElement('div');
    element.innerHTML = pdfContent;

    html2pdf(element, {
        margin: 10,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}

