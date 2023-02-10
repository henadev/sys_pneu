var xValues = ["Janv","Fev","Mar","Avr","Mai"];
var yValues = [55, 49, 44, 24, 57];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("productionChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {}
});