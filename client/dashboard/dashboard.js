// {} ||   [] <>
const Chart = require('chart.js');







//FUNCION PARA EXTENDER EL MENU EN EL ICONO DE USUARIO.. SALIR!!
document.addEventListener("DOMContentLoaded", function () {
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function () {
      dropdownMenu.classList.toggle('show');
    });
});

//FUNCION PARA EXTENDER EL SUB-MENU EN CATALOGO
document.addEventListener("DOMContentLoaded", function () {
    var catalogoToggle = document.getElementById('catalogo-Dropdown');
    var catalogoMenu = document.getElementById('catalogo-Menu');

    catalogoToggle.addEventListener('click', function () {
      catalogoMenu.classList.toggle('show');
    });
});


const ctx = document.getElementById('myChart');
  
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});