
const projects = [{"id": "makarov", "title": "Девушки с Макаровым", "status": "В эфире", "genre": "Комедия • 16+", "posterImage": "makarov_poster.webp", "info": [["Студия", "Norm Production по заказу Comedy Club Production"], ["Дата старта", "09.03.2021"], ["Дата окончания", "06.02.2025"], ["Длительность выпуска", "30 мин"], ["Количество сезонов", "5"], ["Количество выпусков", "100"], ["Средняя доля проекта 14-44 0+", "7,8"], ["Доля,% канала за период показа", "6,2"], ["Отношение к доле,% канала за период показа", "25%"], ["Рейтинг Кинопоиск", "8,5"]], "cast": [["Павел Майков", "Павел Макаров"], ["Алевтина Тукан", "Анна Туркина"], ["Валерия Астапова", "Екатерина Синицкая"], ["Влада Ермолаева", "Александра Попова"], ["Елена Полянская", "Олеся Верба"], ["Олеся Судзиловская", "Ольга Романова"], ["Георгий Дронов", "Роман Жилин"]], "seasons": [["Сезон 1", "20 эпизодов", "09.03.2021 — 01.04.2021", "14,6"], ["Сезон 2", "20 эпизодов", "31.01.2022 — 02.03.2022", "11,0"], ["Сезон 3", "20 эпизодов", "24.10.2022 — 23.11.2022", "8,7"], ["Сезон 4", "20 эпизодов", "11.12.2023 — 26.12.2023", "10,5"], ["Сезон 5", "20 эпизодов", "20.01.2025 — 06.02.2025", "7,8"]], "compare": [14.6, 11.0, 8.7, 10.5, 7.8]}];
const seasonTimelineData = {"1": [{"episode": 1, "date": "09.03.2021", "share": 14.8}, {"episode": 2, "date": "09.03.2021", "share": 16.13}, {"episode": 3, "date": "10.03.2021", "share": 13.72}, {"episode": 4, "date": "10.03.2021", "share": 14.93}, {"episode": 5, "date": "11.03.2021", "share": 13.86}, {"episode": 6, "date": "11.03.2021", "share": 15.2}, {"episode": 7, "date": "15.03.2021", "share": 11.13}, {"episode": 8, "date": "16.03.2021", "share": 14.2}, {"episode": 9, "date": "17.03.2021", "share": 13.11}, {"episode": 10, "date": "18.03.2021", "share": 13.17}, {"episode": 11, "date": "22.03.2021", "share": 14.37}, {"episode": 12, "date": "23.03.2021", "share": 15.0}, {"episode": 13, "date": "24.03.2021", "share": 14.86}, {"episode": 14, "date": "25.03.2021", "share": 13.82}, {"episode": 15, "date": "29.03.2021", "share": 15.11}, {"episode": 16, "date": "29.03.2021", "share": 15.83}, {"episode": 17, "date": "30.03.2021", "share": 12.29}, {"episode": 18, "date": "30.03.2021", "share": 13.72}, {"episode": 19, "date": "31.03.2021", "share": 15.0}, {"episode": 20, "date": "01.04.2021", "share": 18.97}], "2": [{"episode": 1, "date": "31.01.2022", "share": 11.33}, {"episode": 2, "date": "31.01.2022", "share": 12.54}, {"episode": 3, "date": "31.01.2022", "share": 12.76}, {"episode": 4, "date": "01.02.2022", "share": 12.77}, {"episode": 5, "date": "02.02.2022", "share": 12.55}, {"episode": 6, "date": "03.02.2022", "share": 11.55}, {"episode": 7, "date": "07.02.2022", "share": 11.08}, {"episode": 8, "date": "08.02.2022", "share": 12.94}, {"episode": 9, "date": "09.02.2022", "share": 12.1}, {"episode": 10, "date": "10.02.2022", "share": 9.81}, {"episode": 11, "date": "14.02.2022", "share": 10.23}, {"episode": 12, "date": "15.02.2022", "share": 10.25}, {"episode": 13, "date": "16.02.2022", "share": 10.56}, {"episode": 14, "date": "17.02.2022", "share": 10.39}, {"episode": 15, "date": "21.02.2022", "share": 12.6}, {"episode": 16, "date": "22.02.2022", "share": 8.83}, {"episode": 17, "date": "24.02.2022", "share": 12.09}, {"episode": 18, "date": "28.02.2022", "share": 7.21}, {"episode": 19, "date": "01.03.2022", "share": 9.06}, {"episode": 20, "date": "02.03.2022", "share": 9.48}], "3": [{"episode": 1, "date": "24.10.2022", "share": 7.56}, {"episode": 2, "date": "24.10.2022", "share": 9.57}, {"episode": 3, "date": "25.10.2022", "share": 7.35}, {"episode": 4, "date": "26.10.2022", "share": 6.94}, {"episode": 5, "date": "27.10.2022", "share": 6.04}, {"episode": 6, "date": "31.10.2022", "share": 9.3}, {"episode": 7, "date": "01.11.2022", "share": 9.77}, {"episode": 8, "date": "02.11.2022", "share": 9.11}, {"episode": 9, "date": "03.11.2022", "share": 7.62}, {"episode": 10, "date": "07.11.2022", "share": 8.98}, {"episode": 11, "date": "08.11.2022", "share": 9.94}, {"episode": 12, "date": "09.11.2022", "share": 9.03}, {"episode": 13, "date": "10.11.2022", "share": 7.92}, {"episode": 14, "date": "14.11.2022", "share": 8.99}, {"episode": 15, "date": "15.11.2022", "share": 9.87}, {"episode": 16, "date": "16.11.2022", "share": 9.17}, {"episode": 17, "date": "17.11.2022", "share": 9.93}, {"episode": 18, "date": "21.11.2022", "share": 10.14}, {"episode": 19, "date": "22.11.2022", "share": 9.71}, {"episode": 20, "date": "23.11.2022", "share": 7.61}], "4": [{"episode": 1, "date": "11.12.2023", "share": 9.2}, {"episode": 2, "date": "11.12.2023", "share": 8.85}, {"episode": 3, "date": "11.12.2023", "share": 7.6}, {"episode": 4, "date": "11.12.2023", "share": 8.85}, {"episode": 5, "date": "12.12.2023", "share": 13.06}, {"episode": 6, "date": "12.12.2023", "share": 13.5}, {"episode": 7, "date": "12.12.2023", "share": 14.19}, {"episode": 8, "date": "13.12.2023", "share": 11.03}, {"episode": 9, "date": "13.12.2023", "share": 11.61}, {"episode": 10, "date": "13.12.2023", "share": 12.01}, {"episode": 11, "date": "14.12.2023", "share": 11.42}, {"episode": 12, "date": "14.12.2023", "share": 12.64}, {"episode": 13, "date": "14.12.2023", "share": 12.14}, {"episode": 14, "date": "18.12.2023", "share": 9.14}, {"episode": 15, "date": "19.12.2023", "share": 10.84}, {"episode": 16, "date": "20.12.2023", "share": 9.14}, {"episode": 17, "date": "21.12.2023", "share": 9.52}, {"episode": 18, "date": "25.12.2023", "share": 8.31}, {"episode": 19, "date": "26.12.2023", "share": 8.65}, {"episode": 20, "date": "26.12.2023", "share": 8.82}], "5": [{"episode": 1, "date": "20.01.2025", "share": 7.07}, {"episode": 2, "date": "20.01.2025", "share": 6.3}, {"episode": 3, "date": "21.01.2025", "share": 7.5}, {"episode": 4, "date": "22.01.2025", "share": 6.23}, {"episode": 5, "date": "23.01.2025", "share": 6.66}, {"episode": 6, "date": "27.01.2025", "share": 8.57}, {"episode": 7, "date": "27.01.2025", "share": 8.22}, {"episode": 8, "date": "28.01.2025", "share": 8.85}, {"episode": 9, "date": "28.01.2025", "share": 8.13}, {"episode": 10, "date": "29.01.2025", "share": 7.34}, {"episode": 11, "date": "29.01.2025", "share": 7.43}, {"episode": 12, "date": "30.01.2025", "share": 6.55}, {"episode": 13, "date": "30.01.2025", "share": 6.83}, {"episode": 14, "date": "03.02.2025", "share": 9.33}, {"episode": 15, "date": "03.02.2025", "share": 9.48}, {"episode": 16, "date": "04.02.2025", "share": 7.93}, {"episode": 17, "date": "04.02.2025", "share": 7.12}, {"episode": 18, "date": "05.02.2025", "share": 7.84}, {"episode": 19, "date": "05.02.2025", "share": 8.85}, {"episode": 20, "date": "06.02.2025", "share": 8.45}]};

const weekdayData={"1": [{"day": "пн", "share": 14.11}, {"day": "вт", "share": 14.36}, {"day": "ср", "share": 14.32}, {"day": "чт", "share": 14.01}], "2": [{"day": "пн", "share": 11.11}, {"day": "вт", "share": 10.77}, {"day": "ср", "share": 11.74}, {"day": "чт", "share": 12.56}], "3": [{"day": "пн", "share": 9.09}, {"day": "вт", "share": 9.33}, {"day": "ср", "share": 8.75}, {"day": "чт", "share": 7.88}], "4": [{"day": "пн", "share": 8.66}, {"day": "вт", "share": 12.05}, {"day": "ср", "share": 10.28}, {"day": "чт", "share": 11.43}], "5": [{"day": "пн", "share": 8.16}, {"day": "вт", "share": 8.06}, {"day": "ср", "share": 7.54}, {"day": "чт", "share": 6.68}]};
let current = projects[0];
let showAllCast = false;
const $ = id => document.getElementById(id);

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = $(id);
  if (target) target.classList.add('active');
}

function renderResults(q = '') {
  q = String(q).toLowerCase();
  const list = projects.filter(p => p.title.toLowerCase().includes(q));
  const results = $('results');
  if (!results) return;
  results.innerHTML = list.map(p => `
    <div class="result" onclick="openProject('${p.id}')">
      <div class="thumb" style="background-image:url('${p.posterImage}')"></div>
      <div>
        <h2>${p.title}</h2>
        <div class="muted">${p.genre}</div>
        <div class="muted">${p.info.find(i => i[0] === 'Количество сезонов')[1]} сезонов</div>
      </div>
    </div>
  `).join('') || '<p class="muted">Проекты не найдены</p>';
}

function openProject(id) {
  current = projects.find(p => p.id === id) || projects[0];
  showAllCast = false;
  renderProject();
  show('project');
}

function renderProject() {
  const poster = $('poster');
  if (poster) {
    poster.textContent = '';
    poster.style.backgroundImage = `url('${current.posterImage}')`;
  }
  if ($('title')) $('title').textContent = current.title;
  if ($('status')) $('status').textContent = current.status;
  if ($('genre')) $('genre').textContent = current.genre;
  if ($('info')) $('info').innerHTML = current.info.map(([k, v]) => `<div class="row"><span>${k}</span><span>${v}</span></div>`).join('');
  renderCast();
  if ($('seasons')) $('seasons').innerHTML = current.seasons.map(s => `
    <div class="season">
      <div><b>${s[0]}</b><br><span class="muted">${s[1]}</span></div>
      <div><span class="muted">Период премьеры</span><br>${s[2]}<br><span class="muted">Средняя доля: ${s[3]}%</span></div>
    </div>
  `).join('');
}

function renderCast() {
  const castTable = $('cast');
  if (!castTable) return;
  const castRows = showAllCast ? current.cast : current.cast.slice(0, 3);
  castTable.innerHTML = '<tr><th>Актёр</th><th>Персонаж</th></tr>' +
    castRows.map(([a, c]) => `<tr><td>${a}</td><td>${c}</td></tr>`).join('');
  const btn = $('castToggle');
  if (btn) btn.textContent = showAllCast ? 'Скрыть' : 'Показать всех';
}

function toggleCast() {
  showAllCast = !showAllCast;
  renderCast();
}

function analytics() {
  show('analytics');
  renderAnalytics();
}

function heatColor(value, minValue, maxValue) {
  const ratio = (value - minValue) / (maxValue - minValue || 1);
  let h, s, l;
  if (ratio < 0.5) {
    const t = ratio / 0.5;
    h = 230 - t * 45;
    s = 70 + t * 18;
    l = 18 + t * 20;
  } else {
    const t = (ratio - 0.5) / 0.5;
    h = 185 - t * 95;
    s = 88;
    l = 38 + t * 10;
  }
  return `linear-gradient(180deg, hsl(${h}, ${s}%, ${l + 8}%), hsl(${h}, ${s}%, ${l}%))`;
}

function renderAnalytics() {
  renderCompareChart();
  renderSeasonTimeline();
  renderHeatmap();
}

function renderCompareChart() {
  const el = $('compare');
  if (!el) return;
  const colors = [
    'linear-gradient(#00E5FF,#079dbd)',
    'linear-gradient(#4D55FF,#2726D8)',
    'linear-gradient(#A13CFF,#6A15DB)',
    'linear-gradient(#00B4FF,#0058D8)',
    'linear-gradient(#D34CFF,#7D1BE0)'
  ];
  const maxCompare = Math.max(...current.compare);
  el.innerHTML = current.compare.map((v, i) => `
    <div class="big">
      <b>${String(v).replace('.', ',')}%</b>
      <div style="height:${v / maxCompare * 112}px;background:${colors[i]}"></div>
      <span>Сезон ${i + 1}</span>
    </div>
  `).join('');
}

function renderSeasonTimeline() {
  const selector = $('timelineSeasonSelect');
  const container = $('seasonTimelineChart');
  if (!selector || !container) return;
  const season = selector.value || '1';
 const mode=(document.getElementById('timelineModeSelect')||{value:'dates'}).value;
 if(mode==='weekday'){
   const d=weekdayData[season]||[];
   const max=Math.max(...d.map(x=>x.share));
   container.style.overflowX='hidden';

   const w = 360;
   const h = 235;
   const baseY = 190;
   const plotH = 135;
   const barW = 42;
   const step = 72;
   const startX = 34;

   container.innerHTML=`<svg class='weekdaySvg' viewBox='0 0 ${w} ${h}' preserveAspectRatio='none'>
     <line x1='18' y1='${baseY}' x2='342' y2='${baseY}' stroke='rgba(255,255,255,.22)' stroke-width='1'/>
     ${d.map((r,i)=>{
       const barH = Math.max(8, r.share/max*plotH);
       const x = startX+i*step;
       const y = baseY-barH;
       return `<text x='${x+barW/2}' y='${y-8}' font-size='12' font-weight='700' text-anchor='middle' fill='white'>${String(r.share).replace('.', ',')}</text>
       <rect x='${x}' y='${y}' width='${barW}' height='${barH}' rx='7' fill='#00E5FF'/>
       <text x='${x+barW/2}' y='215' font-size='12' text-anchor='middle' fill='#A7A9C2'>${r.day}</text>`;
     }).join('')}
   </svg>`;
   return;
 }
 container.style.overflowX='auto';
  const data = seasonTimelineData[season] || [];
  if (!data.length) {
    container.innerHTML = '<div class="muted">Нет данных</div>';
    return;
  }

  const width = Math.max(640, data.length * 34);
  const height = 235;
  const left = 34;
  const right = 12;
  const top = 18;
  const bottom = 52;
  const plotW = width - left - right;
  const plotH = height - top - bottom;
  const shares = data.map(d => d.share);
  const min = Math.floor(Math.min(...shares) - 1);
  const max = Math.ceil(Math.max(...shares) + 1);
  const range = max - min || 1;
  const avg = shares.reduce((a, b) => a + b, 0) / shares.length;

  const x = i => left + (data.length === 1 ? 0 : i * (plotW / (data.length - 1)));
  const y = v => top + (max - v) * (plotH / range);

  const points = data.map((d, i) => `${x(i)},${y(d.share)}`).join(' ');
  const avgY = y(avg);

  const yTicks = [min, Math.round((min + max) / 2), max];
  const grid = yTicks.map(t => `
    <line class="timelineGrid" x1="${left}" y1="${y(t)}" x2="${left + plotW}" y2="${y(t)}"></line>
    <text class="timelineLabel" x="4" y="${y(t) + 3}">${String(t).replace('.', ',')}%</text>
  `).join('');

  const dateLabels = data.map((d, i) => {
    const showLabel = i === 0 || i === data.length - 1 || i % 3 === 0;
    if (!showLabel) return '';
    return `<text class="timelineLabel" x="${x(i)-12}" y="${height-25}" transform="rotate(-45 ${x(i)-12} ${height-25})">${d.date.slice(0,5)}</text>`;
  }).join('');

  const circles = data.map((d, i) => `
    <circle class="timelinePoint" cx="${x(i)}" cy="${y(d.share)}" r="2.2">
      <title>Серия: ${d.episode} | Дата: ${d.date} | Доля: ${String(d.share).replace('.', ',')}%</title>
    </circle>
  `).join('');

  container.innerHTML = `
    <svg class="timelineSvg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
      ${grid}
      <line class="timelineAxis" x1="${left}" y1="${top + plotH}" x2="${left + plotW}" y2="${top + plotH}"></line>
      <line class="timelineAverage" x1="${left}" y1="${avgY}" x2="${left + plotW}" y2="${avgY}"></line>
      <text class="timelineAvgLabel" x="${left + plotW - 72}" y="${avgY - 5}">доля сезона ${String(avg.toFixed(1)).replace('.', ',')}%</text>
      <polyline class="timelineLine" points="${points}"></polyline>
      ${circles}
      ${dateLabels}
    </svg>
  `;
}

function renderHeatmap() {
  const heat = $('heat');
  if (!heat) return;
  const rows = [
    [1,14.8,11.33,7.56,9.2,7.07],
    [2,16.1,12.54,9.57,8.9,6.30],
    [3,13.7,12.76,7.35,7.6,7.50],
    [4,14.9,12.77,6.94,8.8,6.23],
    [5,13.9,12.55,6.04,13.1,6.66],
    [6,15.2,11.55,9.30,13.5,8.57],
    [7,11.1,11.08,9.77,14.2,8.22],
    [8,14.2,12.94,9.11,11.0,8.85],
    [9,13.1,12.10,7.62,11.6,8.13],
    [10,13.2,9.81,8.98,12.0,7.34],
    [11,14.4,10.23,9.94,11.4,7.43],
    [12,15.0,10.25,9.03,12.6,6.55],
    [13,14.9,10.56,7.92,12.1,6.83],
    [14,13.8,10.39,8.99,9.1,9.33],
    [15,15.1,12.60,9.87,10.8,9.48],
    [16,15.8,8.83,9.17,9.1,7.93],
    [17,12.3,12.09,9.93,9.5,7.12],
    [18,13.7,7.21,10.14,8.3,7.84],
    [19,15.0,9.06,9.71,8.6,8.85],
    [20,19.0,9.48,7.61,8.8,8.45]
  ];
  const values = rows.flatMap(r => r.slice(1));
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const tooltips = {
    "1-5": "Купцы и дети. 1 сезон 7,07",
    "2-5": "Девушки с Макаровым. 5 сезон 6,3",
    "3-5": "Девушки с Макаровым. 5 сезон 7,5",
    "4-5": "Девушки с Макаровым. 5 сезон 6,23",
    "5-5": "Девушки с Макаровым. 5 сезон 6,66"
  };

  function cell(value, index, rowNumber) {
    if (index === 0) return `<td>${value}</td>`;
    const ratio = (value - minValue) / (maxValue - minValue || 1);
    const cls = ratio < 0.25 ? 'low' : ratio > 0.75 ? 'hot' : '';
    const key = `${rowNumber}-${index}`;
    const tooltip = tooltips[key] || `Сезон ${index}, серия ${rowNumber}: ${String(value).replace('.', ',')}`;
    const safeTooltip = tooltip.replace(/"/g, '&quot;');
    return `<td class="${cls} heatCell" data-value="${value}" data-tooltip="${safeTooltip}" title="${safeTooltip}" style="background:${heatColor(value, minValue, maxValue)}">${String(value).replace('.', ',')}</td>`;
  }

  heat.innerHTML =
    '<tr><th>Серия</th><th>Сезон 1</th><th>Сезон 2</th><th>Сезон 3</th><th>Сезон 4</th><th>Сезон 5</th></tr>' +
    rows.map(r => `<tr>${r.map((v, i) => cell(v, i, r[0])).join('')}</tr>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const q = $('q');
  const q2 = $('q2');
  if (q) q.oninput = e => renderResults(e.target.value);
  if (q2) q2.oninput = e => {
    show('search');
    if (q) q.value = e.target.value;
    renderResults(e.target.value);
  };
  renderResults();
  renderProject();
});
