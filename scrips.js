var elem = document.querySelector("#elem")
var row = document.getElementById("row")
var colom = document.getElementById("colom")
var button = document.getElementById("button")

button.addEventListener('click', function (el, rows, cols) {
  var el = elem
  var rows = parseInt(row.value)
  var cols = parseInt(colom.value)
  var table = document.createElement('table')

  for (var i = 0; i < rows; i += 1) {
    var tr = document.createElement('tr');

    for (var x = 0; x < cols; x += 1) {
      var td = document.createElement('td');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  el.appendChild(table);
})

elem.addEventListener('click', function (cell) {
  let elm = cell.target;
  elm.setAttribute("style", "color:red; border: 1px solid blue;");
})
