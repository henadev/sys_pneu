var xValues = ["Janv","Fev","Mar","Avr","Mai","Jui","Joui","Aout","Sept","Oct","Nov","Dec"];
var yValues = [2,2.7,3,3,3,3.1,2.9,3,3,2,3.1];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: "rgba(2,1,3,0.1)",
      borderColor: "blue",
      data: yValues
    }]
  },
  options:{}
});


