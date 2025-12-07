async function loadData() {
  const response = await fetch('data.json');
  const data = await response.json();

  // إعداد أنيميشن عام للرسوم البيانية
  Chart.defaults.animation.duration = 1200;
  Chart.defaults.animation.easing = 'easeOutBounce';

  // Pie Chart
  new Chart(document.getElementById('scopePieChart'), {
    type: 'pie',
    data: {
      labels: ['Scope 1', 'Scope 2', 'Scope 3'],
      datasets: [{
        data: [data.emissions.scope1, data.emissions.scope2, data.emissions.scope3],
        backgroundColor: ['#ff9800', '#2196f3', '#9e9e9e']
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
        backgroundColor: '#4caf50'
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
        backgroundColor: ['#ff9800', '#2196f3', '#9e9e9e']
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
