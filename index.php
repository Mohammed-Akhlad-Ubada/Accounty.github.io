<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="icon" href="images/akhlad-high-resolution-logo.png">
    <title>Accounty</title>
</head>
<body>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="images/akhlad-high-resolution-logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Accounty
    </a>
  </div>
</nav>

<div class="container">
<h2 class="mb-4">Accounty Billing System</h2>
    <form>
        <div class="form-group">
            <label for="customerName">Customer Name:</label>
            <input type="text" class="form-control" id="customerName" required>
        </div>
        <div id="itemsContainer">
        <div class="item-form">
            <div class="form-group">
                <label for="itemName">Item Name:</label>
                <input type="text" class="form-control" name="itemName[]" required>
            </div>
            <div class="form-group">
                <label for="itemPrice">Item Price:</label>
                <input type="number" class="form-control" name="itemPrice[]" required>
            </div>
        </div>
    </div>
    </form>
</div>
<div class="container mt-5 my-4">
   <button class="btn btn-primary" onclick="generatePDF()">Generate Bill PDF</button>
    <button type="button" class="btn btn-success" onclick="addNewItem()">Add Item</button>
</div>
<div class="container">
<footer class="pt-5 my-5 text-muted border-top">
    Created by Akhlad· © 2023
  </footer>
  </div>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jhildenbiddle/bootstrap4-toggle@3.7.0/dist/bootstrap4-toggle.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://rawgit.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
<script src="abc.js"></script>
</body>
</html>
