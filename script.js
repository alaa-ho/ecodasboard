async function loadData() {
  const response = await fetch('data.json');
  const data = await response.json();

  // Pie Chart
  new Chart(document.getElementById('scopePieChart'), {
    type: 'pie',
    data: {
      labels: ['Scope 1', 'Scope 2', 'Scope 3'],
      datasets: [{
        data: [data.emissions.scope1, data.emissions.scope2, data.emissions.scope3],
        backgroundColor: ['#4caf50', '#81c784', '#c8e6c9']
      }]
    }
  });

  // Bar Chart
  new Chart(document.getElementById('miniScopeBars'), {
    type: 'bar',
    data: {
      labels: Object.keys(data.miniScopes),
      datasets: [{
        label: 'Emissions',
        data: Object.values(data.miniScopes),
        backgroundColor: '#2196f3'
      }]
    }
  });

  // Line Chart
  new Chart(document.getElementById('comparisonsLine'), {
    type: 'line',
    data: {
      labels: data.comparisons.years,
      datasets: [{
        label: 'Total Emissions',
        data: data.comparisons.values,
        borderColor: '#f44336',
        fill: false
      }]
    }
  });

  // Uncertainty
  new Chart(document.getElementById('uncertaintyBars'), {
    type: 'bar',
    data: {
      labels: ['Scope 1', 'Scope 2', 'Scope 3'],
      datasets: [{
        label: 'Uncertainty %',
        data: [data.uncertainty.scope1, data.uncertainty.scope2, data.uncertainty.scope3],
        backgroundColor: ['#ff9800', '#ffc107', '#ffe082']
      }]
    }
  });

  // Keyword Coverage
  new Chart(document.getElementById('keywordDonut'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(data.keywords),
      datasets: [{
        data: Object.values(data.keywords),
        backgroundColor: ['#388e3c', '#8bc34a', '#aed581', '#dcedc8']
      }]
    }
  });
}

loadData();