// Porsche Dashboard Data & Logic
const RAW_DATA = [
{"id":6,"model":"718 Cayman","year":2022,"price":79500,"payment":"Credit Card","city":"Boston","state":"MA"},
{"id":7,"model":"911 Turbo S","year":2024,"price":235000,"payment":"Wire Transfer","city":"Seattle","state":"WA"},
{"id":8,"model":"Cayenne Coupe","year":2023,"price":112750,"payment":"Financing","city":"Austin","state":"TX"},
{"id":9,"model":"Macan S","year":2021,"price":68900,"payment":"Cash","city":"Denver","state":"CO"},
{"id":10,"model":"Taycan 4S","year":2024,"price":121000,"payment":"Bank Transfer","city":"Los Angeles","state":"CA"},
{"id":11,"model":"Panamera 4","year":2023,"price":104500,"payment":"Credit Card","city":"Miami","state":"FL"},
{"id":12,"model":"911 Carrera S","year":2020,"price":96300,"payment":"Lease","city":"New York","state":"NY"},
{"id":13,"model":"Cayenne E-Hybrid","year":2022,"price":89750,"payment":"Wire Transfer","city":"San Diego","state":"CA"},
{"id":14,"model":"718 Boxster","year":2021,"price":73500,"payment":"Debit Card","city":"Chicago","state":"IL"},
{"id":15,"model":"Macan GTS","year":2024,"price":95000,"payment":"Financing","city":"Phoenix","state":"AZ"},
{"id":16,"model":"Taycan Turbo","year":2023,"price":152200,"payment":"Wire Transfer","city":"Dallas","state":"TX"},
{"id":17,"model":"911 Dakar","year":2024,"price":267200,"payment":"Cash","city":"Las Vegas","state":"NV"},
{"id":18,"model":"Panamera Turbo S","year":2022,"price":138000,"payment":"Bank Transfer","city":"Atlanta","state":"GA"},
{"id":19,"model":"Cayenne S","year":2021,"price":97500,"payment":"Credit Card","city":"Houston","state":"TX"},
{"id":20,"model":"Macan","year":2023,"price":62500,"payment":"Financing","city":"Portland","state":"OR"},
{"id":21,"model":"718 Cayman GT4 RS","year":2024,"price":175000,"payment":"Wire Transfer","city":"San Francisco","state":"CA"},
{"id":22,"model":"Taycan 4S","year":2022,"price":118600,"payment":"Lease","city":"Scottsdale","state":"AZ"},
{"id":23,"model":"911 Carrera GTS","year":2023,"price":124500,"payment":"Cash","city":"Nashville","state":"TN"},
{"id":24,"model":"Panamera","year":2020,"price":69500,"payment":"Credit Card","city":"Charlotte","state":"NC"},
{"id":25,"model":"Cayenne Turbo GT","year":2024,"price":198000,"payment":"Wire Transfer","city":"Las Vegas","state":"NV"},
{"id":26,"model":"Macan T","year":2023,"price":76500,"payment":"Bank Transfer","city":"Minneapolis","state":"MN"},
{"id":27,"model":"911 Targa 4S","year":2022,"price":158000,"payment":"Financing","city":"Raleigh","state":"NC"},
{"id":28,"model":"Taycan GTS","year":2024,"price":142500,"payment":"Wire Transfer","city":"Salt Lake City","state":"UT"},
{"id":29,"model":"718 Spyder RS","year":2023,"price":168000,"payment":"Cash","city":"Riverside","state":"CA"},
{"id":30,"model":"Panamera 4 E-Hybrid","year":2022,"price":109750,"payment":"Lease","city":"Tampa","state":"FL"},
{"id":31,"model":"Cayenne Coupe","year":2024,"price":118500,"payment":"Credit Card","city":"San Antonio","state":"TX"},
{"id":32,"model":"Macan Electric","year":2025,"price":88500,"payment":"Wire Transfer","city":"San Jose","state":"CA"},
{"id":33,"model":"911 GT3","year":2023,"price":241000,"payment":"Bank Transfer","city":"Las Vegas","state":"NV"},
{"id":34,"model":"Taycan Cross Turismo","year":2022,"price":128400,"payment":"Financing","city":"Sacramento","state":"CA"},
{"id":35,"model":"911 Carrera Cabriolet","year":2024,"price":135000,"payment":"Wire Transfer","city":"Fort Worth","state":"TX"},
{"id":36,"model":"Panamera Turbo","year":2021,"price":136000,"payment":"Cash","city":"Tulsa","state":"OK"},
{"id":37,"model":"Cayenne E-Hybrid","year":2023,"price":95300,"payment":"Credit Card","city":"Kansas City","state":"MO"},
{"id":38,"model":"Macan S","year":2022,"price":72500,"payment":"Wire Transfer","city":"Memphis","state":"TN"},
{"id":39,"model":"Taycan Turbo S","year":2024,"price":215000,"payment":"Financing","city":"Atlanta","state":"GA"},
{"id":40,"model":"718 Boxster","year":2023,"price":74000,"payment":"Debit Card","city":"Louisville","state":"KY"},
{"id":41,"model":"911 Targa 4","year":2021,"price":141250,"payment":"Lease","city":"Oakland","state":"CA"},
{"id":42,"model":"Cayenne S","year":2023,"price":95450,"payment":"Wire Transfer","city":"Omaha","state":"NE"},
{"id":43,"model":"Panamera","year":2024,"price":82400,"payment":"Bank Transfer","city":"Albuquerque","state":"NM"},
{"id":44,"model":"Macan GTS","year":2022,"price":95400,"payment":"Cash","city":"Tucson","state":"AZ"},
{"id":45,"model":"Taycan","year":2023,"price":119500,"payment":"Credit Card","city":"Columbus","state":"OH"},
{"id":46,"model":"911 GT3 RS","year":2024,"price":286500,"payment":"Wire Transfer","city":"Arlington","state":"TX"},
{"id":47,"model":"718 Cayman S","year":2021,"price":82750,"payment":"Financing","city":"Bakersfield","state":"CA"},
{"id":48,"model":"Cayenne Coupe","year":2022,"price":106500,"payment":"Cash","city":"Aurora","state":"CO"},
{"id":49,"model":"Panamera 4","year":2023,"price":101300,"payment":"Lease","city":"Anaheim","state":"CA"},
{"id":50,"model":"Taycan 4S","year":2025,"price":137200,"payment":"Wire Transfer","city":"Santa Ana","state":"CA"},
{"id":51,"model":"911 Turbo S","year":2023,"price":242000,"payment":"Bank Transfer","city":"Riverside","state":"CA"},
{"id":52,"model":"Macan T","year":2024,"price":78000,"payment":"Credit Card","city":"St. Louis","state":"MO"},
{"id":53,"model":"718 Cayman GT4 RS","year":2025,"price":175000,"payment":"Wire Transfer","city":"Pittsburgh","state":"PA"},
{"id":54,"model":"Cayenne E-Hybrid","year":2024,"price":99850,"payment":"Financing","city":"Cincinnati","state":"OH"},
{"id":55,"model":"Panamera 4S","year":2022,"price":112000,"payment":"Cash","city":"Irvine","state":"CA"},
{"id":56,"model":"Taycan Turbo","year":2024,"price":159000,"payment":"Wire Transfer","city":"Durham","state":"NC"},
{"id":57,"model":"911 Carrera","year":2023,"price":124500,"payment":"Credit Card","city":"Lincoln","state":"NE"},
{"id":58,"model":"Macan Electric","year":2025,"price":91200,"payment":"ACH Payment","city":"Greensboro","state":"NC"},
{"id":59,"model":"718 Spyder RS","year":2024,"price":165000,"payment":"Wire Transfer","city":"Chandler","state":"AZ"},
{"id":60,"model":"Cayenne Turbo","year":2022,"price":146800,"payment":"Lease","city":"Plano","state":"TX"},
{"id":61,"model":"911 Dakar","year":2025,"price":271700,"payment":"Cash","city":"New Orleans","state":"LA"},
{"id":62,"model":"Panamera","year":2021,"price":71500,"payment":"Bank Transfer","city":"Laredo","state":"TX"},
{"id":63,"model":"Taycan GTS","year":2023,"price":138500,"payment":"Wire Transfer","city":"Madison","state":"WI"},
{"id":64,"model":"Macan","year":2024,"price":64500,"payment":"Financing","city":"Henderson","state":"NV"},
{"id":65,"model":"911 Targa 4S","year":2023,"price":157250,"payment":"Credit Card","city":"Lubbock","state":"TX"},
{"id":66,"model":"Cayenne S","year":2024,"price":96500,"payment":"Wire Transfer","city":"Garland","state":"TX"},
{"id":67,"model":"718 Cayman","year":2021,"price":69300,"payment":"Debit Card","city":"Lexington","state":"KY"},
{"id":68,"model":"Taycan 4S","year":2023,"price":137500,"payment":"Financing","city":"Stockton","state":"CA"},
{"id":69,"model":"Panamera Turbo S","year":2024,"price":128000,"payment":"Wire Transfer","city":"Corpus Christi","state":"TX"},
{"id":70,"model":"911 Carrera Cabriolet","year":2022,"price":124800,"payment":"Lease","city":"St. Paul","state":"MN"},
{"id":71,"model":"Macan Electric","year":2026,"price":88000,"payment":"Crypto Payment","city":"Newark","state":"NJ"},
{"id":72,"model":"Cayenne Coupe","year":2025,"price":98500,"payment":"Bank Transfer","city":"Anchorage","state":"AK"},
{"id":73,"model":"Taycan Turbo S","year":2025,"price":217000,"payment":"Wire Transfer","city":"Wichita","state":"KS"},
{"id":74,"model":"911 Carrera S","year":2021,"price":104600,"payment":"Cash","city":"Toledo","state":"OH"},
{"id":75,"model":"Panamera 4 E-Hybrid","year":2023,"price":108000,"payment":"Financing","city":"Buffalo","state":"NY"},
{"id":76,"model":"Macan GTS","year":2025,"price":95000,"payment":"ACH Payment","city":"Glendale","state":"AZ"},
{"id":77,"model":"718 Boxster GTS","year":2022,"price":91500,"payment":"Credit Card","city":"Irving","state":"TX"},
{"id":78,"model":"Taycan","year":2024,"price":117300,"payment":"Lease","city":"Chesapeake","state":"VA"},
{"id":79,"model":"911 Turbo","year":2023,"price":198300,"payment":"Wire Transfer","city":"Wichita","state":"KS"},
{"id":80,"model":"Cayenne","year":2022,"price":78200,"payment":"Cash","city":"Fremont","state":"CA"},
{"id":81,"model":"Macan T","year":2021,"price":73100,"payment":"Bank Transfer","city":"Scottsdale","state":"AZ"},
{"id":82,"model":"Panamera","year":2025,"price":81000,"payment":"Crypto Payment","city":"Richmond","state":"VA"},
{"id":83,"model":"911 Carrera GTS","year":2024,"price":117150,"payment":"Financing","city":"Baton Rouge","state":"LA"},
{"id":84,"model":"Taycan Cross Turismo","year":2025,"price":118000,"payment":"ACH Payment","city":"Salt Lake City","state":"UT"},
{"id":85,"model":"Cayenne Turbo GT","year":2023,"price":190000,"payment":"Wire Transfer","city":"Lubbock","state":"TX"},
{"id":86,"model":"Macan","year":2020,"price":58800,"payment":"Cash","city":"Spokane","state":"WA"},
{"id":87,"model":"911 Targa 4","year":2024,"price":143250,"payment":"Crypto Payment","city":"Norfolk","state":"VA"},
{"id":88,"model":"911 GT3","year":2024,"price":224000,"payment":"Wire Transfer","city":"Boise","state":"ID"},
{"id":89,"model":"911 Carrera","year":2024,"price":126900,"payment":"Credit Card","city":"Orlando","state":"FL"},
{"id":90,"model":"Cayenne","year":2023,"price":84500,"payment":"Bank Transfer","city":"San Jose","state":"CA"},
{"id":91,"model":"Macan S","year":2022,"price":69800,"payment":"Financing","city":"Tampa","state":"FL"},
{"id":92,"model":"Taycan 4S","year":2025,"price":132700,"payment":"Wire Transfer","city":"Denver","state":"CO"},
{"id":93,"model":"Panamera","year":2021,"price":81000,"payment":"Cash","city":"Austin","state":"TX"},
{"id":94,"model":"718 Cayman","year":2023,"price":78900,"payment":"Debit Card","city":"Seattle","state":"WA"},
{"id":95,"model":"911 Turbo S","year":2026,"price":249300,"payment":"Wire Transfer","city":"Boston","state":"MA"},
{"id":96,"model":"Cayenne Coupe","year":2024,"price":108750,"payment":"Wire Transfer","city":"Phoenix","state":"AZ"},
{"id":97,"model":"Macan Electric","year":2026,"price":92600,"payment":"Financing","city":"Chicago","state":"IL"},
{"id":98,"model":"Taycan Turbo","year":2025,"price":164000,"payment":"ACH Payment","city":"Dallas","state":"TX"},
{"id":99,"model":"Panamera 4S","year":2024,"price":119000,"payment":"Credit Card","city":"San Francisco","state":"CA"},
{"id":100,"model":"911 GT3","year":2026,"price":232500,"payment":"Wire Transfer","city":"Las Vegas","state":"NV"},
{"id":101,"model":"Cayenne E-Hybrid","year":2023,"price":96800,"payment":"Lease","city":"Charlotte","state":"NC"},
{"id":102,"model":"Macan T","year":2022,"price":74400,"payment":"Cash","city":"Mesa","state":"AZ"},
{"id":103,"model":"Taycan GTS","year":2025,"price":148500,"payment":"Crypto Payment","city":"Atlanta","state":"GA"},
{"id":104,"model":"718 Boxster","year":2021,"price":71900,"payment":"Bank Transfer","city":"Long Beach","state":"CA"},
{"id":105,"model":"911 Targa 4","year":2024,"price":143250,"payment":"Financing","city":"Oakland","state":"CA"},
{"id":106,"model":"Panamera Turbo","year":2020,"price":137500,"payment":"Wire Transfer","city":"Tulsa","state":"OK"},
{"id":107,"model":"Cayenne Turbo GT","year":2025,"price":204800,"payment":"Credit Card","city":"Wichita","state":"KS"},
{"id":108,"model":"911 Dakar","year":2024,"price":271700,"payment":"Lease","city":"New Orleans","state":"LA"},
{"id":109,"model":"Cayenne","year":2020,"price":77000,"payment":"Crypto Payment","city":"Chula Vista","state":"CA"},
{"id":110,"model":"Taycan Turbo","year":2022,"price":152500.50,"payment":"Financing","city":"Dallas","state":"TX"}
];

// ─── Utility ───
function fmt(n) {
  return '$' + n.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0});
}
function fmtK(n) {
  if (n >= 1e6) return '$' + (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return '$' + (n / 1e3).toFixed(1) + 'K';
  return '$' + n.toFixed(0);
}

// ─── Compute KPIs ───
const totalSales = RAW_DATA.length;
const totalRevenue = RAW_DATA.reduce((s, r) => s + r.price, 0);
const avgTicket = totalRevenue / totalSales;

// City revenue
const cityRev = {};
RAW_DATA.forEach(r => { cityRev[r.city] = (cityRev[r.city] || 0) + r.price; });
const topCity = Object.entries(cityRev).sort((a, b) => b[1] - a[1])[0];

// Model count
const modelCount = {};
RAW_DATA.forEach(r => { modelCount[r.model] = (modelCount[r.model] || 0) + 1; });
const topModel = Object.entries(modelCount).sort((a, b) => b[1] - a[1])[0];

// Payment count
const payCount = {};
RAW_DATA.forEach(r => { payCount[r.payment] = (payCount[r.payment] || 0) + 1; });
const topPayment = Object.entries(payCount).sort((a, b) => b[1] - a[1])[0];

// Model revenue
const modelRev = {};
RAW_DATA.forEach(r => { modelRev[r.model] = (modelRev[r.model] || 0) + r.price; });
const topModelRev = Object.entries(modelRev).sort((a, b) => b[1] - a[1]).slice(0, 10);

// Payment revenue & count
const payRev = {};
RAW_DATA.forEach(r => { payRev[r.payment] = (payRev[r.payment] || 0) + r.price; });
const payData = Object.entries(payCount).sort((a, b) => b[1] - a[1]);

// Year distribution
const yearCount = {};
RAW_DATA.forEach(r => { yearCount[r.year] = (yearCount[r.year] || 0) + 1; });
const yearData = Object.entries(yearCount).sort((a, b) => a[0] - b[0]);

// Model avg ticket (top 10)
const modelAvg = {};
const modelCounts = {};
RAW_DATA.forEach(r => {
  modelAvg[r.model] = (modelAvg[r.model] || 0) + r.price;
  modelCounts[r.model] = (modelCounts[r.model] || 0) + 1;
});
const topModelAvg = Object.entries(modelAvg)
  .map(([m, t]) => [m, t / modelCounts[m], modelCounts[m]])
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);

// City-Model heatmap (top 8 cities x top 6 model families)
const modelFamily = (m) => {
  if (m.startsWith('911')) return '911';
  if (m.startsWith('718')) return '718';
  if (m.startsWith('Cayenne')) return 'Cayenne';
  if (m.startsWith('Macan')) return 'Macan';
  if (m.startsWith('Panamera')) return 'Panamera';
  if (m.startsWith('Taycan')) return 'Taycan';
  return m;
};
const families = ['911', '718', 'Cayenne', 'Macan', 'Panamera', 'Taycan'];
const topCities = Object.entries(cityRev).sort((a, b) => b[1] - a[1]).slice(0, 8).map(c => c[0]);
const heatmap = {};
RAW_DATA.forEach(r => {
  const fam = modelFamily(r.model);
  const key = r.city + '|' + fam;
  heatmap[key] = (heatmap[key] || 0) + 1;
});

// ─── Render ───
document.addEventListener('DOMContentLoaded', () => {
  // KPIs
  document.getElementById('kpi-total-sales').textContent = totalSales;
  document.getElementById('kpi-total-revenue').textContent = fmtK(totalRevenue);
  document.getElementById('kpi-avg-ticket').textContent = fmt(Math.round(avgTicket));
  document.getElementById('kpi-top-city').textContent = topCity[0];
  document.getElementById('kpi-top-city-detail').textContent = fmtK(topCity[1]);
  document.getElementById('kpi-top-model').textContent = topModel[0];
  document.getElementById('kpi-top-model-detail').textContent = topModel[1] + ' vendas';
  document.getElementById('kpi-top-payment').textContent = topPayment[0];
  document.getElementById('kpi-top-payment-detail').textContent = topPayment[1] + ' transações';

  // Chart 1: Model Revenue Bars
  const maxRev = topModelRev[0][1];
  const barHtml = topModelRev.map(([m, r]) => `
    <div class="bar-item">
      <span class="bar-label">${m}</span>
      <div class="bar-track"><div class="bar-fill" data-width="${(r / maxRev * 100).toFixed(1)}"></div></div>
      <span class="bar-value">${fmtK(r)}</span>
    </div>
  `).join('');
  document.getElementById('chart-model-revenue').innerHTML = barHtml;

  // Chart 2: Payment Donut
  renderDonut('chart-payment-donut', payData);

  // Chart 3: City-Model Heatmap
  renderHeatmap();

  // Chart 4: Year Timeline
  renderYearTimeline();

  // Chart 5: Top Ticket Médio
  renderTicketRanking();

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
    document.querySelectorAll('.year-bar').forEach(bar => {
      bar.style.height = bar.dataset.height + '%';
    });
  }, 400);

  // Intersection observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('animate-in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.chart-card').forEach(el => observer.observe(el));
});

function renderDonut(containerId, data) {
  const colors = [
    '#C8A951', '#E8D48B', '#9A7D2E', '#A08838',
    '#D4B96A', '#B89E45', '#7A6324', '#F0E0A0', '#6B5520'
  ];
  const total = data.reduce((s, d) => s + d[1], 0);
  const cx = 100, cy = 100, r = 80, inner = 55;
  let cumAngle = -90;
  let paths = '';
  data.forEach(([label, count], i) => {
    const angle = (count / total) * 360;
    const startAngle = cumAngle;
    const endAngle = cumAngle + angle;
    const largeArc = angle > 180 ? 1 : 0;
    const s1 = polarToCartesian(cx, cy, r, startAngle);
    const e1 = polarToCartesian(cx, cy, r, endAngle);
    const s2 = polarToCartesian(cx, cy, inner, endAngle);
    const e2 = polarToCartesian(cx, cy, inner, startAngle);
    paths += `<path d="M${s1.x},${s1.y} A${r},${r} 0 ${largeArc} 1 ${e1.x},${e1.y} L${s2.x},${s2.y} A${inner},${inner} 0 ${largeArc} 0 ${e2.x},${e2.y} Z" fill="${colors[i % colors.length]}" opacity="0.85">
      <animate attributeName="opacity" from="0" to="0.85" dur="0.8s" fill="freeze" begin="${i * 0.1}s"/>
    </path>`;
    cumAngle += angle;
  });
  const legend = data.map(([label, count], i) => `
    <div class="legend-item">
      <div class="legend-dot" style="background:${colors[i % colors.length]}"></div>
      <span class="legend-text">${label}</span>
      <span class="legend-value">${count}</span>
    </div>
  `).join('');
  document.getElementById(containerId).innerHTML = `
    <div class="donut-container">
      <svg class="donut-svg" width="200" height="200" viewBox="0 0 200 200">
        ${paths}
        <text x="100" y="95" text-anchor="middle" fill="#fff" font-size="22" font-weight="700" font-family="Inter">${total}</text>
        <text x="100" y="115" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="10" font-weight="500" font-family="Inter" letter-spacing="1.5">TOTAL</text>
      </svg>
      <div class="donut-legend">${legend}</div>
    </div>
  `;
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function renderHeatmap() {
  let html = '<table class="heatmap-table"><thead><tr><th>Cidade</th>';
  families.forEach(f => { html += `<th>${f}</th>`; });
  html += '</tr></thead><tbody>';
  topCities.forEach(city => {
    html += `<tr><td>${city}</td>`;
    families.forEach(fam => {
      const val = heatmap[city + '|' + fam] || 0;
      const heat = val === 0 ? 0 : val === 1 ? 1 : val === 2 ? 2 : val === 3 ? 3 : 4;
      html += `<td class="heat-${heat}">${val || '—'}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  document.getElementById('chart-heatmap').innerHTML = html;
}

function renderYearTimeline() {
  const maxCount = Math.max(...yearData.map(d => d[1]));
  const html = yearData.map(([year, count]) => `
    <div class="year-bar-group">
      <div class="year-bar-wrapper">
        <div class="year-bar" data-height="${(count / maxCount * 100).toFixed(0)}">
          <div class="bar-tooltip">${count} vendas</div>
        </div>
      </div>
      <span class="year-label">${year}</span>
      <span class="year-count">${count}</span>
    </div>
  `).join('');
  document.getElementById('chart-year-timeline').innerHTML = html;
}

function renderTicketRanking() {
  const html = topModelAvg.map(([model, avg, count], i) => `
    <div class="ranking-item">
      <span class="ranking-pos">${i + 1}</span>
      <span class="ranking-model">${model} <span style="color:var(--text-muted);font-size:11px">(${count}x)</span></span>
      <span class="ranking-price">${fmt(Math.round(avg))}</span>
    </div>
  `).join('');
  document.getElementById('chart-ticket-ranking').innerHTML = html;
}
