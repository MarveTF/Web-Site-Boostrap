let xValues = ["Éxito", "Fracaso"];
let yValues = [95, 5];
let varColors = ["blue", "red"];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: varColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: true },
  },
});
