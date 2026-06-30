
const projects = [{"id": "makarov", "title": "Девушки с Макаровым", "status": "В эфире", "genre": "Комедия • 16+", "posterImage": "makarov_poster.webp", "info": [["Студия", "Norm Production по заказу Comedy Club Production"], ["Дата старта", "09.03.2021"], ["Дата окончания", "06.02.2025"], ["Длительность выпуска", "30 мин"], ["Количество сезонов", "5"], ["Количество выпусков", "100"], ["Рейтинг Кинопоиск", "8,5"]], "cast": [["Павел Майков", "Павел Макаров"], ["Алевтина Тукан", "Анна Туркина"], ["Валерия Астапова", "Екатерина Синицкая"], ["Влада Ермолаева", "Александра Попова"], ["Елена Полянская", "Олеся Верба"], ["Олеся Судзиловская", "Ольга Романова"], ["Георгий Дронов", "Роман Жилин"]], "seasons": [["Сезон 1", "20 эпизодов", "09.03.2021 — 01.04.2021", "14,6"], ["Сезон 2", "20 эпизодов", "31.01.2022 — 02.03.2022", "11,0"], ["Сезон 3", "20 эпизодов", "24.10.2022 — 23.11.2022", "8,7"], ["Сезон 4", "20 эпизодов", "11.12.2023 — 26.12.2023", "10,5"], ["Сезон 5", "20 эпизодов", "20.01.2025 — 06.02.2025", "7,8"]], "compare": [14.6, 11.0, 8.7, 10.5, 7.8]}];
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
      <div><span class="muted">Период премьеры</span><br>${s[2]}<br><span class="seasonAvgLabel">Средняя доля:</span> <span class="seasonAvgValue">${s[3]}%</span></div>
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
  reorderAnalyticsCards();
  renderAnalytics();
}

function reorderAnalyticsCards() {
  const analyticsScreen = document.getElementById('analytics');
  const compareCard = document.getElementById('compareCard');
  const heatCard = document.getElementById('heatCard');
  const timelineCard = document.getElementById('timelineCard');
  if (!analyticsScreen || !compareCard || !heatCard || !timelineCard) return;
  compareCard.insertAdjacentElement('afterend', heatCard);
  heatCard.insertAdjacentElement('afterend', timelineCard);
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
  const maxCompare = Math.max(...current.compare);
  const blue = 'linear-gradient(180deg,#19C8FF 0%,#0096E6 48%,#0069C9 100%)';
  const gold = 'linear-gradient(180deg,#FFE1A0 0%,#F6C65F 42%,#B87317 100%)';
  el.innerHTML = current.compare.map((v, i) => {
    const isMax = v === maxCompare;
    return `
      <div class="big ${isMax ? 'maxSeason' : ''}">
        <b>${String(v).replace('.', ',')}%</b>
        <div class="compareBar" style="height:${v / maxCompare * 112}px;background:${isMax ? gold : blue}"></div>
        <span>Сезон ${i + 1}</span>
      </div>
    `;
  }).join('');
}

function renderSeasonTimeline() {
  const selector = $('timelineSeasonSelect');
  const container = $('seasonTimelineChart');
  if (!selector || !container) return;
  const season = selector.value || '1';
 const mode=(document.getElementById('timelineModeSelect')||{value:'dates'}).value;
 if(mode==='weekday'){
   document.querySelectorAll('.timelineFakeScroll').forEach(el => el.remove());
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
 document.querySelectorAll('.timelineFakeScroll').forEach(el => el.remove());
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
  const seasonAverage = {1:14.6,2:11.0,3:8.7,4:10.5,5:7.8};
  const avg = seasonAverage[season] || (shares.reduce((a,b)=>a+b,0)/shares.length);

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

  const fake = document.createElement('div');
  fake.className = 'timelineFakeScroll';
  fake.innerHTML = '<div class="timelineFakeThumb"></div>';
  container.insertAdjacentElement('afterend', fake);

  const oldFakeBars = [...document.querySelectorAll('.timelineFakeScroll')];
  oldFakeBars.slice(0, -1).forEach(el => el.remove());

  const thumb = fake.querySelector('.timelineFakeThumb');
  const updateThumb = () => {
    const ratio = container.clientWidth / Math.max(container.scrollWidth, 1);
    const thumbW = Math.max(54, fake.clientWidth * ratio);
    const maxLeft = Math.max(0, fake.clientWidth - thumbW);
    const leftPos = maxLeft * (container.scrollLeft / Math.max(container.scrollWidth - container.clientWidth, 1));
    thumb.style.width = thumbW + 'px';
    thumb.style.transform = `translateX(${leftPos}px)`;
  };
  container.addEventListener('scroll', updateThumb);
  requestAnimationFrame(updateThumb);
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

  function cell(value, index, rowNumber) {
    if (index === 0) return `<td>${value}</td>`;
    const ratio = (value - minValue) / (maxValue - minValue || 1);
    const cls = ratio < 0.25 ? 'low' : ratio > 0.75 ? 'hot' : '';
    const isEnvironmentCell = rowNumber === 1 && index === 5;
    const clickAttr = isEnvironmentCell ? ' onclick="openEnvironment()" role="button" aria-label="Открыть окружение для 1 серии 5 сезона"' : '';
    const extraCls = isEnvironmentCell ? ' environmentTrigger' : '';
    return `<td class="${cls} heatCell${extraCls}" data-value="${value}"${clickAttr} style="background:${heatColor(value, minValue, maxValue)}">${String(value).replace('.', ',')}</td>`;
  }

  heat.innerHTML =
    '<tr><th>Серия</th><th>Сезон 1</th><th>Сезон 2</th><th>Сезон 3</th><th>Сезон 4</th><th>Сезон 5</th></tr>' +
    rows.map(r => `<tr>${r.map((v, i) => cell(v, i, r[0])).join('')}</tr>`).join('');
}


const environmentPrograms = {
  tnt: [
    { start: "19:34:34", end: "20:02:09", title: "Полярный 4", share: 8.38, highlight: false },
    { start: "20:02:09", end: "20:24:57", title: "Купцы и дети", share: 8.82, highlight: false },
    { start: "20:24:57", end: "20:57:28", title: "Купцы и дети", share: 7.64, highlight: false },
    { start: "20:57:28", end: "21:30:00", title: "Девушки с Макаровым", share: 7.07, highlight: true }
  ],
  ctc: [
    { start: "19:21:55", end: "20:58:29", title: "Уральские пельмени", share: 7.17, highlight: false },
    { start: "20:58:29", end: "22:00:00", title: "Робин Гуд или младенец на 30 000 000$", share: 8.58, highlight: false }
  ]
};

function openEnvironment() {
  show('environment');
  renderEnvironmentChart();
}

function timeToMinutes(t) {
  const parts = t.split(':').map(Number);
  return parts[0] * 60 + parts[1] + (parts[2] || 0) / 60;
}

function formatShare(v) {
  return String(v.toFixed(2)).replace('.', ',') + '%';
}

function renderEnvironmentChart() {
  const chart = $('environmentChart');
  if (!chart) return;

  const startMin = timeToMinutes("19:00:00");
  const endMin = timeToMinutes("22:00:00");
  const totalMin = endMin - startMin;

  const w = 360;
  const h = 640;
  const left = 32;
  const right = 8;
  const top = 88;
  const bottom = 20;
  const plotH = h - top - bottom;
  const gap = 8;
  const colW = (w - left - right - gap) / 2;
  const tntX = left;
  const ctcX = left + colW + gap;
  const maxShare = 10;

  const y = t => top + (timeToMinutes(t) - startMin) * (plotH / totalMin);

  const timeTicks = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
  const tickLines = timeTicks.map(t => {
    const yy = y(t + ":00");
    return `
      <line x1="${left - 6}" y1="${yy}" x2="${w - right}" y2="${yy}" class="epgGrid"></line>
      <text x="2" y="${yy + 5}" class="epgTime">${t}</text>
    `;
  }).join('');

  function wrapTitle(title, maxChars = 18) {
    const words = title.split(' ');
    const lines = [];
    let line = '';
    words.forEach(word => {
      const next = line ? line + ' ' + word : word;
      if (next.length > maxChars && line) {
        lines.push(line);
        line = word;
      } else {
        line = next;
      }
    });
    if (line) lines.push(line);
    return lines.slice(0, 3);
  }

  function programBlock(p, x) {
    const yy = y(p.start);
    const hh = Math.max(26, (timeToMinutes(p.end) - timeToMinutes(p.start)) * (plotH / totalMin));
    const isMakarov = p.highlight;
    const fill = isMakarov ? "url(#epgGold)" : "url(#epgBlue)";
    const stroke = isMakarov ? "#F6C65F" : "#00AEEF";
    const barColor = isMakarov ? "#F6C65F" : "#13B9FF";
    const textColor = isMakarov ? "#FFE3A3" : "#FFFFFF";

    const chartMin = 5.0;
    const chartMax = 9.0;
    const normalized = Math.max(0.04, Math.min(1, (p.share - chartMin) / (chartMax - chartMin)));
    const maxBarW = colW - 58;
    const shareW = Math.max(20, normalized * maxBarW);

    const titleLines = wrapTitle(p.title, 18);
    const titleSvg = titleLines.map((line, i) =>
      `<tspan x="${x + 10}" dy="${i === 0 ? 0 : 13}">${line}</tspan>`
    ).join('');

    const titleY = yy + 43;
    const barY = Math.min(yy + hh - 22, titleY + 10 + titleLines.length * 13);
    const value = formatShare(p.share);

    return `
      <g class="epgProgram">
        <rect x="${x}" y="${yy}" width="${colW}" height="${hh}" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="1.2"></rect>
        <text x="${x + 10}" y="${yy + 20}" class="epgStart">${p.start}</text>
        <text x="${x + 10}" y="${titleY}" class="epgTitle" fill="${textColor}">${titleSvg}</text>
        <rect x="${x + 10}" y="${barY}" width="${maxBarW}" height="11" rx="3" class="epgBarBg"></rect>
        <rect x="${x + 10}" y="${barY}" width="${shareW}" height="11" rx="3" fill="${barColor}"></rect>
        <text x="${x + colW - 8}" y="${barY + 10}" text-anchor="end" class="${isMakarov ? 'epgShareGold' : 'epgShare'}">${value}</text>
      </g>
    `;
  }

  chart.innerHTML = `
    <svg class="epgSvg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <defs>
        <linearGradient id="epgBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(0,102,190,.88)"/>
          <stop offset="100%" stop-color="rgba(0,46,102,.90)"/>
        </linearGradient>
        <linearGradient id="epgGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(246,198,95,.86)"/>
          <stop offset="100%" stop-color="rgba(142,93,0,.88)"/>
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="16" class="epgOuter"></rect>
      <image href="tnt_logo.png" x="${tntX + colW/2 - 27}" y="10" width="54" height="30" preserveAspectRatio="none"></image>\n      <text x="${tntX + colW/2}" y="56" text-anchor="middle" class="epgChannelTitle">среднее за день 5,90</text>
      <image href="ctc_logo.png" x="${ctcX + colW/2 - 27}" y="10" width="54" height="30" preserveAspectRatio="none"></image>\n      <text x="${ctcX + colW/2}" y="56" text-anchor="middle" class="epgChannelTitle">среднее за день 7,80</text>
      ${tickLines}
      <line x1="${left - 6}" y1="${top}" x2="${left - 6}" y2="${h - bottom}" class="epgAxis"></line>
      <line x1="${ctcX - gap / 2}" y1="${top - 8}" x2="${ctcX - gap / 2}" y2="${h - bottom}" class="epgDivider"></line>
      ${environmentPrograms.tnt.map(p => programBlock(p, tntX)).join('')}
      ${environmentPrograms.ctc.map(p => programBlock(p, ctcX)).join('')}
    </svg>
  `;
}


const rightsData = {
  base: {
    partner: "Comedy Club Production",
    contract: "Д475897",
    deal: "Покупка",
    start: "11.12.2024",
    end: "10.12.2094",
    territory: "Весь мир",
    rights: ["ALL"],
    sale: "Да",
    sublicensing: "ALL"
  },
  partners: [
    {
      name: "ТНТ",
      type: "Продажа",
      contract: "Д4214323",
      start: "01.01.2025",
      end: "30.01.2028",
      territory: "Россия / Весь мир без России",
      channel: "ТНТ",
      rights: ["Catch Up", "Simulcast", "ТВ free"],
      sale: "Да",
      sublicensing: "ALL",
      note: "Доведение трансляции телеканала, воспроизведение, публичный показ"
    },
    {
      name: "Премьер",
      type: "Продажа",
      contract: "Д4217821",
      start: "20.01.2025",
      end: "19.01.2031",
      territory: "Россия + СНГ",
      channel: "PREMIER",
      rights: ["AVOD", "SVOD", "TVOD", "EST", "FVOD"],
      sale: "Да",
      sublicensing: "Кинопоиск / партнёры",
      note: "Онлайн-права, подписка и разовая покупка"
    },
    {
      name: "Кинопоиск",
      type: "Продажа",
      contract: "Д4219154",
      start: "20.01.2025",
      end: "20.01.2031",
      territory: "СНГ+",
      channel: "Кинопоиск",
      rights: ["AVOD", "SVOD", "TVOD", "EST", "FVOD"],
      sale: "Да",
      sublicensing: "ALL",
      note: "Платформенные права и партнёрское размещение"
    },
    {
      name: "Дружба Мьюзик",
      type: "Продажа",
      contract: "Д4218062",
      start: "20.01.2025",
      end: "29.01.2028",
      territory: "Весь мир, кроме России и Украины",
      channel: "INT_TNT4 · TNT int",
      rights: ["Catch Up", "Simulcast", "OTT", "ТВ free", "TV pay"],
      sale: "Да",
      sublicensing: "ALL",
      note: "Международное вещание"
    }
  ],
  geo: ["Весь мир", "Россия", "Весь мир без России", "Без России и Украины", "СНГ+", "Грузия", "Армения", "Беларусь", "Казахстан"],
  types: ["ALL", "ТВ free", "TV pay", "Catch Up", "Simulcast", "OTT", "AVOD", "SVOD", "TVOD", "EST", "FVOD"]
};

function rights() {
  show('rights');
  renderRights();
}

function rightsEndYear(dateStr) {
  const parts = String(dateStr).split('.');
  return Number(parts[2]) || 2031;
}

function renderRights() {
  renderRightsPartners();
  renderRightsFlow();
  renderRightsMatrix();
  renderRightsTerritoryMap();
}

function renderRightsTimeline() {
  const el = $('rightsTimeline');
  if (!el) return;
  const rows = [
    {name: 'Покупка', end: rightsData.base.end, gold: true},
    ...rightsData.partners.map(p => ({name: p.name, end: p.end, gold: false}))
  ];
  const minYear = 2025;
  const maxYear = 2094;
  el.innerHTML = rows.map(r => {
    const endYear = rightsEndYear(r.end);
    const width = Math.max(10, Math.min(100, ((endYear - minYear) / (maxYear - minYear)) * 100));
    return `
      <div class="rightsTimelineRow">
        <div class="rightsTimelineName">${r.name}</div>
        <div class="rightsTimelineTrack">
          <div class="rightsTimelineBar ${r.gold ? 'gold' : ''}" style="width:${width}%"></div>
        </div>
        <div class="rightsTimelineEnd">${endYear}</div>
      </div>
    `;
  }).join('');
}

function renderRightsPartners() {
  const wrap = $('rightsPartners');
  const counter = $('rightsCounter');
  if (!wrap) return;
  if (counter) counter.textContent = `${rightsData.partners.length} контрагента`;
  wrap.innerHTML = rightsData.partners.map((p, idx) => `
    <details class="rightsPartner" ${idx === 0 ? 'open' : ''}>
      <summary>
        <div>
          <b>${p.name}</b>
          <span>${p.start} — ${p.end}</span>
        </div>
        <em>${p.type}</em>
      </summary>
      <div class="rightsPartnerBody">
        <div class="rightsMiniGrid">
          <div><span>Территория</span><b>${p.territory}</b></div>
          <div><span>Канал / сервис</span><b>${p.channel}</b></div>
          <div><span>Продажа</span><b>${p.sale}</b></div>
          <div><span>Сублицензирование</span><b>${p.sublicensing}</b></div>
        </div>
        <div class="partnerRightsLine"><span>Права</span><b>${p.rights.join(" · ")}</b></div>
        <p>${p.note}</p>
      </div>
    </details>
  `).join('');
}


function renderRightsFlow() {
  const el = $('rightsFlow');
  if (!el) return;
  el.innerHTML = `
    <div class="rightsFlow">
      <div class="flowNode source">
        <span>Правообладатель</span>
        <b>Comedy Club Production</b>
        <em>Покупка · весь мир · до 2094</em>
      </div>
      <div class="flowArrow">↓</div>
      <div class="flowNode projectNode">
        <span>Проект</span>
        <b>Девушки с Макаровым · 5 сезон</b>
        <em>Базовый пакет прав</em>
      </div>
      <div class="flowBranches">
        ${rightsData.partners.map(p => `
          <div class="flowBranch">
            <div class="branchLine"></div>
            <div class="flowNode recipient">
              <b>${p.name}</b>
              <span>${p.end}</span>
              <em>${p.rights.slice(0,3).join(' · ')}</em>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderRightsMatrix() {
  const el = $('rightsMatrix');
  if (!el) return;
  const columns = ["ТВ", "Catch Up", "Simulcast", "AVOD", "SVOD", "TVOD", "EST"];
  const hasRight = (p, col) => {
    if (col === "ТВ") return p.rights.some(x => String(x).toLowerCase().includes('тв') || String(x).toLowerCase().includes('tv pay') || String(x).toLowerCase().includes('tv free'));
    return p.rights.includes(col);
  };
  el.innerHTML = `
    <div class="rightsMatrix">
      <div class="matrixHeader matrixPartner">Контрагент</div>
      ${columns.map(c => `<div class="matrixHeader">${c}</div>`).join('')}
      ${rightsData.partners.map(p => `
        <div class="matrixPartner">${p.name}</div>
        ${columns.map(c => `<div class="${hasRight(p,c) ? 'matrixYes' : 'matrixNo'}">${hasRight(p,c) ? '●' : '—'}</div>`).join('')}
      `).join('')}
    </div>
  `;
}

function renderRightsTerritoryMap() {
  const el = $('rightsTerritoryMap');
  if (!el) return;
  const rows = [
    {title:"Весь мир", text:"Базовые права / ALL", value:100, gold:true},
    {title:"Россия", text:"ТНТ, Премьер", value:72},
    {title:"СНГ+", text:"Премьер, Кинопоиск", value:58},
    {title:"Без РФ и Украины", text:"Дружба Мьюзик / международные каналы", value:46}
  ];
  el.innerHTML = `
    <div class="territoryMap">
      ${rows.map(r => `
        <div class="territoryRow">
          <div class="territoryInfo">
            <b>${r.title}</b>
            <span>${r.text}</span>
          </div>
          <div class="territoryScale"><div class="${r.gold ? 'gold' : ''}" style="width:${r.value}%"></div></div>
        </div>
      `).join('')}
    </div>
  `;
}


function renderRightsChips() {
  const types = $('rightsTypes');
  const geo = $('rightsGeo');
  if (types) types.innerHTML = rightsData.types.map(x => `<span>${x}</span>`).join('');
  if (geo) geo.innerHTML = rightsData.geo.map(x => `<span>${x}</span>`).join('');
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
  reorderAnalyticsCards();
  renderRights();
});


/* v55: redesigned rights view with season filter and corrected rights scheme */
const rightsBySeason = {
  "1": null,
  "2": null,
  "3": null,
  "4": null,
  "5": {
    seasonLabel: "Сезон 5",
    owner: {
      over: "Правообладатель",
      title: "Comedy Club Production",
      open: "",
      meta: ""
    },
    hub: {
      over: "Держатель прав",
      title: "ООО «ГПМ РТВ»",
      open: "11.12.2024",
      meta: "Базовый пакет прав на 5 сезон"
    },
    branches: [
      {
        over: "Продажа от ГПМ РТВ",
        title: "ТНТ",
        open: "01.01.2025",
        meta: "Россия / мир без России · Catch Up · Simulcast · ТВ free"
      },
      {
        over: "Продажа от ГПМ РТВ",
        title: "Премьер",
        open: "20.01.2025",
        meta: "AVOD · FVOD · SVOD · TVOD · EST · до 19.01.2031",
        child: {
          over: "Сублицензия / продажа",
          title: "Кинопоиск",
          open: "20.01.2025",
          meta: "через Премьер · AVOD · FVOD · SVOD · TVOD · EST"
        }
      },
      {
        over: "Продажа от ГПМ РТВ",
        title: "Дружба Мьюзик",
        open: "20.01.2025",
        meta: "международные каналы · INT_TNT4 · THTint · до 05.02.2028"
      }
    ],
    matrixRows: [
      {name:"ТНТ", rights:["TV","Catch Up","Simulcast"]},
      {name:"Премьер", rights:["AVOD","SVOD","TVOD","EST"]},
      {name:"Кинопоиск", rights:["AVOD","SVOD","TVOD","EST"]},
      {name:"Дружба Мьюзик", rights:["TV","Catch Up","Simulcast"]}
    ],
    territories: [
      {title:"Весь мир", text:"базовое владение / ALL", value:100, gold:true},
      {title:"Россия", text:"ТНТ · линейное ТВ и catch up", value:58},
      {title:"СНГ+", text:"Премьер и Кинопоиск / цифровые права", value:72},
      {title:"Международно", text:"Дружба Мьюзик / INT_TNT4 · THTint", value:44}
    ]
  }
};

function getSelectedRightsData(){
  const sel = $('rightsSeasonSelect');
  const season = sel ? sel.value : '5';
  return rightsBySeason[season] || null;
}

function rights() {
  show('rights');
  const sel = $('rightsSeasonSelect');
  if (sel && !sel.value) sel.value = '5';
  renderRights();
}

function renderRights() {
  const data = getSelectedRightsData();
  renderRightsFlowRedesign(data);
  renderRightsMatrixRedesign(data);
  renderRightsTerritoryMapRedesign(data);
}

function renderRightsFlowRedesign(data){
  const el = $('rightsFlow');
  if (!el) return;
  if (!data){
    el.innerHTML = '<div class="noRightsBlock">Для выбранного сезона права пока не загружены.</div>';
    return;
  }
  const tnt = data.branches[0];
  const premier = data.branches[1];
  const druzhba = data.branches[2];
  el.innerHTML = `
    <div class="rightsScheme">
      <div class="schemeNode source">
        <span class="nodeOver">${data.owner.over}</span>
        <span class="nodeTitle">${data.owner.title}</span>
        ${data.owner.open ? `<span class="nodeDate">Открытие прав: ${data.owner.open}</span>` : ''}
        ${data.owner.meta ? `<span class="nodeMeta">${data.owner.meta}</span>` : ''}
      </div>
      <div class="schemeConnector"></div>
      <div class="schemeNode hub">
        <span class="nodeOver">${data.hub.over}</span>
        <span class="nodeTitle">${data.hub.title}</span>
        ${data.hub.open ? `<span class="nodeDate">Открытие прав: ${data.hub.open}</span>` : ''}
        ${data.hub.meta ? `<span class="nodeMeta">${data.hub.meta}</span>` : ''}
      </div>
      <div class="schemeConnector"></div>
      <div class="schemeGrid">
        <div class="schemeCol">
          <div class="schemeNode primary">
            <span class="nodeOver">${tnt.over}</span>
            <span class="nodeTitle">${tnt.title}</span>
            ${tnt.open ? `<span class="nodeDate">Открытие прав: ${tnt.open}</span>` : ``}
            ${tnt.meta ? `<span class="nodeMeta">${tnt.meta}</span>` : ``}
          </div>
        </div>
        <div class="schemeCol">
          <div class="schemeNode primary">
            <span class="nodeOver">${premier.over}</span>
            <span class="nodeTitle">${premier.title}</span>
            ${premier.open ? `<span class="nodeDate">Открытие прав: ${premier.open}</span>` : ``}
            ${premier.meta ? `<span class="nodeMeta">${premier.meta}</span>` : ``}
          </div>
          <div class="schemeSubLink">
            <div class="schemeNode secondary">
              <span class="nodeOver">${premier.child.over}</span>
              <span class="nodeTitle">${premier.child.title}</span>
              ${premier.child.open ? `<span class="nodeDate">Открытие прав: ${premier.child.open}</span>` : ``}
              ${premier.child.meta ? `<span class="nodeMeta">${premier.child.meta}</span>` : ``}
            </div>
          </div>
        </div>
        <div class="schemeCol full">
          <div class="schemeNode primary">
            <span class="nodeOver">${druzhba.over}</span>
            <span class="nodeTitle">${druzhba.title}</span>
            ${druzhba.open ? `<span class="nodeDate">Открытие прав: ${druzhba.open}</span>` : ``}
            ${druzhba.meta ? `<span class="nodeMeta">${druzhba.meta}</span>` : ``}
          </div>
        </div>
      </div>
    </div>`;
}

function renderRightsMatrixRedesign(data){
  const el = $('rightsMatrix');
  if (!el) return;
  if (!data){
    el.innerHTML = '<div class="noRightsBlock">Нет данных для матрицы прав по выбранному сезону.</div>';
    return;
  }
  const columns = [
    {key:'TV', label:'ТВ'},
    {key:'Catch Up', label:'Catch Up'},
    {key:'Simulcast', label:'Simulcast'},
    {key:'AVOD', label:'AVOD'},
    {key:'SVOD', label:'SVOD'},
    {key:'TVOD', label:'TVOD'},
    {key:'EST', label:'EST'}
  ];
  const rows = data.matrixRowsDetailed || data.matrixRows || [];
  const hasRight = (row, key) => (row.rights || []).includes(key);
  el.innerHTML = `
    <div class="rightsMatrix byPeriod">
      <div class="matrixHeader matrixPartnerWide">Контрагент / срок</div>
      ${columns.map(c => `<div class="matrixHeader">${c.label}</div>`).join('')}
      ${rows.map(row => `
        <div class="matrixPartnerWide">
          <b>${row.name}</b>
          ${row.subtitle ? `<span>${row.subtitle}</span>` : ''}
          ${row.period ? `<span>${row.period}</span>` : ''}
          ${row.contract ? `<em>${row.contract}</em>` : ''}
        </div>
        ${columns.map(c => `<div class="matrixCell ${hasRight(row,c.key) ? 'matrixYes' : 'matrixNo'}">${hasRight(row,c.key) ? '●' : '—'}</div>`).join('')}
      `).join('')}
    </div>`;
}

function renderRightsTerritoryMapRedesign(data){
  const el = $('rightsTerritoryMap');
  if (!el) return;
  if (!data){
    el.innerHTML = '<div class="noRightsBlock">Для выбранного сезона география прав не загружена.</div>';
    return;
  }
  el.innerHTML = `
    <div class="territoryMap">
      ${data.territories.map(r => `
        <div class="territoryRow">
          <div class="territoryInfo">
            <b>${r.title}</b>
            <span>${r.text}</span>
          </div>
          <div class="territoryScale"><div class="${r.gold ? 'gold' : ''}" style="width:${r.value}%"></div></div>
        </div>
      `).join('')}
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const rightsSelect = $('rightsSeasonSelect');
  if (rightsSelect) rightsSelect.value = '5';
  renderRights();
});


/* v57: level 2 rights detail by contractor click */
let selectedRightsEntity = null;

const rightsDetailsBySeason = {
  "5": {
    owner: {
      title: "Comedy Club Production",
      role: "Правообладатель",
      dealType: "Покупка исходных прав",
      contract: "Д475897",
      openDate: "11.12.2024",
      period: "11.12.2024 — 10.12.2094",
      territory: "Весь мир",
      platform: "Не ограничено платформой",
      rights: ["ALL"],
      sale: "Передача прав в ГПМ РТВ",
      sublicensing: "ALL",
      comments: "Исходный пакет прав на 5 сезон. Используется как верхний уровень цепочки прав."
    },
    gpm: {
      title: "ООО «ГПМ РТВ»",
      role: "Держатель прав",
      dealType: "Внутренний держатель / получатель базового пакета",
      contract: "Д475897",
      openDate: "11.12.2024",
      period: "11.12.2024 — 10.12.2094",
      territory: "Весь мир",
      platform: "ГПМ РТВ",
      rights: ["ALL"],
      sale: "Разрешена дальнейшая продажа / передача",
      sublicensing: "ALL",
      comments: "От этого узла строятся дальнейшие продажи и передачи прав контрагентам."
    },
    tnt: {
      title: "ТНТ",
      role: "Получатель прав от ГПМ РТВ",
      dealType: "Продажа / передача прав",
      contract: "Д4214323",
      openDate: "01.01.2025",
      period: "01.01.2025 — 30.01.2028",
      territory: "Россия / Весь мир без России",
      platform: "Телеканал ТНТ",
      rights: ["ТВ free", "Catch Up", "Simulcast", "доведение трансляции телеканала", "воспроизведение", "публичный показ"],
      sale: "Да",
      sublicensing: "ALL",
      comments: "Линейное вещание и связанные права для телеканала. В схеме отражено как прямая передача от ГПМ РТВ."
    },
    premier: {
      title: "Премьер",
      role: "Получатель цифровых прав от ГПМ РТВ",
      dealType: "Продажа / передача цифровых прав",
      contract: "Д4217821",
      openDate: "20.01.2025",
      period: "20.01.2025 — 19.01.2031",
      territory: "Россия + СНГ / партнёрские территории",
      platform: "PREMIER",
      rights: ["AVOD", "FVOD", "SVOD", "TVOD", "EST"],
      sale: "Да",
      sublicensing: "Кинопоиск / партнёры",
      comments: "Ключевой цифровой пакет. От Премьера в схеме отдельно показана передача прав Кинопоиску."
    },
    kinopoisk: {
      title: "Кинопоиск",
      role: "Получатель прав через Премьер",
      dealType: "Сублицензия / партнёрская передача",
      contract: "Д4219154",
      openDate: "20.01.2025",
      period: "20.01.2025 — 20.01.2031",
      territory: "СНГ+ / партнёрские территории",
      platform: "Кинопоиск",
      rights: ["AVOD", "FVOD", "SVOD", "TVOD", "EST"],
      sale: "Да, через Премьер",
      sublicensing: "В рамках партнёрской передачи",
      comments: "Не прямая ветка от ГПМ РТВ: связь в схеме должна идти от Премьера к Кинопоиску."
    },
    druzhba: {
      title: "Дружба Мьюзик",
      role: "Получатель международных прав от ГПМ РТВ",
      dealType: "Продажа / международная передача",
      contract: "Д4218062",
      openDate: "20.01.2025",
      period: "20.01.2025 — 05.02.2028",
      territory: "Весь мир, кроме России и Украины",
      platform: "INT_TNT4 · THTint · международные каналы",
      rights: ["ТВ free", "TV pay", "Catch Up", "Simulcast", "OTT"],
      sale: "Да",
      sublicensing: "ALL",
      comments: "Международный пакет. Важное исключение по территории: Россия и Украина не входят в переданные права."
    }
  }
};

function getRightsDetailsMap() {
  const sel = $('rightsSeasonSelect');
  const season = sel ? sel.value : '5';
  return rightsDetailsBySeason[season] || {};
}

function rightsNodeClass(id, baseClass) {
  return `${baseClass} clickableRightsNode ${selectedRightsEntity === id ? 'activeRightsNode' : ''}`;
}

function selectRightsEntity(id) {
  selectedRightsEntity = id;
  const data = getSelectedRightsData();
  renderRightsFlowRedesign(data);
  renderRightsDetail();
  const card = $('rightsDetailCard');
  if (card) card.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function renderRights() {
  selectedRightsEntity = null;
  const data = getSelectedRightsData();
  renderRightsFlowRedesign(data);
  renderRightsDetail();
  renderRightsMatrixRedesign(data);
  renderRightsTerritoryMapRedesign(data);
}

function renderRightsFlowRedesign(data){
  const el = $('rightsFlow');
  if (!el) return;
  if (!data){
    el.innerHTML = '<div class="noRightsBlock">Для выбранного сезона права пока не загружены.</div>';
    return;
  }
  const tnt = data.branches[0];
  const premier = data.branches[1];
  const druzhba = data.branches[2];
  el.innerHTML = `
    <div class="rightsScheme">
      <div class="${rightsNodeClass('owner','schemeNode source')}" onclick="selectRightsEntity('owner')">
        <span class="nodeOver">${data.owner.over}</span>
        <span class="nodeTitle">${data.owner.title}</span>
        <span class="nodeDate">Открытие прав: ${data.owner.open}</span>
        <span class="nodeMeta">${data.owner.meta}</span>
      </div>
      <div class="schemeConnector"></div>
      <div class="${rightsNodeClass('gpm','schemeNode hub')}" onclick="selectRightsEntity('gpm')">
        <span class="nodeOver">${data.hub.over}</span>
        <span class="nodeTitle">${data.hub.title}</span>
        <span class="nodeDate">Открытие прав: ${data.hub.open}</span>
        <span class="nodeMeta">${data.hub.meta}</span>
      </div>
      <div class="schemeConnector"></div>
      <div class="schemeGrid">
        <div class="schemeCol">
          <div class="${rightsNodeClass('tnt','schemeNode primary')}" onclick="selectRightsEntity('tnt')">
            <span class="nodeOver">${tnt.over}</span>
            <span class="nodeTitle">${tnt.title}</span>
            ${tnt.open ? `<span class="nodeDate">Открытие прав: ${tnt.open}</span>` : ``}
            ${tnt.meta ? `<span class="nodeMeta">${tnt.meta}</span>` : ``}
          </div>
        </div>
        <div class="schemeCol">
          <div class="${rightsNodeClass('premier','schemeNode primary')}" onclick="selectRightsEntity('premier')">
            <span class="nodeOver">${premier.over}</span>
            <span class="nodeTitle">${premier.title}</span>
            ${premier.open ? `<span class="nodeDate">Открытие прав: ${premier.open}</span>` : ``}
            ${premier.meta ? `<span class="nodeMeta">${premier.meta}</span>` : ``}
          </div>
          <div class="schemeSubLink">
            <div class="${rightsNodeClass('kinopoisk','schemeNode secondary')}" onclick="selectRightsEntity('kinopoisk')">
              <span class="nodeOver">${premier.child.over}</span>
              <span class="nodeTitle">${premier.child.title}</span>
              ${premier.child.open ? `<span class="nodeDate">Открытие прав: ${premier.child.open}</span>` : ``}
              ${premier.child.meta ? `<span class="nodeMeta">${premier.child.meta}</span>` : ``}
            </div>
          </div>
        </div>
        <div class="schemeCol full">
          <div class="${rightsNodeClass('druzhba','schemeNode primary')}" onclick="selectRightsEntity('druzhba')">
            <span class="nodeOver">${druzhba.over}</span>
            <span class="nodeTitle">${druzhba.title}</span>
            ${druzhba.open ? `<span class="nodeDate">Открытие прав: ${druzhba.open}</span>` : ``}
            ${druzhba.meta ? `<span class="nodeMeta">${druzhba.meta}</span>` : ``}
          </div>
        </div>
      </div>
    </div>`;
}

function renderRightsDetail() {
  const card = $('rightsDetailCard');
  const el = $('rightsDetail');
  if (!card || !el) return;
  const detailsMap = getRightsDetailsMap();
  const d = selectedRightsEntity ? detailsMap[selectedRightsEntity] : null;
  if (!d) {
    card.style.display = 'block';
    el.innerHTML = `
      <div class="rightsDetailEmpty">
        <b>Детали сделки</b>
        <span>Нажмите на любой блок схемы, чтобы открыть карточку контрагента.</span>
      </div>
    `;
    return;
  }
  card.style.display = 'block';
  const rows = [
    ['Роль в цепочке', d.role],
    ['Тип сделки', d.dealType],
    ['Договор', d.contract],
    ['Дата открытия прав', d.openDate],
    ['Срок действия', d.period],
    ['Территория', d.territory],
    ['Канал / платформа', d.platform],
    ['Продажа', d.sale],
    ['Сублицензирование', d.sublicensing],
  ];
  el.innerHTML = `
    <div class="rightsDetailHeader">
      <div>
        <span>Карточка контрагента</span>
        <h2>${d.title}</h2>
      </div>
      <button onclick="selectedRightsEntity=null; renderRightsFlowRedesign(getSelectedRightsData()); renderRightsDetail()">×</button>
    </div>
    <div class="rightsDetailGrid">
      ${rows.map(([k,v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}
    </div>
    <div class="rightsDetailSection">
      <span>Все виды прав</span>
      <p>${d.rights.join(' · ')}</p>
    </div>
    <div class="rightsDetailSection warning">
      <span>Комментарии / исключения</span>
      <p>${d.comments}</p>
    </div>
  `;
}


/* v58: remove geography, add rights roadmap, refine detail card */
if (rightsBySeason["5"]) {
  rightsBySeason["5"].branches[2].meta = "2 договора · международные каналы · INT_TNT4 · THTint · до 05.02.2028";
  rightsBySeason["5"].roadmap = [
    {name:"ТНТ", from:2025, to:2028, label:"2025–2028", kind:"tv"},
    {name:"Премьер", from:2025, to:2026, label:"2025–2026", kind:"digital"},
    {name:"Премьер", from:2026, to:2029, label:"2026–2029", kind:"digital"},
    {name:"Премьер", from:2029, to:2031, label:"2029–2031", kind:"digital"},
    {name:"Кинопоиск", from:2025, to:2029, label:"2025–2029", kind:"partner"},
    {name:"Дружба Мьюзик", from:2025, to:2028, label:"2025–2028", kind:"international"},
    {name:"Дружба Мьюзик", from:2025.08, to:2028.1, label:"2025–2028", kind:"international"}
  ];
}

if (rightsDetailsBySeason["5"] && rightsDetailsBySeason["5"].druzhba) {
  rightsDetailsBySeason["5"].druzhba.contract = "Дк218062 / Дк218934";
  rightsDetailsBySeason["5"].druzhba.period = "Дк218062: 20.01.2025 — 29.01.2028; Дк218934: 03.02.2025 — 05.02.2028";
  rightsDetailsBySeason["5"].druzhba.comments = "Международный пакет оформлен двумя договорами. Территориальное исключение одинаковое: Россия и Украина не входят в переданные права.";
}

function renderRights() {
  selectedRightsEntity = null;
  const data = getSelectedRightsData();
  renderRightsFlowRedesign(data);
  renderRightsDetail();
  renderRightsMatrixRedesign(data);
  renderRightsRoadmap(data);
}

function renderRightsDetail() {
  const card = $('rightsDetailCard');
  const el = $('rightsDetail');
  if (!card || !el) return;
  const detailsMap = getRightsDetailsMap();
  const d = selectedRightsEntity ? detailsMap[selectedRightsEntity] : null;
  if (!d) {
    card.style.display = 'block';
    el.innerHTML = `
      <div class="rightsDetailEmpty">
        <b>Детализация прав</b>
        <span>Нажмите на любой блок схемы, чтобы открыть детализацию по правам.</span>
      </div>
    `;
    return;
  }
  card.style.display = 'block';
  const rows = [
    ['Роль в цепочке', d.role],
    ['Договор', d.contract],
    ['Срок действия', d.period],
    ['Территория', d.territory],
    ['Канал / платформа', d.platform],
    ['Продажа', d.sale],
    ['Сублицензирование', d.sublicensing],
  ];
  el.innerHTML = `
    <div class="rightsDetailHeader">
      <div>
        <span>Детализация прав</span>
        <h2>${d.title}</h2>
      </div>
      <button onclick="selectedRightsEntity=null; renderRightsFlowRedesign(getSelectedRightsData()); renderRightsDetail()">×</button>
    </div>
    <div class="rightsDetailGrid">
      ${rows.map(([k,v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}
    </div>
    <div class="rightsDetailSection">
      <span>Все виды прав</span>
      <p>${d.rights.join(' · ')}</p>
    </div>
    <div class="rightsDetailSection warning">
      <span>Комментарии / исключения</span>
      <p>${d.comments}</p>
    </div>
  `;
}

function renderRightsRoadmap(data) {
  const el = $('rightsRoadmap');
  if (!el) return;
  if (!data || !data.roadmap) {
    el.innerHTML = '<div class="noRightsBlock">Для выбранного сезона таймлайн прав пока не загружен.</div>';
    return;
  }
  const minYear = 2025;
  const maxYear = 2031;
  const span = maxYear - minYear;
  const yearTicks = [2025, 2026, 2027, 2028, 2029, 2030, 2031];

  el.innerHTML = `
    <div class="rightsRoadmap">
      <div class="roadmapScale">
        <div></div>
        <div class="roadmapYears">${yearTicks.map(y => `<span>${y}</span>`).join('')}</div>
      </div>
      ${data.roadmap.map(row => {
        const left = Math.max(0, Math.min(100, ((row.from - minYear) / span) * 100));
        const width = Math.max(5, Math.min(100-left, ((row.to - row.from) / span) * 100));
        return `
          <div class="roadmapRow">
            <div class="roadmapName">${row.name}</div>
            <div class="roadmapTrack">
              <div class="roadmapBar ${row.kind}" style="left:${left}%;width:${width}%">
                <span>${row.label}</span>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}


/* v59: detailed period formatting + dated rights matrix */
if (rightsDetailsBySeason["5"]) {
  if (rightsDetailsBySeason["5"].druzhba) {
    rightsDetailsBySeason["5"].druzhba.periodHtml = `
      <div class="periodLine">20.01.2025 — 29.01.2028 <span class="contractMini">: Дк218062</span></div>
      <div class="periodLine">03.02.2025 — 05.02.2028 <span class="contractMini">: Дк218934</span></div>
    `;
  }
  if (rightsDetailsBySeason["5"].premier) {
    rightsDetailsBySeason["5"].premier.periodHtml = `
      <div class="periodLine">20.01.2025 — 19.01.2026 <span class="contractMini">: Дк217821</span></div>
      <div class="periodLine">20.01.2026 — 19.01.2029 <span class="contractMini">: Дк217821</span></div>
      <div class="periodLine">20.01.2029 — 19.01.2031 <span class="contractMini">: Дк217821</span></div>
    `;
  }
  if (rightsDetailsBySeason["5"].tnt) {
    rightsDetailsBySeason["5"].tnt.periodHtml = `
      <div class="periodLine">01.01.2025 — 30.01.2028 <span class="contractMini">: Дк214323</span></div>
    `;
  }
  if (rightsDetailsBySeason["5"].kinopoisk) {
    rightsDetailsBySeason["5"].kinopoisk.periodHtml = `
      <div class="periodLine">20.01.2025 — 20.01.2029 <span class="contractMini">: Дк219154</span></div>
    `;
  }
  if (rightsDetailsBySeason["5"].owner) {
    rightsDetailsBySeason["5"].owner.periodHtml = `
      <div class="periodLine">11.12.2024 — 10.12.2094 <span class="contractMini">: Д475897</span></div>
    `;
  }
  if (rightsDetailsBySeason["5"].gpm) {
    rightsDetailsBySeason["5"].gpm.periodHtml = `
      <div class="periodLine">11.12.2024 — 10.12.2094 <span class="contractMini">: Д475897</span></div>
    `;
  }
}

if (rightsBySeason["5"]) {
  rightsBySeason["5"].matrixRowsDetailed = [
    {name:'ООО "ГПМ РТВ"', subtitle:'без ограничений', rights:['TV','Catch Up','Simulcast','AVOD','SVOD','TVOD','EST']},
    {name:'ТНТ-Телесеть АО', period:'01.01.2025 — 30.01.2028', contract:'Дк214323', rights:['TV','Catch Up','Simulcast']},
    {name:'Премьер ООО', period:'20.01.2025 — 19.01.2026', contract:'Дк217821', rights:['SVOD','TVOD','EST']},
    {name:'Премьер ООО', period:'20.01.2026 — 19.01.2029', contract:'Дк217821', rights:['AVOD','SVOD','TVOD','EST']},
    {name:'Премьер ООО', period:'20.01.2029 — 19.01.2031', contract:'Дк217821', rights:['AVOD','SVOD','TVOD','EST']},
    {name:'Кинопоиск ООО', period:'20.01.2025 — 20.01.2029', contract:'Дк219154', rights:['AVOD','SVOD','TVOD','EST']},
    {name:'Дружба Мьюзик ООО', period:'20.01.2025 — 29.01.2028', contract:'Дк218062', rights:['TV','Catch Up','Simulcast']},
    {name:'Дружба Мьюзик ООО', period:'03.02.2025 — 05.02.2028', contract:'Дк218934', rights:['TV','Catch Up','Simulcast']}
  ];
}

function renderRightsDetail() {
  const card = $('rightsDetailCard');
  const el = $('rightsDetail');
  if (!card || !el) return;
  const detailsMap = getRightsDetailsMap();
  const d = selectedRightsEntity ? detailsMap[selectedRightsEntity] : null;
  if (!d) {
    card.style.display = 'block';
    el.innerHTML = `
      <div class="rightsDetailEmpty">
        <b>Детализация прав</b>
        <span>Нажмите на любой блок схемы, чтобы открыть детализацию по правам.</span>
      </div>
    `;
    return;
  }
  card.style.display = 'block';
  const rows = [
    ['Роль в цепочке', d.role],
    ['Договор', d.contract],
    ['Срок действия', d.periodHtml || `<div class="periodLine">${d.period}</div>`],
    ['Территория', d.territory],
    ['Канал / платформа', d.platform],
    ['Продажа', d.sale],
    ['Сублицензирование', d.sublicensing],
  ];
  el.innerHTML = `
    <div class="rightsDetailHeader">
      <div>
        <span>Детализация прав</span>
        <h2>${d.title}</h2>
      </div>
      <button onclick="selectedRightsEntity=null; renderRightsFlowRedesign(getSelectedRightsData()); renderRightsDetail()">×</button>
    </div>
    <div class="rightsDetailGrid">
      ${rows.map(([k,v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}
    </div>
    <div class="rightsDetailSection">
      <span>Все виды прав</span>
      <p>${d.rights.join(' · ')}</p>
    </div>
    <div class="rightsDetailSection warning">
      <span>Комментарии / исключения</span>
      <p>${d.comments}</p>
    </div>
  `;
}

function renderRightsMatrixRedesign(data){
  const el = $('rightsMatrix');
  if (!el) return;
  if (!data){
    el.innerHTML = '<div class="noRightsBlock">Нет данных для матрицы прав по выбранному сезону.</div>';
    return;
  }
  const columns = [
    {key:'TV', label:'ТВ'},
    {key:'Catch Up', label:'Catch Up'},
    {key:'Simulcast', label:'Simulcast'},
    {key:'AVOD', label:'AVOD'},
    {key:'SVOD', label:'SVOD'},
    {key:'TVOD', label:'TVOD'},
    {key:'EST', label:'EST'}
  ];
  const rows = data.matrixRowsDetailed || data.matrixRows || [];
  const hasRight = (row, key) => (row.rights || []).includes(key);
  el.innerHTML = `
    <div class="rightsMatrix byPeriod">
      <div class="matrixHeader matrixPartnerWide">Контрагент / срок</div>
      ${columns.map(c => `<div class="matrixHeader">${c.label}</div>`).join('')}
      ${rows.map(row => `
        <div class="matrixPartnerWide">
          <b>${row.name}</b>
          ${row.subtitle ? `<span>${row.subtitle}</span>` : ''}
          ${row.period ? `<span>${row.period}</span>` : ''}
          ${row.contract ? `<em>${row.contract}</em>` : ''}
        </div>
        ${columns.map(c => `<div class="matrixCell ${hasRight(row,c.key) ? 'matrixYes' : 'matrixNo'}">${hasRight(row,c.key) ? '●' : '—'}</div>`).join('')}
      `).join('')}
    </div>`;
}


/* v62: FVOD added + coverage map below existing matrix/timeline */
if (rightsBySeason["5"]) {
  rightsBySeason["5"].matrixRowsDetailed = [
    {name:'ООО "ГПМ РТВ"', subtitle:'без ограничений', rights:['TV','Catch Up','Simulcast','AVOD','FVOD','SVOD','TVOD','EST']},
    {name:'ТНТ-Телесеть АО', period:'01.01.2025 — 30.01.2028', contract:'Дк214323', territory:'Россия', rights:['TV','Catch Up','Simulcast']},
    {name:'ТНТ-Телесеть АО', period:'01.01.2025 — 30.01.2028', contract:'Дк214323', territory:'Весь мир, кроме РФ', rights:['Catch Up','Simulcast']},
    {name:'Премьер ООО', period:'20.01.2025 — 19.01.2026', contract:'Дк217821', territory:'Россия + СНГ+', rights:['EST','FVOD','SVOD','TVOD']},
    {name:'Премьер ООО', period:'20.01.2025 — 19.01.2026', contract:'Дк217821', territory:'Весь мир, кроме СНГ+', rights:['EST','FVOD','SVOD','TVOD']},
    {name:'Премьер ООО', period:'20.01.2026 — 19.01.2029', contract:'Дк217821', territory:'Россия + СНГ+', rights:['AVOD','EST','FVOD','SVOD','TVOD']},
    {name:'Премьер ООО', period:'20.01.2026 — 19.01.2031', contract:'Дк217821', territory:'Весь мир, кроме СНГ+', rights:['AVOD','EST','FVOD','SVOD','TVOD']},
    {name:'Премьер ООО', period:'20.01.2029 — 19.01.2031', contract:'Дк217821', territory:'Россия + СНГ+', rights:['AVOD','EST','FVOD','SVOD','TVOD']},
    {name:'Кинопоиск ООО', period:'20.01.2025 — 20.01.2029', contract:'Дк219154', territory:'Россия + СНГ+', rights:['AVOD','EST','FVOD','SVOD','TVOD']},
    {name:'Кинопоиск ООО', period:'20.01.2025 — 20.01.2031', contract:'Дк219154', territory:'Весь мир, кроме СНГ+', rights:['AVOD','EST','FVOD','SVOD','TVOD']},
    {name:'Дружба Мьюзик ООО', period:'20.01.2025 — 29.01.2028', contract:'Дк218062', territory:'Весь мир, кроме РФ и Украины', rights:['TV','Catch Up','Simulcast']},
    {name:'Дружба Мьюзик ООО', period:'03.02.2025 — 05.02.2028', contract:'Дк218934', territory:'Весь мир, кроме РФ и Украины', rights:['TV','Catch Up','Simulcast']}
  ];
  rightsBySeason["5"].coverageRows = rightsBySeason["5"].matrixRowsDetailed
    .filter(r => r.period)
    .map(r => ({
      name: r.name,
      period: r.period,
      contract: r.contract,
      territory: r.territory || '',
      rights: r.rights || []
    }));
}

function compactRightsLabel(rights) {
  const map = {
    "TV": "TV",
    "ТВ free": "ТВ free",
    "ТВ pay": "ТВ pay",
    "Catch Up": "CU",
    "Simulcast": "SIM",
    "AVOD": "AVOD",
    "FVOD": "FVOD",
    "SVOD": "SVOD",
    "TVOD": "TVOD",
    "EST": "EST",
    "Фрагменты для анонсов": "Фрагменты для анонсов"
  };
  return (rights || []).map(x => map[x] || x).join(" · ");
}

function parseRuYear(dateStr) {
  const m = String(dateStr || '').match(/(\d{2})\.(\d{2})\.(\d{4})/);
  if (!m) return 2025;
  const day = Number(m[1]);
  const month = Number(m[2]);
  const year = Number(m[3]);
  return year + (month - 1) / 12 + (day - 1) / 365;
}

function renderRights() {
  selectedRightsEntity = null;
  const data = getSelectedRightsData();
  renderRightsFlowRedesign(data);
  renderRightsDetail();
  renderRightsMatrixRedesign(data);
  renderRightsRoadmap(data);
  renderRightsCoverageMap(data);
}

function renderRightsMatrixRedesign(data){
  const el = $('rightsMatrix');
  if (!el) return;
  if (!data){
    el.innerHTML = '<div class="noRightsBlock">Нет данных для матрицы прав по выбранному сезону.</div>';
    return;
  }
  const columns = [
    {key:'TV', label:'ТВ'},
    {key:'Catch Up', label:'Catch Up'},
    {key:'Simulcast', label:'Simulcast'},
    {key:'AVOD', label:'AVOD'},
    {key:'FVOD', label:'FVOD'},
    {key:'SVOD', label:'SVOD'},
    {key:'TVOD', label:'TVOD'},
    {key:'EST', label:'EST'}
  ];
  const rows = data.matrixRowsDetailed || data.matrixRows || [];
  const hasRight = (row, key) => (row.rights || []).includes(key);
  el.innerHTML = `
    <div class="rightsMatrix byPeriod v62">
      <div class="matrixHeader matrixPartnerWide">Контрагент / срок</div>
      ${columns.map(c => `<div class="matrixHeader">${c.label}</div>`).join('')}
      ${rows.map(row => `
        <div class="matrixPartnerWide">
          <b>${row.name}</b>
          ${row.subtitle ? `<span>${row.subtitle}</span>` : ''}
          ${row.period ? `<span>${row.period}</span>` : ''}
          ${row.territory ? `<span>${row.territory}</span>` : ''}
          ${row.contract ? `<em>${row.contract}</em>` : ''}
        </div>
        ${columns.map(c => `<div class="matrixCell ${hasRight(row,c.key) ? 'matrixYes' : 'matrixNo'}">${hasRight(row,c.key) ? '●' : '—'}</div>`).join('')}
      `).join('')}
    </div>`;
}

function renderRightsCoverageMap(data) {
  const el = $('rightsCoverageMap');
  if (!el) return;
  if (!data || !data.coverageRows) {
    el.innerHTML = '<div class="noRightsBlock">Для выбранного сезона карта покрытия прав пока не загружена.</div>';
    return;
  }

  const minYear = 2025;
  const maxYear = 2031;
  const span = maxYear - minYear;
  const yearTicks = [2025, 2026, 2027, 2028, 2029, 2030, 2031];

  el.innerHTML = `
    <div class="coverageMap">
      <div class="coverageLegend">
        <span>строка = контрагент + период + территория + набор прав</span>
      </div>
      <div class="coverageScale">
        <div></div>
        <div class="coverageYears">${yearTicks.map(y => `<span>${y}</span>`).join('')}</div>
      </div>
      ${data.coverageRows.map(row => {
        const [start, end] = String(row.period || '').split('—').map(x => x.trim());
        const left = Math.max(0, Math.min(100, ((parseRuYear(start) - minYear) / span) * 100));
        const width = Math.max(4, Math.min(100 - left, ((parseRuYear(end) - parseRuYear(start)) / span) * 100));
        return `
          <div class="coverageRow">
            <div class="coverageName">
              <b>${row.name}</b>
              <span>${row.period}</span>
            </div>
            <div class="coverageTrack">
              <div class="coverageBar" style="left:${left}%;width:${width}%">
                <span>${compactRightsLabel(row.rights)}</span>
              </div>
            </div>
            <div class="coverageTerritory">
              <span>${row.territory}</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}


/* v63: VHO filter from uploaded Excel + coverage-only rights page */
const rightsRowsV63 = [{"id": "owner", "name": "Комеди Клаб продакшн ООО", "schemeName": "Comedy Club Production", "vho": "Нет", "period": "11.12.2024 — 10.12.2094", "contract": "Д475897", "territory": "Весь мир", "rights": ["ALL"], "platform": "ГПМ РТВ", "role": "Правообладатель", "restriction": "Ограничений нет", "exclusive": true, "exclusion": false}, {"id": "tnt", "name": "ТНТ-Телесеть АО", "schemeName": "ТНТ", "vho": "Да", "period": "01.01.2025 — 30.01.2028", "contract": "Дк214323", "territory": "Россия", "rights": ["ТВ free", "Catch Up", "Simulcast"], "platform": "ТНТ", "role": "Получатель прав от ГПМ РТВ", "restriction": "Исключая: лицензионная музыка / фонограммы для анонсов", "exclusive": false, "exclusion": true}, {"id": "tnt", "name": "ТНТ-Телесеть АО", "schemeName": "ТНТ", "vho": "Да", "period": "01.01.2025 — 30.01.2028", "contract": "Дк214323", "territory": "Весь мир, кроме РФ", "rights": ["Catch Up", "Simulcast"], "platform": "ТНТ", "role": "Получатель прав от ГПМ РТВ", "restriction": "Исключая: Россия; лицензионная музыка / фонограммы для анонсов", "exclusive": false, "exclusion": true}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2025 — 19.01.2026", "contract": "Дк217821", "territory": "Россия + СНГ+", "rights": ["EST", "FVOD", "SVOD", "TVOD", "Фрагменты для анонсов"], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "restriction": "Фрагменты для анонсов — неэксклюзивно", "exclusive": false, "exclusion": false}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2025 — 19.01.2026", "contract": "Дк217821", "territory": "Весь мир, кроме СНГ+", "rights": ["EST", "FVOD", "SVOD", "TVOD", "Фрагменты для анонсов"], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "restriction": "Неэксклюзивно; исключая СНГ+", "exclusive": false, "exclusion": true}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2026 — 19.01.2029", "contract": "Дк217821", "territory": "Россия + СНГ+", "rights": ["AVOD", "EST", "FVOD", "SVOD", "TVOD", "Фрагменты для анонсов"], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "restriction": "Фрагменты для анонсов — неэксклюзивно", "exclusive": false, "exclusion": false}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2026 — 19.01.2031", "contract": "Дк217821", "territory": "Весь мир, кроме СНГ+", "rights": ["AVOD", "EST", "FVOD", "SVOD", "TVOD", "Фрагменты для анонсов"], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "restriction": "Неэксклюзивно; исключая СНГ+", "exclusive": false, "exclusion": true}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2029 — 19.01.2031", "contract": "Дк217821", "territory": "Россия + СНГ+", "rights": ["AVOD", "EST", "FVOD", "SVOD", "TVOD", "Фрагменты для анонсов"], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "restriction": "Фрагменты для анонсов — неэксклюзивно", "exclusive": false, "exclusion": false}, {"id": "druzhba", "name": "Дружба Мьюзик ООО", "schemeName": "Дружба Мьюзик", "vho": "Да", "period": "20.01.2025 — 29.01.2028", "contract": "Дк218062", "territory": "Весь мир, кроме РФ и Украины", "rights": ["ТВ free", "ТВ pay", "Catch Up", "Simulcast", "Фрагменты для анонсов"], "platform": "INT_TNT4 · ТНТint", "role": "Получатель международных прав от ГПМ РТВ", "restriction": "Неэксклюзивно; исключая РФ и Украину", "exclusive": false, "exclusion": true}, {"id": "druzhba", "name": "Дружба Мьюзик ООО", "schemeName": "Дружба Мьюзик", "vho": "Да", "period": "03.02.2025 — 05.02.2028", "contract": "Дк218934", "territory": "Весь мир, кроме РФ и Украины", "rights": ["ТВ free", "ТВ pay", "Catch Up", "Simulcast", "Фрагменты для анонсов"], "platform": "INT_TNT4 · ТНТint", "role": "Получатель международных прав от ГПМ РТВ", "restriction": "Неэксклюзивно; исключая РФ и Украину", "exclusive": false, "exclusion": true}, {"id": "kinopoisk", "name": "Кинопоиск ООО", "schemeName": "Кинопоиск", "vho": "Нет", "period": "20.01.2025 — 20.01.2029", "contract": "Дк219154", "territory": "Россия + СНГ+", "rights": ["AVOD", "EST", "FVOD", "SVOD", "TVOD", "Фрагменты для анонсов"], "platform": "Кинопоиск", "role": "Получатель прав через Премьер", "restriction": "Холдбэк; фрагменты для анонсов — неэксклюзивно", "exclusive": false, "exclusion": false}, {"id": "kinopoisk", "name": "Кинопоиск ООО", "schemeName": "Кинопоиск", "vho": "Нет", "period": "20.01.2025 — 20.01.2031", "contract": "Дк219154", "territory": "Весь мир, кроме СНГ+", "rights": ["AVOD", "EST", "FVOD", "SVOD", "TVOD", "Фрагменты для анонсов"], "platform": "Кинопоиск", "role": "Получатель прав через Премьер", "restriction": "Холдбэк; неэксклюзивно; исключая СНГ+", "exclusive": false, "exclusion": true}, {"id": "kinopoisk", "name": "Кинопоиск ООО", "schemeName": "Кинопоиск", "vho": "Нет", "period": "21.01.2025 — 20.01.2031", "contract": "Дк219154", "territory": "Россия + СНГ+", "rights": ["AVOD", "EST", "FVOD", "SVOD", "TVOD", "Фрагменты для анонсов"], "platform": "Кинопоиск", "role": "Получатель прав через Премьер", "restriction": "Холдбэк; фрагменты для анонсов — неэксклюзивно", "exclusive": false, "exclusion": false}];

function getSelectedVho() {
  const sel = $('rightsVhoSelect');
  return sel ? sel.value : 'ALL';
}

function filterRightsRows(rows) {
  const vho = getSelectedVho();
  if (vho === 'ALL') return rows || [];
  return (rows || []).filter(r => r.vho === vho);
}

function uniqueById(rows, id) {
  return (rows || []).some(r => r.id === id);
}

function renderRights() {
  selectedRightsEntity = null;
  const data = getSelectedRightsData();
  renderRightsFlowRedesign(data);
  renderRightsDetail();
  renderRightsCoverageMap(data);
}

function renderRightsFlowRedesign(data) {
  const el = $('rightsFlow');
  if (!el) return;
  if (!data) {
    el.innerHTML = '<div class="noRightsBlock">Для выбранного сезона права пока не загружены.</div>';
    return;
  }
  const rows = filterRightsRows(rightsRowsV63);
  const showOwner = getSelectedVho() !== 'Да';
  const showTnt = uniqueById(rows, 'tnt');
  const showPremier = uniqueById(rows, 'premier') || uniqueById(rows, 'kinopoisk');
  const showKinopoisk = uniqueById(rows, 'kinopoisk');
  const showDruzhba = uniqueById(rows, 'druzhba');

  el.innerHTML = `
    <div class="rightsScheme">
      ${showOwner ? `
      <div class="${rightsNodeClass('owner','schemeNode source')}" onclick="selectRightsEntity('owner')">
        <span class="nodeOver">Правообладатель</span>
        <span class="nodeTitle">Comedy Club Production</span>
      </div>
      <div class="schemeConnector"></div>` : ''}
      <div class="${rightsNodeClass('gpm','schemeNode hub')}" onclick="selectRightsEntity('gpm')">
        <span class="nodeOver">Держатель прав</span>
        <span class="nodeTitle">ООО «ГПМ РТВ»</span>
        <span class="nodeDate">Открытие прав: 11.12.2024</span>
        <span class="nodeMeta">Базовый пакет прав на 5 сезон</span>
      </div>
      <div class="schemeConnector"></div>
      <div class="schemeGrid">
        ${showTnt ? `
        <div class="schemeCol">
          <div class="${rightsNodeClass('tnt','schemeNode primary')}" onclick="selectRightsEntity('tnt')">
            <span class="nodeOver">Продажа от ГПМ РТВ</span>
            <span class="nodeTitle">ТНТ</span>
            <span class="nodeDate">Открытие прав: 01.01.2025</span>
            <span class="nodeMeta">TV · Catch Up · Simulcast</span>
          </div>
        </div>` : ''}
        ${showPremier ? `
        <div class="schemeCol">
          <div class="${rightsNodeClass('premier','schemeNode primary')}" onclick="selectRightsEntity('premier')">
            <span class="nodeOver">Продажа от ГПМ РТВ</span>
            <span class="nodeTitle">Премьер</span>
            <span class="nodeDate">Открытие прав: 20.01.2025</span>
            <span class="nodeMeta">AVOD · FVOD · SVOD · TVOD · EST</span>
          </div>
          ${showKinopoisk ? `
          <div class="schemeSubLink">
            <div class="${rightsNodeClass('kinopoisk','schemeNode secondary')}" onclick="selectRightsEntity('kinopoisk')">
              <span class="nodeOver">Сублицензия / продажа</span>
              <span class="nodeTitle">Кинопоиск</span>
              <span class="nodeDate">Открытие прав: 20.01.2025</span>
              <span class="nodeMeta">через Премьер · AVOD · FVOD · SVOD · TVOD · EST</span>
            </div>
          </div>` : ''}
        </div>` : ''}
        ${showDruzhba ? `
        <div class="schemeCol full">
          <div class="${rightsNodeClass('druzhba','schemeNode primary')}" onclick="selectRightsEntity('druzhba')">
            <span class="nodeOver">Продажа от ГПМ РТВ</span>
            <span class="nodeTitle">Дружба Мьюзик</span>
            <span class="nodeDate">Открытие прав: 20.01.2025</span>
            <span class="nodeMeta">2 договора · международные каналы</span>
          </div>
        </div>` : ''}
      </div>
    </div>
  `;
}

function getRightsDetailsMap() {
  const rows = filterRightsRows(rightsRowsV63);
  const grouped = {};
  rows.forEach(r => {
    if (!grouped[r.id]) grouped[r.id] = [];
    grouped[r.id].push(r);
  });
  const make = (id, title, role, platformDefault) => {
    const arr = grouped[id] || [];
    if (!arr.length) return null;
    return {
      title,
      role,
      contract: [...new Set(arr.map(x => x.contract).filter(Boolean))].join(' / '),
      periodHtml: arr.map(x => `<div class="periodLine">${x.period} <span class="contractMini">: ${x.contract}</span></div>`).join(''),
      territory: [...new Set(arr.map(x => x.territory).filter(Boolean))].join('; '),
      platform: [...new Set(arr.map(x => x.platform || platformDefault).filter(Boolean))].join('; '),
      rights: [...new Set(arr.flatMap(x => x.rights || []))],
      sale: id === 'owner' ? 'Передача прав в ГПМ РТВ' : 'Да',
      sublicensing: id === 'kinopoisk' ? 'В рамках партнёрской передачи / холдбэк' : (id === 'premier' ? 'Кинопоиск / партнёры сервиса Премьер' : 'ALL'),
      restrictions: [...new Set(arr.map(x => x.restriction).filter(Boolean))],
      comments: id === 'kinopoisk' ? 'Связь в схеме идёт через Премьер.' : 'Детализация сформирована по строкам выгрузки прав.'
    };
  };
  const map = {
    owner: make('owner', 'Comedy Club Production', 'Правообладатель', ''),
    tnt: make('tnt', 'ТНТ', 'Получатель прав от ГПМ РТВ', 'ТНТ'),
    premier: make('premier', 'Премьер', 'Получатель цифровых прав от ГПМ РТВ', 'PREMIER'),
    kinopoisk: make('kinopoisk', 'Кинопоиск', 'Получатель прав через Премьер', 'Кинопоиск'),
    druzhba: make('druzhba', 'Дружба Мьюзик', 'Получатель международных прав от ГПМ РТВ', 'INT_TNT4 · ТНТint'),
    gpm: {
      title:'ООО «ГПМ РТВ»',
      role:'Держатель прав',
      contract:'Д475897',
      periodHtml:'<div class="periodLine">11.12.2024 — 10.12.2094 <span class="contractMini">: Д475897</span></div>',
      territory:'Весь мир',
      platform:'ГПМ РТВ',
      rights:['ALL'],
      sale:'Разрешена дальнейшая продажа / передача',
      sublicensing:'ALL',
      restrictions:['Ограничений нет'],
      comments:'Держатель базового пакета прав.'
    }
  };
  Object.keys(map).forEach(k => { if (!map[k]) delete map[k]; });
  return map;
}

function renderRightsDetail() {
  const card = $('rightsDetailCard');
  const el = $('rightsDetail');
  if (!card || !el) return;
  const detailsMap = getRightsDetailsMap();
  const d = selectedRightsEntity ? detailsMap[selectedRightsEntity] : null;
  if (!d) {
    card.style.display = 'block';
    el.innerHTML = `
      <div class="rightsDetailEmpty">
        <b>Детализация прав</b>
        <span>Нажмите на любой блок схемы, чтобы открыть детализацию по правам. Фильтр ВХО применяется к детализации.</span>
      </div>
    `;
    return;
  }
  const rows = [
    ['Роль в цепочке', d.role],
    ['Договор', d.contract],
    ['Срок действия', d.periodHtml],
    ['Территория', d.territory],
    ['Канал / платформа', d.platform],
    ['Продажа', d.sale],
    ['Сублицензирование', d.sublicensing],
  ];
  el.innerHTML = `
    <div class="rightsDetailHeader">
      <div>
        <span>Детализация прав</span>
        <h2>${d.title}</h2>
      </div>
      <button onclick="selectedRightsEntity=null; renderRightsFlowRedesign(getSelectedRightsData()); renderRightsDetail()">×</button>
    </div>
    <div class="rightsDetailGrid">
      ${rows.map(([k,v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}
    </div>
    <div class="rightsDetailSection">
      <span>Все виды прав</span>
      <p>${d.rights.join(' · ')}</p>
    </div>
    <div class="rightsDetailSection warning">
      <span>Ограничения</span>
      <p>${(d.restrictions && d.restrictions.length) ? d.restrictions.join('<br><br>') : 'Ограничений нет'}</p>
    </div>
    <div class="rightsDetailSection">
      <span>Комментарии</span>
      <p>${d.comments}</p>
    </div>
  `;
}

function renderRightsCoverageMap(data) {
  const el = $('rightsCoverageMap');
  if (!el) return;
  if (!data) {
    el.innerHTML = '<div class="noRightsBlock">Для выбранного сезона карта покрытия прав пока не загружена.</div>';
    return;
  }
  const rows = filterRightsRows(rightsRowsV63).filter(r => r.period && r.id !== 'owner');
  if (!rows.length) {
    el.innerHTML = '<div class="noRightsBlock">Нет строк прав для выбранного значения ВХО.</div>';
    return;
  }
  const minYear = 2025;
  const maxYear = 2031;
  const span = maxYear - minYear;
  const yearTicks = [2025, 2026, 2027, 2028, 2029, 2030, 2031];

  el.innerHTML = `
    <div class="coverageMap">
      <div class="coverageLegend">
        <span>строка = контрагент + период + территория + набор прав</span>
      </div>
      <div class="coverageScale">
        <div></div>
        <div class="coverageYears">${yearTicks.map(y => `<span>${y}</span>`).join('')}</div>
      </div>
      ${rows.map(row => {
        const [start, end] = String(row.period || '').split('—').map(x => x.trim());
        const left = Math.max(0, Math.min(100, ((parseRuYear(start) - minYear) / span) * 100));
        const width = Math.max(4, Math.min(100 - left, ((parseRuYear(end) - parseRuYear(start)) / span) * 100));
        return `
          <div class="coverageRow">
            <div class="coverageName">
              <b>${row.name}</b>
              <span>${row.period}</span>
            </div>
            <div class="coverageTrack">
              <div class="coverageBar" style="left:${left}%;width:${width}%">
                <span>${compactRightsLabel(row.rights)}</span>
              </div>
            </div>
            <div class="coverageTerritory">
              <span>${row.territory} · ВХО: ${row.vho}</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}


/* v64: status color coding + simplified scheme/detail */
function rowIsNonexclusive(row){
  if (row && typeof row.exclusive === 'boolean') return !row.exclusive;
  const s = ((row && row.restriction) || '').toLowerCase();
  return s.includes('неэксклюзив');
}
function rowHasExclusion(row){
  if (row && typeof row.exclusion === 'boolean') return row.exclusion;
  const territory = ((row && row.territory) || '').toLowerCase();
  const restriction = ((row && row.restriction) || '').toLowerCase();
  return territory.includes('кроме') || territory.includes('исключая') || restriction.includes('исключая');
}
function rowStatusClass(row){
  return rowIsNonexclusive(row) ? 'nonexclusive' : 'exclusive';
}
function rightChipsHtml(rights, cls){
  return (rights || []).map(r => `<span class="rightChip ${cls}">${r}</span>`).join('');
}
function statusBadgesHtml(row){
  const bits = [`<span class="statusBadge swatch ${rowIsNonexclusive(row) ? 'nonexclusive' : 'exclusive'}" title="${rowIsNonexclusive(row) ? 'Неэксклюзивно' : 'Эксклюзивно'}"></span>`];
  if (rowHasExclusion(row)) bits.push('<span class="statusBadge swatch exclusion" title="Исключая"></span>');
  return bits.join('');
}
function uniqueValues(arr){ return [...new Set((arr||[]).filter(Boolean))]; }

function renderRights() {
  selectedRightsEntity = null;
  const data = getSelectedRightsData();
  renderRightsFlowRedesign(data);
  renderRightsDetail();
  renderRightsCoverageMap(data);
}

function renderRightsFlowRedesign(data) {
  const el = $('rightsFlow');
  if (!el) return;
  if (!data) {
    el.innerHTML = '<div class="noRightsBlock">Для выбранного сезона права пока не загружены.</div>';
    return;
  }
  const rows = filterRightsRows(rightsRowsV63);
  const showOwner = getSelectedVho() !== 'Да';
  const showTnt = uniqueById(rows, 'tnt');
  const showPremier = uniqueById(rows, 'premier') || uniqueById(rows, 'kinopoisk');
  const showKinopoisk = uniqueById(rows, 'kinopoisk');
  const showDruzhba = uniqueById(rows, 'druzhba');

  el.innerHTML = `
    <div class="rightsScheme">
      ${showOwner ? `
      <div class="${rightsNodeClass('owner','schemeNode source')}" onclick="selectRightsEntity('owner')">
        <span class="nodeOver">Правообладатель</span>
        <span class="nodeTitle">Comedy Club Production</span>
      </div>
      <div class="schemeConnector"></div>` : ''}
      <div class="${rightsNodeClass('gpm','schemeNode hub')}" onclick="selectRightsEntity('gpm')">
        <span class="nodeOver">Держатель прав</span>
        <span class="nodeTitle">ООО «ГПМ РТВ»</span>
        <span class="nodeDate periodGold">${periodForEntity('owner')}</span>
      </div>
      <div class="schemeConnector"></div>
      <div class="schemeGrid">
        ${showTnt ? `
        <div class="schemeCol">
          <div class="${rightsNodeClass('tnt','schemeNode primary')}" onclick="selectRightsEntity('tnt')">
            <span class="nodeOver">Продажа от ГПМ РТВ</span>
            <span class="nodeTitle">ТНТ</span>
            <span class="nodeDate periodGold">${periodForEntity('tnt')}</span>
          </div>
        </div>` : ''}
        ${showPremier ? `
        <div class="schemeCol">
          <div class="${rightsNodeClass('premier','schemeNode primary')}" onclick="selectRightsEntity('premier')">
            <span class="nodeOver">Продажа от ГПМ РТВ</span>
            <span class="nodeTitle">Премьер</span>
            <span class="nodeDate periodGold">${periodForEntity('premier')}</span>
          </div>
          ${showKinopoisk ? `
          <div class="schemeSubLink">
            <div class="${rightsNodeClass('kinopoisk','schemeNode secondary')}" onclick="selectRightsEntity('kinopoisk')">
              <span class="nodeOver">Сублицензия / продажа</span>
              <span class="nodeTitle">Кинопоиск</span>
              <span class="nodeDate periodGold">${periodForEntity('kinopoisk')}</span>
            </div>
          </div>` : ''}
        </div>` : ''}
        ${showDruzhba ? `
        <div class="schemeCol full">
          <div class="${rightsNodeClass('druzhba','schemeNode primary')}" onclick="selectRightsEntity('druzhba')">
            <span class="nodeOver">Продажа от ГПМ РТВ</span>
            <span class="nodeTitle">Дружба Мьюзик</span>
            <span class="nodeDate periodGold">${periodForEntity('druzhba')}</span>
          </div>
        </div>` : ''}
      </div>
    </div>
  `;
}

function getRightsDetailsMap() {
  const rows = filterRightsRows(rightsRowsV63);
  const grouped = {};
  rows.forEach(r => { if (!grouped[r.id]) grouped[r.id]=[]; grouped[r.id].push(r); });
  function make(id, title, role, platformDefault) {
    const arr = grouped[id] || [];
    if (!arr.length) return null;
    return {
      title,
      role,
      contract: uniqueValues(arr.map(x => x.contract)).join(' / '),
      territory: uniqueValues(arr.map(x => x.territory)).join('; '),
      platform: uniqueValues(arr.map(x => x.platform || platformDefault)).join('; '),
      rights: uniqueValues(arr.flatMap(x => x.rights || [])),
      sale: id === 'owner' ? 'Передача прав в ГПМ РТВ' : 'Да',
      sublicensing: id === 'kinopoisk' ? 'Через Премьер' : (id === 'premier' ? 'Кинопоиск / партнёры' : 'ALL'),
      restrictions: uniqueValues(arr.map(x => x.restriction)),
      rows: arr,
      comments: id === 'kinopoisk' ? 'Связь в схеме идёт через Премьер.' : 'Детализация сформирована по строкам выгрузки прав.'
    };
  }
  const map = {
    owner: make('owner', 'Comedy Club Production', 'Правообладатель', ''),
    tnt: make('tnt', 'ТНТ', 'Получатель прав от ГПМ РТВ', 'ТНТ'),
    premier: make('premier', 'Премьер', 'Получатель цифровых прав от ГПМ РТВ', 'PREMIER'),
    kinopoisk: make('kinopoisk', 'Кинопоиск', 'Получатель прав через Премьер', 'Кинопоиск'),
    druzhba: make('druzhba', 'Дружба Мьюзик', 'Получатель международных прав от ГПМ РТВ', 'INT_TNT4 · ТНТint'),
    gpm: {
      title:'ООО «ГПМ РТВ»',
      role:'Держатель прав',
      contract:'Д475897',
      territory:'Весь мир',
      platform:'ГПМ РТВ',
      rights:['ALL'],
      sale:'Разрешена дальнейшая продажа / передача',
      sublicensing:'ALL',
      restrictions:['Ограничений нет'],
      rows:[{period:'11.12.2024 — 10.12.2094',contract:'Д475897',rights:['ALL'],territory:'Весь мир',restriction:'Ограничений нет'}]
    }
  };
  Object.keys(map).forEach(k => { if (!map[k]) delete map[k]; });
  return map;
}

function renderRightsDetail() {
  const card = $('rightsDetailCard');
  const el = $('rightsDetail');
  if (!card || !el) return;
  const detailsMap = getRightsDetailsMap();
  const d = selectedRightsEntity ? detailsMap[selectedRightsEntity] : null;
  if (!d) {
    card.style.display = 'block';
    el.innerHTML = `
      <div class="rightsDetailEmpty">
        <b>Детализация прав</b>
        <span>Нажмите на блок схемы, чтобы посмотреть права, периоды, территории и ограничения.</span>
      </div>
    `;
    return;
  }
  card.style.display = 'block';
  const rows = [
    ['Роль в цепочке', d.role],
    ['Договор', d.contract],
    ['Территория', d.territory],
    ['Канал / платформа', d.platform],
    ['Продажа', d.sale],
    ['Сублицензирование', d.sublicensing],
  ];
  const rightsRowsHtml = (d.rows || []).map(row => `
    <div class="detailRightsRow">
      <div class="detailRightsRowTop">
        <div class="detailPeriod">${row.period}${row.contract ? ` <span class="contractMini">: ${row.contract}</span>` : ''}</div>
        <div class="detailStatusSet">${statusBadgesHtml(row)}</div>
      </div>
      <div class="detailRightsChips">${rightChipsHtml(row.rights || [], rowStatusClass(row))}</div>
      <div class="detailTerritoryRow">
        <span class="territoryPill ${rowHasExclusion(row) ? 'exclusion' : 'plain'}">${row.territory || ''}</span>
      </div>
    </div>
  `).join('');
  el.innerHTML = `
    <div class="rightsDetailHeader">
      <div>
        <span>Детализация прав</span>
        <h2>${d.title}</h2>
      </div>
      <button onclick="selectedRightsEntity=null; renderRightsFlowRedesign(getSelectedRightsData()); renderRightsDetail()">×</button>
    </div>
    <div class="rightsDetailGrid">
      ${rows.map(([k,v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}
    </div>
    <div class="rightsDetailSection">
      <span>Права по периодам</span>
      <div class="detailRightsList">${rightsRowsHtml}</div>
    </div>
    <div class="rightsDetailSection warning">
      <span>Ограничения</span>
      <p>${(d.restrictions && d.restrictions.length) ? d.restrictions.join('<br><br>') : 'Ограничений нет'}</p>
    </div>
  `;
}

function renderRightsCoverageMap(data) {
  const el = $('rightsCoverageMap');
  if (!el) return;
  if (!data) {
    el.innerHTML = '<div class="noRightsBlock">Для выбранного сезона карта покрытия прав пока не загружена.</div>';
    return;
  }
  const rows = filterRightsRows(rightsRowsV63).filter(r => r.period && r.id !== 'owner');
  if (!rows.length) {
    el.innerHTML = '<div class="noRightsBlock">Нет строк прав для выбранного значения ВХО.</div>';
    return;
  }
  const minYear = 2025;
  const maxYear = 2031;
  const span = maxYear - minYear;
  const yearTicks = [2025, 2026, 2027, 2028, 2029, 2030, 2031];

  el.innerHTML = `
    <div class="coverageMap">
      <div class="coverageLegend">
        <span>строка = контрагент + период + территория + набор прав</span>
      </div>
      <div class="coverageScale">
        <div></div>
        <div class="coverageYears">${yearTicks.map(y => `<span>${y}</span>`).join('')}</div>
      </div>
      ${rows.map(row => {
        const [start, end] = String(row.period || '').split('—').map(x => x.trim());
        const left = Math.max(0, Math.min(100, ((parseRuYear(start) - minYear) / span) * 100));
        const width = Math.max(4, Math.min(100 - left, ((parseRuYear(end) - parseRuYear(start)) / span) * 100));
        const statusClass = rowStatusClass(row);
        return `
          <div class="coverageRow">
            <div class="coverageName">
              <b>${row.name}</b>
              <span>${row.period}</span>
            </div>
            <div class="coverageTrackWrap">
              <div class="coverageTrack">
                <div class="coverageBar ${statusClass}" style="left:${left}%;width:${width}%">
                  <span>${compactRightsLabel(row.rights)}</span>
                </div>
              </div>
            </div>
            <div class="coverageTerritory">
              <span class="territoryPill ${rowHasExclusion(row) ? 'exclusion' : 'plain'}">${row.territory}</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function shortRuDate(v){ const m=String(v||'').match(/(\d{2})\.(\d{2})\.(\d{4})/); return m ? `${m[1]}.${m[2]}.${m[3].slice(2)}` : String(v||''); }
function shortPeriodText(v){ const parts=String(v||'').split('—').map(s=>s.trim()); return parts.length===2 ? `${shortRuDate(parts[0])}-${shortRuDate(parts[1])}` : String(v||''); }
function periodForEntity(entityId){ const rows=filterRightsRows(rightsRowsV63).filter(r=>r.id===entityId); if(!rows.length) return ''; const starts=rows.map(r=>String(r.period).split('—')[0].trim()).sort(); const ends=rows.map(r=>String(r.period).split('—')[1].trim()).sort(); return shortRuDate(starts[0]) + '-' + shortRuDate(ends[ends.length-1]); }


/* v69 FINAL: stable rights page render */
const rightsRowsV69 = [{"id": "owner", "name": "Комеди Клаб продакшн ООО", "schemeName": "Comedy Club Production", "vho": "Нет", "period": "11.12.2024 — 10.12.2094", "contract": "Д475897", "territory": "Весь мир", "rights": [{"label": "ALL", "status": "exclusive"}], "platform": "ГПМ РТВ", "role": "Правообладатель", "limitation": "", "exclusion": false}, {"id": "tnt", "name": "ТНТ-Телесеть АО", "schemeName": "ТНТ", "vho": "Да", "period": "01.01.2025 — 30.01.2028", "contract": "Дк214323", "territory": "Россия", "rights": [{"label": "Catch Up", "status": "exclusive"}, {"label": "Simulcast", "status": "exclusive"}, {"label": "ТВ free", "status": "nonexclusive"}], "platform": "ТНТ", "role": "Получатель прав от ГПМ РТВ", "limitation": "", "exclusion": true}, {"id": "tnt", "name": "ТНТ-Телесеть АО", "schemeName": "ТНТ", "vho": "Да", "period": "01.01.2025 — 30.01.2028", "contract": "Дк214323", "territory": "Весь мир, кроме России", "rights": [{"label": "Catch Up", "status": "nonexclusive"}, {"label": "Simulcast", "status": "nonexclusive"}], "platform": "ТНТ", "role": "Получатель прав от ГПМ РТВ", "limitation": "", "exclusion": true}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2025 — 19.01.2026", "contract": "Дк217821", "territory": "Россия + СНГ+", "rights": [{"label": "EST", "status": "exclusive"}, {"label": "FVOD", "status": "exclusive"}, {"label": "SVOD", "status": "exclusive"}, {"label": "TVOD", "status": "exclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "limitation": "", "exclusion": false}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2025 — 19.01.2026", "contract": "Дк217821", "territory": "Весь мир, кроме СНГ+", "rights": [{"label": "EST", "status": "nonexclusive"}, {"label": "FVOD", "status": "nonexclusive"}, {"label": "SVOD", "status": "nonexclusive"}, {"label": "TVOD", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "limitation": "", "exclusion": true}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2026 — 19.01.2029", "contract": "Дк217821", "territory": "Россия + СНГ+", "rights": [{"label": "AVOD", "status": "exclusive"}, {"label": "EST", "status": "exclusive"}, {"label": "FVOD", "status": "exclusive"}, {"label": "SVOD", "status": "exclusive"}, {"label": "TVOD", "status": "exclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "limitation": "", "exclusion": false}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2026 — 19.01.2031", "contract": "Дк217821", "territory": "Весь мир, кроме СНГ+", "rights": [{"label": "AVOD", "status": "nonexclusive"}, {"label": "EST", "status": "nonexclusive"}, {"label": "FVOD", "status": "nonexclusive"}, {"label": "SVOD", "status": "nonexclusive"}, {"label": "TVOD", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "limitation": "", "exclusion": true}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2029 — 19.01.2031", "contract": "Дк217821", "territory": "Россия + СНГ+", "rights": [{"label": "AVOD", "status": "nonexclusive"}, {"label": "EST", "status": "nonexclusive"}, {"label": "FVOD", "status": "nonexclusive"}, {"label": "SVOD", "status": "nonexclusive"}, {"label": "TVOD", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "limitation": "", "exclusion": false}, {"id": "druzhba", "name": "Дружба Мьюзик ООО", "schemeName": "Дружба Мьюзик", "vho": "Да", "period": "20.01.2025 — 29.01.2028", "contract": "Дк218062", "territory": "Весь мир, кроме Украины и России", "rights": [{"label": "Catch Up", "status": "nonexclusive"}, {"label": "Simulcast", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}, {"label": "ТВ free", "status": "nonexclusive"}, {"label": "ТВ pay", "status": "nonexclusive"}], "platform": "INT_TNT4 · ТНТint", "role": "Получатель международных прав от ГПМ РТВ", "limitation": "", "exclusion": true}, {"id": "druzhba", "name": "Дружба Мьюзик ООО", "schemeName": "Дружба Мьюзик", "vho": "Да", "period": "03.02.2025 — 05.02.2028", "contract": "Дк218934", "territory": "Весь мир, кроме Украины и России", "rights": [{"label": "Catch Up", "status": "nonexclusive"}, {"label": "Simulcast", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}, {"label": "ТВ free", "status": "nonexclusive"}, {"label": "ТВ pay", "status": "nonexclusive"}], "platform": "INT_TNT4 · ТНТint", "role": "Получатель международных прав от ГПМ РТВ", "limitation": "", "exclusion": true}, {"id": "kinopoisk", "name": "Кинопоиск ООО", "schemeName": "Кинопоиск", "vho": "Нет", "period": "20.01.2025 — 20.01.2029", "contract": "Дк219154", "territory": "Россия + СНГ+", "rights": [{"label": "AVOD", "status": "exclusive"}, {"label": "EST", "status": "exclusive"}, {"label": "FVOD", "status": "exclusive"}, {"label": "SVOD", "status": "exclusive"}, {"label": "TVOD", "status": "exclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "Кинопоиск", "role": "Получатель прав через Премьер", "limitation": "ХОЛДБЭК по договору с Кинопоиском (рег. Дк219154)", "exclusion": false}, {"id": "kinopoisk", "name": "Кинопоиск ООО", "schemeName": "Кинопоиск", "vho": "Нет", "period": "20.01.2025 — 20.01.2031", "contract": "Дк219154", "territory": "Весь мир, кроме СНГ+", "rights": [{"label": "AVOD", "status": "nonexclusive"}, {"label": "EST", "status": "nonexclusive"}, {"label": "FVOD", "status": "nonexclusive"}, {"label": "SVOD", "status": "nonexclusive"}, {"label": "TVOD", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "Кинопоиск", "role": "Получатель прав через Премьер", "limitation": "ХОЛДБЭК по договору с Кинопоиском (рег. Дк219154)", "exclusion": true}, {"id": "kinopoisk", "name": "Кинопоиск ООО", "schemeName": "Кинопоиск", "vho": "Нет", "period": "21.01.2025 — 20.01.2031", "contract": "Дк219154", "territory": "Россия + СНГ+", "rights": [{"label": "AVOD", "status": "nonexclusive"}, {"label": "EST", "status": "nonexclusive"}, {"label": "FVOD", "status": "nonexclusive"}, {"label": "SVOD", "status": "nonexclusive"}, {"label": "TVOD", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "Кинопоиск", "role": "Получатель прав через Премьер", "limitation": "ХОЛДБЭК по договору с Кинопоиском (рег. Дк219154)", "exclusion": false}];

function applyRightsRowsV69() {
  if (typeof rightsRowsV63 !== 'undefined' && Array.isArray(rightsRowsV63)) {
    rightsRowsV63.splice(0, rightsRowsV63.length, ...rightsRowsV69);
  }
}

function rightsRowsActiveV69() {
  applyRightsRowsV69();
  const vho = (document.getElementById('rightsVhoSelect') || {value:'ALL'}).value;
  const base = (typeof rightsRowsV63 !== 'undefined' && Array.isArray(rightsRowsV63)) ? rightsRowsV63 : rightsRowsV69;
  return vho === 'ALL' ? base : base.filter(r => r.vho === vho);
}

function uniqueValuesV69(arr) {
  return [...new Set((arr || []).filter(v => v !== undefined && v !== null && String(v).trim() !== ''))];
}

function shortRuDateV69(v) {
  const m = String(v || '').match(/(\d{2})\.(\d{2})\.(\d{4})/);
  return m ? `${m[1]}.${m[2]}.${m[3].slice(2)}` : String(v || '');
}

function shortPeriodTextV69(v) {
  const parts = String(v || '').split('—').map(s => s.trim());
  return parts.length === 2 ? `${shortRuDateV69(parts[0])}-${shortRuDateV69(parts[1])}` : String(v || '');
}

function periodForEntityV69(entityId) {
  const rows = rightsRowsActiveV69().filter(r => r.id === entityId);
  if (!rows.length && entityId === 'owner') return '11.12.24-10.12.94';
  if (!rows.length) return '';
  const starts = rows.map(r => String(r.period).split('—')[0].trim()).sort();
  const ends = rows.map(r => String(r.period).split('—')[1].trim()).sort();
  return `${shortRuDateV69(starts[0])}-${shortRuDateV69(ends[ends.length - 1])}`;
}

function rightsToObjectsV69(rights) {
  return (rights || []).map(r => typeof r === 'object' ? r : {label: r, status: 'exclusive'});
}

function rowHasExclusionV69(row) {
  return !!(row && row.exclusion);
}

function rowHasExclusiveV69(row) {
  return rightsToObjectsV69(row && row.rights).some(r => r.status !== 'nonexclusive');
}

function rowHasNonexclusiveV69(row) {
  return rightsToObjectsV69(row && row.rights).some(r => r.status === 'nonexclusive');
}

function rowBarClassV69(row) {
  if (rowHasExclusiveV69(row) && rowHasNonexclusiveV69(row)) return 'mixed';
  if (rowHasNonexclusiveV69(row)) return 'nonexclusive';
  return 'exclusive';
}

function rightChipsHtmlV69(rights) {
  return rightsToObjectsV69(rights)
    .map(r => `<span class="rightChip ${r.status || 'exclusive'}">${r.label}</span>`)
    .join('');
}

function statusSwatchesHtmlV69(row) {
  const bits = [];
  if (rowHasExclusiveV69(row)) bits.push('<span class="statusBadge swatch exclusive" title="Эксклюзивно"></span>');
  if (rowHasNonexclusiveV69(row)) bits.push('<span class="statusBadge swatch nonexclusive" title="Неэксклюзивно"></span>');
  if (rowHasExclusionV69(row)) bits.push('<span class="statusBadge swatch exclusion" title="Исключая"></span>');
  return bits.join('');
}

function parseRuYearV69(dateStr) {
  const m = String(dateStr || '').match(/(\d{2})\.(\d{2})\.(\d{4})/);
  if (!m) return 2025;
  const day = Number(m[1]);
  const month = Number(m[2]);
  const year = Number(m[3]);
  return year + (month - 1) / 12 + (day - 1) / 365;
}

function hasEntityV69(rows, id) {
  return (rows || []).some(r => r.id === id);
}

function renderRights() {
  applyRightsRowsV69();
  selectedRightsEntity = null;
  const data = getSelectedRightsData();
  renderRightsFlowRedesign(data);
  renderRightsDetail();
  renderRightsCoverageMap(data);
}

function renderRightsFlowRedesign(data) {
  const el = document.getElementById('rightsFlow');
  if (!el) return;
  if (!data) {
    el.innerHTML = '<div class="noRightsBlock">Для выбранного сезона права пока не загружены.</div>';
    return;
  }

  const rows = rightsRowsActiveV69();
  const showOwner = (document.getElementById('rightsVhoSelect') || {value:'ALL'}).value !== 'Да';
  const showTnt = hasEntityV69(rows, 'tnt');
  const showPremier = hasEntityV69(rows, 'premier') || hasEntityV69(rows, 'kinopoisk');
  const showKinopoisk = hasEntityV69(rows, 'kinopoisk');
  const showDruzhba = hasEntityV69(rows, 'druzhba');

  el.innerHTML = `
    <div class="rightsScheme">
      ${showOwner ? `
      <div class="${rightsNodeClass('owner','schemeNode source')}" onclick="selectRightsEntity('owner')">
        <span class="nodeOver">Правообладатель</span>
        <span class="nodeTitle">Comedy Club Production</span>
      </div>
      <div class="schemeConnector"></div>` : ''}

      <div class="${rightsNodeClass('gpm','schemeNode hub')}" onclick="selectRightsEntity('gpm')">
        <span class="nodeOver">Держатель прав</span>
        <span class="nodeTitle">ООО «ГПМ РТВ»</span>
        <span class="nodeDate schemePeriodWhite">11.12.24-10.12.94</span>
      </div>

      <div class="schemeConnector"></div>
      <div class="schemeGrid">
        ${showTnt ? `
        <div class="schemeCol">
          <div class="${rightsNodeClass('tnt','schemeNode primary')}" onclick="selectRightsEntity('tnt')">
            <span class="nodeOver">Продажа от ГПМ РТВ</span>
            <span class="nodeTitle">ТНТ</span>
            <span class="nodeDate schemePeriodWhite">${periodForEntityV69('tnt')}</span>
          </div>
        </div>` : ''}

        ${showPremier ? `
        <div class="schemeCol">
          <div class="${rightsNodeClass('premier','schemeNode primary')}" onclick="selectRightsEntity('premier')">
            <span class="nodeOver">Продажа от ГПМ РТВ</span>
            <span class="nodeTitle">Премьер</span>
            <span class="nodeDate schemePeriodWhite">${periodForEntityV69('premier')}</span>
          </div>
          ${showKinopoisk ? `
          <div class="schemeSubLink">
            <div class="${rightsNodeClass('kinopoisk','schemeNode secondary')}" onclick="selectRightsEntity('kinopoisk')">
              <span class="nodeOver">Сублицензия / продажа</span>
              <span class="nodeTitle">Кинопоиск</span>
              <span class="nodeDate schemePeriodWhite">${periodForEntityV69('kinopoisk')}</span>
            </div>
          </div>` : ''}
        </div>` : ''}

        ${showDruzhba ? `
        <div class="schemeCol full">
          <div class="${rightsNodeClass('druzhba','schemeNode primary')}" onclick="selectRightsEntity('druzhba')">
            <span class="nodeOver">Продажа от ГПМ РТВ</span>
            <span class="nodeTitle">Дружба Мьюзик</span>
            <span class="nodeDate schemePeriodWhite">${periodForEntityV69('druzhba')}</span>
          </div>
        </div>` : ''}
      </div>
    </div>
  `;
}

function getRightsDetailsMap() {
  const rows = rightsRowsActiveV69();
  const grouped = {};
  rows.forEach(r => {
    if (!grouped[r.id]) grouped[r.id] = [];
    grouped[r.id].push(r);
  });

  const make = (id, title, role, platformDefault) => {
    const arr = grouped[id] || [];
    if (!arr.length) return null;
    return {
      title,
      role,
      contract: uniqueValuesV69(arr.map(x => x.contract)).join(' / '),
      territory: uniqueValuesV69(arr.map(x => x.territory)).join('; '),
      platform: uniqueValuesV69(arr.map(x => x.platform || platformDefault)).join('; '),
      sale: id === 'owner' ? 'Передача прав в ГПМ РТВ' : 'Да',
      sublicensing: id === 'kinopoisk' ? 'Через Премьер' : (id === 'premier' ? 'Кинопоиск / партнёры' : 'ALL'),
      limitations: uniqueValuesV69(arr.map(x => x.limitation)),
      rows: arr
    };
  };

  const map = {
    owner: make('owner', 'Comedy Club Production', 'Правообладатель', ''),
    gpm: {
      title: 'ООО «ГПМ РТВ»',
      role: 'Держатель прав',
      contract: 'Д475897',
      territory: 'Весь мир',
      platform: 'ГПМ РТВ',
      sale: 'Разрешена дальнейшая продажа / передача',
      sublicensing: 'ALL',
      limitations: [],
      rows: [{period:'11.12.2024 — 10.12.2094', contract:'Д475897', territory:'Весь мир', rights:[{label:'ALL', status:'exclusive'}], limitation:'', exclusion:false}]
    },
    tnt: make('tnt', 'ТНТ', 'Получатель прав от ГПМ РТВ', 'ТНТ'),
    premier: make('premier', 'Премьер', 'Получатель цифровых прав от ГПМ РТВ', 'PREMIER'),
    kinopoisk: make('kinopoisk', 'Кинопоиск', 'Получатель прав через Премьер', 'Кинопоиск'),
    druzhba: make('druzhba', 'Дружба Мьюзик', 'Получатель международных прав от ГПМ РТВ', 'INT_TNT4 · ТНТint')
  };
  Object.keys(map).forEach(k => { if (!map[k]) delete map[k]; });
  return map;
}

function renderRightsDetail() {
  const card = document.getElementById('rightsDetailCard');
  const el = document.getElementById('rightsDetail');
  if (!card || !el) return;
  const detailsMap = getRightsDetailsMap();
  const d = selectedRightsEntity ? detailsMap[selectedRightsEntity] : null;
  if (!d) {
    card.style.display = 'block';
    el.innerHTML = `
      <div class="rightsDetailEmpty">
        <b>Детализация прав</b>
        <span>Нажмите на блок схемы, чтобы посмотреть права, периоды, территории и ограничения.</span>
      </div>
    `;
    return;
  }

  const rows = [
    ['Роль в цепочке', d.role],
    ['Договор', d.contract],
    ['Территория', d.territory],
    ['Канал / платформа', d.platform],
    ['Продажа', d.sale],
    ['Сублицензирование', d.sublicensing],
  ];

  const rightsRowsHtml = (d.rows || []).map(row => `
    <div class="detailRightsRow">
      <div class="detailRightsRowTop">
        <div class="detailPeriod">${row.period}${row.contract ? ` <span class="contractMini">: ${row.contract}</span>` : ''}</div>
        <div class="detailStatusSet">${statusSwatchesHtmlV69(row)}</div>
      </div>
      <div class="detailRightsChips">${rightChipsHtmlV69(row.rights)}</div>
      <div class="detailTerritoryRow">
        <span class="territoryPill ${rowHasExclusionV69(row) ? 'exclusion' : 'plain'}">${row.territory || ''}</span>
      </div>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="rightsDetailHeader">
      <div>
        <span>Детализация прав</span>
        <h2>${d.title}</h2>
      </div>
      <button onclick="selectedRightsEntity=null; renderRightsFlowRedesign(getSelectedRightsData()); renderRightsDetail()">×</button>
    </div>
    <div class="rightsDetailGrid">
      ${rows.map(([k,v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}
    </div>
    <div class="rightsDetailSection">
      <span>Права по периодам</span>
      <div class="detailRightsList">${rightsRowsHtml}</div>
    </div>
    <div class="rightsDetailSection warning">
      <span>Ограничения</span>
      <p>${(d.limitations && d.limitations.length) ? d.limitations.join('<br><br>') : 'Нет ограничений'}</p>
    </div>
  `;
}

function renderRightsCoverageMap(data) {
  const el = document.getElementById('rightsCoverageMap');
  if (!el) return;
  if (!data) {
    el.innerHTML = '<div class="noRightsBlock">Для выбранного сезона карта покрытия прав пока не загружена.</div>';
    return;
  }

  const rows = rightsRowsActiveV69().filter(r => r.period && r.id !== 'owner');
  if (!rows.length) {
    el.innerHTML = '<div class="noRightsBlock">Нет строк прав для выбранного значения ВХО.</div>';
    return;
  }

  const minYear = 2025;
  const maxYear = 2031;
  const span = maxYear - minYear;
  const yearTicks = [2025, 2026, 2027, 2028, 2029, 2030, 2031];

  el.innerHTML = `
    <div class="coverageMap v69Coverage">
      <div class="coverageLegend">
        <span>строка = контрагент + период + территория + набор прав</span>
      </div>
      <div class="coverageScale">
        <div></div>
        <div class="coverageYears">${yearTicks.map(y => `<span>${y}</span>`).join('')}</div>
      </div>
      ${rows.map(row => {
        const [start, end] = String(row.period || '').split('—').map(x => x.trim());
        const left = Math.max(0, Math.min(100, ((parseRuYearV69(start) - minYear) / span) * 100));
        const width = Math.max(4, Math.min(100 - left, ((parseRuYearV69(end) - parseRuYearV69(start)) / span) * 100));
        return `
          <div class="coverageRow">
            <div class="coverageName">
              <b>${row.name}</b>
              <span>${shortPeriodTextV69(row.period)}</span>
            </div>
            <div class="coverageTrackWrap">
              <div class="coverageTrack">
                <div class="coverageBar ${rowBarClassV69(row)}" style="left:${left}%;width:${width}%"></div>
              </div>
              <div class="coverageRightsChips">
                ${rightChipsHtmlV69(row.rights)}
                ${rowHasExclusionV69(row) ? '<span class="statusBadge swatch exclusion" title="Исключая"></span>' : ''}
              </div>
            </div>
            <div class="coverageTerritory">
              <span class="territoryPill ${rowHasExclusionV69(row) ? 'exclusion' : 'plain'}">${row.territory}</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}


/* v70 rights cleanup final */
const rightsRowsV70 = [{"id": "owner", "name": "Комеди Клаб продакшн ООО", "schemeName": "Comedy Club Production", "vho": "Нет", "period": "11.12.2024 — 10.12.2094", "contract": "Д475897", "territory": "Весь мир", "rights": [{"label": "ALL", "status": "exclusive"}], "platform": "ГПМ РТВ", "role": "Правообладатель", "limitation": "", "exclusion": false, "episodes": 20, "territoryFull": "Весь мир", "limitationDetail": "", "sublicensing": "ALL"}, {"id": "tnt", "name": "ТНТ-Телесеть АО", "schemeName": "ТНТ", "vho": "Да", "period": "01.01.2025 — 30.01.2028", "contract": "Дк214323", "territory": "Россия", "rights": [{"label": "Catch Up", "status": "exclusive"}, {"label": "Simulcast", "status": "exclusive"}, {"label": "ВОСПРОИЗВЕДЕНИЕ", "status": "nonexclusive"}, {"label": "ИСПОЛЬЗОВАНИЕ ЭЛЕМЕНТОВ", "status": "nonexclusive"}, {"label": "ПУБЛИЧНОЕ ИСПОЛНЕНИЕ", "status": "nonexclusive"}, {"label": "ПУБЛИЧНЫЙ ПОКАЗ", "status": "nonexclusive"}, {"label": "РАДИО", "status": "nonexclusive"}, {"label": "ТВ free", "status": "nonexclusive"}], "platform": "ТНТ", "role": "Получатель прав от ГПМ РТВ", "limitation": "", "exclusion": true, "episodes": 20, "exclusions": ["Исключая: Лицензионная музыка / фонограммы для анонсов"], "territoryFull": "Россия", "limitationDetail": "", "sublicensing": "ALL"}, {"id": "tnt", "name": "ТНТ-Телесеть АО", "schemeName": "ТНТ", "vho": "Да", "period": "01.01.2025 — 30.01.2028", "contract": "Дк214323", "territory": "Весь мир, исключая Россию", "rights": [{"label": "ВОСПРОИЗВЕДЕНИЕ", "status": "nonexclusive"}, {"label": "Catch Up", "status": "nonexclusive"}, {"label": "Simulcast", "status": "nonexclusive"}, {"label": "ИСПОЛЬЗОВАНИЕ ЭЛЕМЕНТОВ", "status": "nonexclusive"}], "platform": "ТНТ", "role": "Получатель прав от ГПМ РТВ", "limitation": "", "exclusion": true, "episodes": 20, "exclusions": ["Исключая: Лицензионная музыка / фонограммы для анонсов"], "territoryFull": "Весь мир, исключая: Россия", "limitationDetail": "", "sublicensing": "ALL"}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2025 — 19.01.2026", "contract": "Дк217821", "territory": "СНГ+ и Россия", "rights": [{"label": "EST", "status": "exclusive"}, {"label": "FVOD", "status": "exclusive"}, {"label": "SVOD", "status": "exclusive"}, {"label": "TVOD", "status": "exclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "limitation": "", "exclusion": false, "episodes": 20, "territoryFull": "Россия; СНГ+: Грузия, Украина, Абхазия, Южная Осетия, Азербайджан, Армения, Беларусь, Кыргызстан, Молдова, Таджикистан, Туркменистан, Узбекистан, Казахстан", "limitationDetail": "", "sublicensing": "ООО «Кинопоиск»"}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2025 — 19.01.2026", "contract": "Дк217821", "territory": "Весь мир, исключая СНГ+ и Россию", "rights": [{"label": "EST", "status": "nonexclusive"}, {"label": "FVOD", "status": "nonexclusive"}, {"label": "SVOD", "status": "nonexclusive"}, {"label": "TVOD", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "limitation": "", "exclusion": true, "episodes": 20, "territoryFull": "Весь мир, исключая: Россия; СНГ+: Грузия, Украина, Абхазия, Южная Осетия, Азербайджан, Армения, Беларусь, Кыргызстан, Молдова, Таджикистан, Туркменистан, Узбекистан, Казахстан", "limitationDetail": "", "sublicensing": "ООО «Кинопоиск»"}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2026 — 19.01.2029", "contract": "Дк217821", "territory": "СНГ+ и Россия", "rights": [{"label": "AVOD", "status": "exclusive"}, {"label": "EST", "status": "exclusive"}, {"label": "FVOD", "status": "exclusive"}, {"label": "SVOD", "status": "exclusive"}, {"label": "TVOD", "status": "exclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "limitation": "", "exclusion": false, "episodes": 20, "territoryFull": "Россия; СНГ+: Грузия, Украина, Абхазия, Южная Осетия, Азербайджан, Армения, Беларусь, Кыргызстан, Молдова, Таджикистан, Туркменистан, Узбекистан, Казахстан", "limitationDetail": "", "sublicensing": "Партнёры сервиса Премьер"}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2026 — 19.01.2031", "contract": "Дк217821", "territory": "Весь мир, исключая СНГ+ и Россию", "rights": [{"label": "AVOD", "status": "nonexclusive"}, {"label": "EST", "status": "nonexclusive"}, {"label": "FVOD", "status": "nonexclusive"}, {"label": "SVOD", "status": "nonexclusive"}, {"label": "TVOD", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "limitation": "", "exclusion": true, "episodes": 20, "territoryFull": "Весь мир, исключая: Россия; СНГ+: Грузия, Украина, Абхазия, Южная Осетия, Азербайджан, Армения, Беларусь, Кыргызстан, Молдова, Таджикистан, Туркменистан, Узбекистан, Казахстан", "limitationDetail": "", "sublicensing": "Партнёры сервиса Премьер"}, {"id": "premier", "name": "Премьер ООО", "schemeName": "Премьер", "vho": "Да", "period": "20.01.2029 — 19.01.2031", "contract": "Дк217821", "territory": "СНГ+ и Россия", "rights": [{"label": "AVOD", "status": "nonexclusive"}, {"label": "EST", "status": "nonexclusive"}, {"label": "FVOD", "status": "nonexclusive"}, {"label": "SVOD", "status": "nonexclusive"}, {"label": "TVOD", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "PREMIER", "role": "Получатель цифровых прав от ГПМ РТВ", "limitation": "", "exclusion": false, "episodes": 20, "territoryFull": "Россия; СНГ+: Грузия, Украина, Абхазия, Южная Осетия, Азербайджан, Армения, Беларусь, Кыргызстан, Молдова, Таджикистан, Туркменистан, Узбекистан, Казахстан", "limitationDetail": "", "sublicensing": "Партнёры сервиса Премьер"}, {"id": "druzhba", "name": "Дружба Мьюзик ООО", "schemeName": "Дружба Мьюзик", "vho": "Да", "period": "20.01.2025 — 29.01.2028", "contract": "Дк218062", "territory": "Весь мир, исключая Украину и Россию", "rights": [{"label": "Catch Up", "status": "nonexclusive"}, {"label": "Simulcast", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}, {"label": "ТВ free", "status": "nonexclusive"}, {"label": "ТВ pay", "status": "nonexclusive"}], "platform": "INT_TNT4 · ТНТint", "role": "Получатель международных прав от ГПМ РТВ", "limitation": "", "exclusion": true, "episodes": 13, "territoryFull": "Весь мир, исключая: Россия, Украина", "limitationDetail": "", "sublicensing": "ALL"}, {"id": "druzhba", "name": "Дружба Мьюзик ООО", "schemeName": "Дружба Мьюзик", "vho": "Да", "period": "03.02.2025 — 05.02.2028", "contract": "Дк218934", "territory": "Весь мир, исключая Украину и Россию", "rights": [{"label": "Catch Up", "status": "nonexclusive"}, {"label": "Simulcast", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}, {"label": "ТВ free", "status": "nonexclusive"}, {"label": "ТВ pay", "status": "nonexclusive"}], "platform": "INT_TNT4 · ТНТint", "role": "Получатель международных прав от ГПМ РТВ", "limitation": "", "exclusion": true, "episodes": 7, "territoryFull": "Весь мир, исключая: Россия, Украина", "limitationDetail": "", "sublicensing": "ALL"}, {"id": "kinopoisk", "name": "Кинопоиск ООО", "schemeName": "Кинопоиск", "vho": "Нет", "period": "20.01.2025 — 20.01.2029", "contract": "Дк219154", "territory": "СНГ+ и Россия", "rights": [{"label": "AVOD", "status": "exclusive"}, {"label": "EST", "status": "exclusive"}, {"label": "FVOD", "status": "exclusive"}, {"label": "SVOD", "status": "exclusive"}, {"label": "TVOD", "status": "exclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "Кинопоиск", "role": "Получатель прав через Премьер", "limitation": "ХОЛДБЭК по договору с Кинопоиском (рег. Дк219154)", "exclusion": false, "episodes": 20, "territoryFull": "Россия; СНГ+: Грузия, Украина, Абхазия, Южная Осетия, Азербайджан, Армения, Беларусь, Кыргызстан, Молдова, Таджикистан, Туркменистан, Узбекистан, Казахстан", "limitationDetail": "Ограничивающий договор: Дк219154\nОграничение: ХОЛДБЭКИ И ОСОБЫЕ УСЛОВИЯ\n\nДемис и Марина\t\nс 13.01.2025 по 13.01.2029  (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по 13.01.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты открытия прав)\n\t\nКупцы и дети\t\nс 20.01.2025 по 20.01.2029 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по 20.01.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nДевушки с Макаровым. 5 сезон\nс 20.01.2025 по 20.01.2029 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по 20.01.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nУнивер. Молодые\t\nс 10.03.2025 по 10.03.2030 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \n с 29.05.2025 по 10.03.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nОстаться друзьями \t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по TBD ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nПожить как люди \t\nс 14.04.2025 по 14.04.2029 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2029 по 14.04.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nДень семьи (Странная фамилия)\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\nВторой брак \t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nБукины. 2 сезон\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nПро это самое\t\nс 14.04.2025 по 14.04.2029 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по 14.04.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\nРейс 314\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\nПервокурсницы. 2 сезон\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\nУнивер. Молодые (продолжение)\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nДевушки с Макаровым. 4 сезон\t\nс 29.05.2025 по 20.01.2029 (ХБ с ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD\n\t\t\nПервокурсницы. 1 сезон\t\nTBD  (ХБ с ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD\n\nИСКЛЮЧЕНИЯ ИЗ ХОЛДБЭКА\nНе является нарушением исключительной лицензии со стороны Лицензиара:\nА) использование Контента посредством Бесплатного телевизионного показа (Free TV) в составе телеканалов компаний Группы ГПМ на территории Российской Федерации; \nБ) использование Контента посредством Платного телевизионного показа (Pay TV) в составе телеканалов компаний Группы ГПМ на территории всех стран мира, за исключением Российской Федерации; \nВ) доведение первых двух серий Контента способами FVOD и/или AVOD на территории всего мира на официальном сайте телеканала «ТНТ»  официальном сайте телеканала «ТНТ»  (https://tnt-online.ru), на официальной странице телеканала «ТНТ» на сайте Rutube (https://rutube.ru/feeds/tnt/) и «YouTube», а также на веб-сайте https://premier.one/ и относящихся к нему программных пр", "sublicensing": "ALL"}, {"id": "kinopoisk", "name": "Кинопоиск ООО", "schemeName": "Кинопоиск", "vho": "Нет", "period": "20.01.2025 — 20.01.2031", "contract": "Дк219154", "territory": "Весь мир, исключая СНГ+ и Россию", "rights": [{"label": "AVOD", "status": "nonexclusive"}, {"label": "EST", "status": "nonexclusive"}, {"label": "FVOD", "status": "nonexclusive"}, {"label": "SVOD", "status": "nonexclusive"}, {"label": "TVOD", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "Кинопоиск", "role": "Получатель прав через Премьер", "limitation": "ХОЛДБЭК по договору с Кинопоиском (рег. Дк219154)", "exclusion": true, "episodes": 20, "territoryFull": "Весь мир, исключая: Россия; СНГ+: Грузия, Украина, Абхазия, Южная Осетия, Азербайджан, Армения, Беларусь, Кыргызстан, Молдова, Таджикистан, Туркменистан, Узбекистан, Казахстан", "limitationDetail": "Ограничивающий договор: Дк219154\nОграничение: ХОЛДБЭКИ И ОСОБЫЕ УСЛОВИЯ\n\nДемис и Марина\t\nс 13.01.2025 по 13.01.2029  (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по 13.01.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты открытия прав)\n\t\nКупцы и дети\t\nс 20.01.2025 по 20.01.2029 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по 20.01.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nДевушки с Макаровым. 5 сезон\nс 20.01.2025 по 20.01.2029 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по 20.01.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nУнивер. Молодые\t\nс 10.03.2025 по 10.03.2030 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \n с 29.05.2025 по 10.03.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nОстаться друзьями \t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по TBD ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nПожить как люди \t\nс 14.04.2025 по 14.04.2029 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2029 по 14.04.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nДень семьи (Странная фамилия)\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\nВторой брак \t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nБукины. 2 сезон\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nПро это самое\t\nс 14.04.2025 по 14.04.2029 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по 14.04.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\nРейс 314\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\nПервокурсницы. 2 сезон\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\nУнивер. Молодые (продолжение)\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nДевушки с Макаровым. 4 сезон\t\nс 29.05.2025 по 20.01.2029 (ХБ с ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD\n\t\t\nПервокурсницы. 1 сезон\t\nTBD  (ХБ с ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD\n\nИСКЛЮЧЕНИЯ ИЗ ХОЛДБЭКА\nНе является нарушением исключительной лицензии со стороны Лицензиара:\nА) использование Контента посредством Бесплатного телевизионного показа (Free TV) в составе телеканалов компаний Группы ГПМ на территории Российской Федерации; \nБ) использование Контента посредством Платного телевизионного показа (Pay TV) в составе телеканалов компаний Группы ГПМ на территории всех стран мира, за исключением Российской Федерации; \nВ) доведение первых двух серий Контента способами FVOD и/или AVOD на территории всего мира на официальном сайте телеканала «ТНТ»  официальном сайте телеканала «ТНТ»  (https://tnt-online.ru), на официальной странице телеканала «ТНТ» на сайте Rutube (https://rutube.ru/feeds/tnt/) и «YouTube», а также на веб-сайте https://premier.one/ и относящихся к нему программных пр", "sublicensing": "ALL"}, {"id": "kinopoisk", "name": "Кинопоиск ООО", "schemeName": "Кинопоиск", "vho": "Нет", "period": "21.01.2025 — 20.01.2031", "contract": "Дк219154", "territory": "СНГ+ и Россия", "rights": [{"label": "AVOD", "status": "nonexclusive"}, {"label": "EST", "status": "nonexclusive"}, {"label": "FVOD", "status": "nonexclusive"}, {"label": "SVOD", "status": "nonexclusive"}, {"label": "TVOD", "status": "nonexclusive"}, {"label": "Фрагменты для анонсов", "status": "nonexclusive"}], "platform": "Кинопоиск", "role": "Получатель прав через Премьер", "limitation": "ХОЛДБЭК по договору с Кинопоиском (рег. Дк219154)", "exclusion": false, "episodes": 20, "territoryFull": "Россия; СНГ+: Грузия, Украина, Абхазия, Южная Осетия, Азербайджан, Армения, Беларусь, Кыргызстан, Молдова, Таджикистан, Туркменистан, Узбекистан, Казахстан", "limitationDetail": "Ограничивающий договор: Дк219154\nОграничение: ХОЛДБЭКИ И ОСОБЫЕ УСЛОВИЯ\n\nДемис и Марина\t\nс 13.01.2025 по 13.01.2029  (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по 13.01.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты открытия прав)\n\t\nКупцы и дети\t\nс 20.01.2025 по 20.01.2029 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по 20.01.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nДевушки с Макаровым. 5 сезон\nс 20.01.2025 по 20.01.2029 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по 20.01.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nУнивер. Молодые\t\nс 10.03.2025 по 10.03.2030 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \n с 29.05.2025 по 10.03.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nОстаться друзьями \t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по TBD ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nПожить как люди \t\nс 14.04.2025 по 14.04.2029 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2029 по 14.04.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nДень семьи (Странная фамилия)\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\nВторой брак \t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nБукины. 2 сезон\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nПро это самое\t\nс 14.04.2025 по 14.04.2029 (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nс 29.05.2025 по 14.04.2026 ХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\nРейс 314\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\nПервокурсницы. 2 сезон\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\nУнивер. Молодые (продолжение)\t\nTBD (ХБ до ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD. \nХБ на Бесплтаное ТВ на РФ и Платное ТВ на мир, кроме РФ с 29.05.2025 по TBD (с ДАТЫ приложения и по истеч. 12 месяцев с даты)\n\t\t\nДевушки с Макаровым. 4 сезон\t\nс 29.05.2025 по 20.01.2029 (ХБ с ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD\n\t\t\nПервокурсницы. 1 сезон\t\nTBD  (ХБ с ДАТЫ приложения) на SVOD, TVOD, EST, AVOD, FVOD\n\nИСКЛЮЧЕНИЯ ИЗ ХОЛДБЭКА\nНе является нарушением исключительной лицензии со стороны Лицензиара:\nА) использование Контента посредством Бесплатного телевизионного показа (Free TV) в составе телеканалов компаний Группы ГПМ на территории Российской Федерации; \nБ) использование Контента посредством Платного телевизионного показа (Pay TV) в составе телеканалов компаний Группы ГПМ на территории всех стран мира, за исключением Российской Федерации; \nВ) доведение первых двух серий Контента способами FVOD и/или AVOD на территории всего мира на официальном сайте телеканала «ТНТ»  официальном сайте телеканала «ТНТ»  (https://tnt-online.ru), на официальной странице телеканала «ТНТ» на сайте Rutube (https://rutube.ru/feeds/tnt/) и «YouTube», а также на веб-сайте https://premier.one/ и относящихся к нему программных пр", "sublicensing": "ALL"}];

function applyRightsRowsV70(){
  if (typeof rightsRowsV63 !== 'undefined' && Array.isArray(rightsRowsV63)) {
    rightsRowsV63.splice(0, rightsRowsV63.length, ...rightsRowsV70);
  }
}
function rightsRowsActiveV70(){
  applyRightsRowsV70();
  const sel = document.getElementById('rightsVhoSelect');
  const vho = sel ? sel.value : 'ALL';
  const base = (typeof rightsRowsV63 !== 'undefined' && Array.isArray(rightsRowsV63)) ? rightsRowsV63 : rightsRowsV70;
  return vho === 'ALL' ? base : base.filter(r => r.vho === vho);
}
function uniqueValuesV70(arr){ return [...new Set((arr||[]).filter(v => v !== undefined && v !== null && String(v).trim() !== ''))]; }
function shortRuDateV70(v){ const m=String(v||'').match(/(\d{2})\.(\d{2})\.(\d{4})/); return m ? `${m[1]}.${m[2]}.${m[3].slice(2)}` : String(v||''); }
function shortPeriodTextV70(v){ const parts=String(v||'').split('—').map(s=>s.trim()); return parts.length===2 ? `${shortRuDateV70(parts[0])}-${shortRuDateV70(parts[1])}` : String(v||''); }
function periodForEntityV70(entityId){
  const rows = rightsRowsActiveV70().filter(r => r.id === entityId);
  if(!rows.length && entityId === 'owner') return '11.12.24-10.12.94';
  if(!rows.length) return '';
  const starts = rows.map(r => String(r.period).split('—')[0].trim()).sort();
  const ends = rows.map(r => String(r.period).split('—')[1].trim()).sort();
  return `${shortRuDateV70(starts[0])}-${shortRuDateV70(ends[ends.length-1])}`;
}
function rightsToObjectsV70(rights){ return (rights||[]).map(r => typeof r === 'object' ? r : {label:r, status:'exclusive'}); }
function rowHasExclusionV70(row){ return !!(row && row.exclusion); }
function rowHasExclusiveV70(row){ return rightsToObjectsV70(row && row.rights).some(r => r.status !== 'nonexclusive'); }
function rowHasNonexclusiveV70(row){ return rightsToObjectsV70(row && row.rights).some(r => r.status === 'nonexclusive'); }
function rightChipsHtmlV70(rights){ return rightsToObjectsV70(rights).map(r => `<span class="rightChip ${r.status||'exclusive'}">${r.label}</span>`).join(''); }
function statusSwatchesHtmlV70(row){
  const bits=[];
  if(rowHasExclusiveV70(row)) bits.push('<span class="statusBadge swatch exclusive" title="Эксклюзивно"></span>');
  if(rowHasNonexclusiveV70(row)) bits.push('<span class="statusBadge swatch nonexclusive" title="Неэксклюзивно"></span>');
  if(rowHasExclusionV70(row)) bits.push('<span class="statusBadge swatch exclusion" title="Исключая"></span>');
  return bits.join('');
}
function episodesSummaryV70(rows){
  const vals = uniqueValuesV70((rows||[]).map(r => r.episodes));
  return vals.length <= 1 ? (vals[0] ? `${vals[0]}` : '—') : vals.join(' / ');
}
function getRightsDetailsMap(){
  const rows = rightsRowsActiveV70();
  const grouped={};
  rows.forEach(r => { if(!grouped[r.id]) grouped[r.id]=[]; grouped[r.id].push(r); });
  const make=(id,title,role,platformDefault)=>{
    const arr=grouped[id]||[];
    if(!arr.length) return null;
    return {
      title, role,
      contract: uniqueValuesV70(arr.map(x=>x.contract)).join(' / '),
      territory: uniqueValuesV70(arr.map(x=>x.territory)).join('; '),
      platform: uniqueValuesV70(arr.map(x=>x.platform||platformDefault)).join('; '),
      sale: id === 'owner' ? 'Передача прав в ГПМ РТВ' : 'Да',
      sublicensing: id === 'kinopoisk' ? 'Через Премьер' : (id === 'premier' ? 'Кинопоиск / партнёры' : 'ALL'),
      episodes: episodesSummaryV70(arr),
      limitations: uniqueValuesV70(arr.map(x=>x.limitation)),
      rows: arr
    };
  };
  const map={
    owner: make('owner','Comedy Club Production','Правообладатель',''),
    gpm: { title:'ООО «ГПМ РТВ»', role:'Держатель прав', contract:'Д475897', territory:'Весь мир', platform:'ГПМ РТВ', sale:'Разрешена дальнейшая продажа / передача', sublicensing:'ALL', episodes:'20', limitations:[], rows:[{period:'11.12.2024 — 10.12.2094', contract:'Д475897', territory:'Весь мир', rights:[{label:'ALL',status:'exclusive'}], limitation:'', exclusion:false, episodes:20}]},
    tnt: make('tnt','ТНТ','Получатель прав от ГПМ РТВ','ТНТ'),
    premier: make('premier','Премьер','Получатель цифровых прав от ГПМ РТВ','PREMIER'),
    kinopoisk: make('kinopoisk','Кинопоиск','Получатель прав через Премьер','Кинопоиск'),
    druzhba: make('druzhba','Дружба Мьюзик','Получатель международных прав от ГПМ РТВ','INT_TNT4 · ТНТint')
  };
  Object.keys(map).forEach(k => { if(!map[k]) delete map[k]; });
  return map;
}
function renderRights(){
  applyRightsRowsV70();
  selectedRightsEntity = null;
  const data = getSelectedRightsData();
  renderRightsFlowRedesign(data);
  renderRightsDetail();
  renderRightsCoverageMap(data);
}
function renderRightsFlowRedesign(data){
  const el = document.getElementById('rightsFlow');
  if(!el) return;
  if(!data){ el.innerHTML='<div class="noRightsBlock">Для выбранного сезона права пока не загружены.</div>'; return; }
  const rows = rightsRowsActiveV70();
  const showOwner=((document.getElementById('rightsVhoSelect')||{value:'ALL'}).value!=='Да');
  const showTnt=rows.some(r=>r.id==='tnt');
  const showPremier=rows.some(r=>r.id==='premier') || rows.some(r=>r.id==='kinopoisk');
  const showKinopoisk=rows.some(r=>r.id==='kinopoisk');
  const showDruzhba=rows.some(r=>r.id==='druzhba');
  el.innerHTML=`
    <div class="rightsScheme">
      ${showOwner ? `
      <div class="${rightsNodeClass('owner','schemeNode source')}" onclick="selectRightsEntity('owner')">
        <span class="nodeOver">Правообладатель</span>
        <span class="nodeTitle">Comedy Club Production</span>
      </div>
      <div class="schemeConnector"></div>` : ''}
      <div class="${rightsNodeClass('gpm','schemeNode hub')}" onclick="selectRightsEntity('gpm')">
        <span class="nodeOver">Держатель прав</span>
        <span class="nodeTitle">ООО «ГПМ РТВ»</span>
        <span class="nodeDate schemePeriodWhite v70Thin">11.12.24-10.12.94</span>
      </div>
      <div class="schemeConnector"></div>
      <div class="schemeGrid">
        ${showTnt ? `<div class="schemeCol"><div class="${rightsNodeClass('tnt','schemeNode primary')}" onclick="selectRightsEntity('tnt')"><span class="nodeOver">Продажа от ГПМ РТВ</span><span class="nodeTitle">ТНТ</span><span class="nodeDate schemePeriodWhite v70Thin">${periodForEntityV70('tnt')}</span></div></div>` : ''}
        ${showPremier ? `<div class="schemeCol"><div class="${rightsNodeClass('premier','schemeNode primary')}" onclick="selectRightsEntity('premier')"><span class="nodeOver">Продажа от ГПМ РТВ</span><span class="nodeTitle">Премьер</span><span class="nodeDate schemePeriodWhite v70Thin">${periodForEntityV70('premier')}</span></div>${showKinopoisk ? `<div class="schemeSubLink"><div class="${rightsNodeClass('kinopoisk','schemeNode secondary')}" onclick="selectRightsEntity('kinopoisk')"><span class="nodeOver">Сублицензия / продажа</span><span class="nodeTitle">Кинопоиск</span><span class="nodeDate schemePeriodWhite v70Thin">${periodForEntityV70('kinopoisk')}</span></div></div>` : ''}</div>` : ''}
        ${showDruzhba ? `<div class="schemeCol full"><div class="${rightsNodeClass('druzhba','schemeNode primary')}" onclick="selectRightsEntity('druzhba')"><span class="nodeOver">Продажа от ГПМ РТВ</span><span class="nodeTitle">Дружба Мьюзик</span><span class="nodeDate schemePeriodWhite v70Thin">${periodForEntityV70('druzhba')}</span></div></div>` : ''}
      </div>
    </div>`;
}

function exclusionChipsHtmlV71(row){
  const items = (row && row.exclusions) || [];
  return items.length ? `<div class="detailExclusionChips">${items.map(x => `<span class="exclusionTextChip">${x}</span>`).join('')}</div>` : '';
}

function renderRightsDetail(){
  const card=document.getElementById('rightsDetailCard');
  const el=document.getElementById('rightsDetail');
  if(!card || !el) return;
  const detailsMap=getRightsDetailsMap();
  const d=selectedRightsEntity ? detailsMap[selectedRightsEntity] : null;
  if(!d){
    card.style.display='block';
    el.innerHTML=`<div class="rightsDetailEmpty"><b>Детализация прав</b><span>Нажмите на блок схемы, чтобы посмотреть права, периоды, территории, кол-во серий и ограничения.</span></div>`;
    return;
  }
  const rows=[
    ['Роль в цепочке', d.role],
    ['Договор', d.contract],
    ['Территория', d.territory],
    ['Канал / платформа', d.platform],
    ['Продажа', d.sale],
    ['Сублицензирование', d.sublicensing],
    ['Кол-во серий', d.episodes]
  ];
  const rightsRowsHtml=(d.rows||[]).map(row => `
    <div class="detailRightsRow">
      <div class="detailRightsRowTop">
        <div class="detailPeriod">${row.period}${row.contract ? ` <span class="contractMini">: ${row.contract}</span>` : ''}</div>
        <div class="detailStatusSet">${statusSwatchesHtmlV70(row)}</div>
      </div>
      <div class="detailEpisodes">Кол-во серий: <b>${row.episodes || '—'}</b></div>
      <div class="detailRightsChips">${rightChipsHtmlV70(row.rights)}</div>
      ${exclusionChipsHtmlV71(row)}
      <div class="detailTerritoryRow"><span class="territoryPill plain v70WhiteTerritory">${row.territory || ''}</span></div>
    </div>`).join('');
  el.innerHTML=`
    <div class="rightsDetailHeader"><div><span>Детализация прав</span><h2>${d.title}</h2></div><button onclick="selectedRightsEntity=null; renderRightsFlowRedesign(getSelectedRightsData()); renderRightsDetail()">×</button></div>
    <div class="rightsDetailGrid">${rows.map(([k,v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}</div>
    <div class="rightsDetailSection"><span>Права по периодам</span><div class="detailRightsList">${rightsRowsHtml}</div></div>
    <div class="rightsDetailSection warning"><span>Ограничения</span><p>${(d.limitations && d.limitations.length) ? d.limitations.join('<br><br>') : 'Нет ограничений'}</p></div>`;
}
function renderRightsCoverageMap(){
  const el=document.getElementById('rightsCoverageMap');
  if(el) el.innerHTML='';
}


/* v72 detail layout: legend moved into detail, no date swatches */
function detailColorLegendHtmlV72(){
  return `
    <div class="rightsColorLegend detailLegend">
      <span class="legendTitle">Цветовая кодировка</span>
      <div class="legendBadges">
        <span class="statusBadge exclusive">Эксклюзивно</span>
        <span class="statusBadge nonexclusive">Неэксклюзивно</span>
        <span class="statusBadge exclusion">Исключая</span>
      </div>
    </div>
  `;
}

function renderRightsDetail(){
  const card=document.getElementById('rightsDetailCard');
  const el=document.getElementById('rightsDetail');
  if(!card || !el) return;
  const detailsMap=getRightsDetailsMap();
  const d=selectedRightsEntity ? detailsMap[selectedRightsEntity] : null;

  if(!d){
    card.style.display='block';
    el.innerHTML=`
      ${detailColorLegendHtmlV72()}
      <div class="rightsDetailEmpty">
        <b>Детализация прав</b>
        <span>Нажмите на блок схемы, чтобы посмотреть права, периоды, территории, кол-во серий и ограничения.</span>
      </div>
    `;
    return;
  }

  const rows=[
    ['Роль в цепочке', d.role],
    ['Договор', d.contract],
    ['Территория', d.territory],
    ['Канал / платформа', d.platform],
    ['Продажа', d.sale],
    ['Сублицензирование', d.sublicensing]
  ];

  const rightsRowsHtml=(d.rows||[]).map(row => `
    <div class="detailRightsRow v72RightsRow">
      <div class="detailRightsRowTop v72PeriodLine">
        <div class="detailPeriod">${row.period}${row.contract ? ` <span class="contractMini">: ${row.contract}</span>` : ''}</div>
        <div class="detailEpisodesInline">Кол-во серий: <b>${row.episodes || '—'}</b></div>
      </div>

      <div class="detailTerritoryRow v72TerritoryLine">
        <span class="territoryPill plain v70WhiteTerritory">${row.territory || ''}</span>
      </div>

      <div class="detailRightsChips v72RightsChips">${rightChipsHtmlV70(row.rights)}</div>
      ${exclusionChipsHtmlV71(row)}
    </div>
  `).join('');

  el.innerHTML=`
    ${detailColorLegendHtmlV72()}
    <div class="rightsDetailHeader">
      <div>
        <span>Детализация прав</span>
        <h2>${d.title}</h2>
      </div>
      <button onclick="selectedRightsEntity=null; renderRightsFlowRedesign(getSelectedRightsData()); renderRightsDetail()">×</button>
    </div>
    <div class="rightsDetailGrid">${rows.map(([k,v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}</div>
    <div class="rightsDetailSection">
      <span>Права по периодам</span>
      <div class="detailRightsList">${rightsRowsHtml}</div>
    </div>
    <div class="rightsDetailSection warning v72LimitationsLast">
      <span>Ограничения</span>
      <p>${(d.limitations && d.limitations.length) ? d.limitations.join('<br><br>') : 'Нет ограничений'}</p>
    </div>
  `;
}


/* v73: expandable detailed limitations and countries */
const expandedTerritoriesV73 = new Set();
const expandedLimitationsV73 = new Set();

function safeHtmlV73(value){
  return String(value || '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#039;');
}

function detailTextHtmlV73(value){
  return safeHtmlV73(value).replace(/\n/g, '<br>');
}

function toggleTerritoryV73(key){
  if (expandedTerritoriesV73.has(key)) expandedTerritoriesV73.delete(key);
  else expandedTerritoriesV73.add(key);
  renderRightsDetail();
}

function toggleLimitationsV73(entityKey){
  if (expandedLimitationsV73.has(entityKey)) expandedLimitationsV73.delete(entityKey);
  else expandedLimitationsV73.add(entityKey);
  renderRightsDetail();
}

function territoryButtonHtmlV73(row, rowKey){
  const full = row.territoryFull || row.territory || '';
  const compact = row.territory || '';
  const isExpanded = expandedTerritoriesV73.has(rowKey);
  const needsExpand = full && full !== compact;
  return `
    <button class="territoryToggleBtn" onclick="${needsExpand ? `toggleTerritoryV73('${rowKey}')` : ''}">
      <span>${safeHtmlV73(compact)}</span>
      ${needsExpand ? `<b>${isExpanded ? 'Свернуть' : 'Показать страны'}</b>` : ''}
    </button>
    ${isExpanded && needsExpand ? `<div class="territoryFullText">${detailTextHtmlV73(full)}</div>` : ''}
  `;
}

function limitationBlockHtmlV73(d, entityKey){
  const summaries = (d.limitations && d.limitations.length) ? d.limitations : ['Нет ограничений'];
  const details = uniqueValuesV70((d.rows || []).map(r => r.limitationDetail));
  const hasDetails = details.length > 0;
  const isExpanded = expandedLimitationsV73.has(entityKey);
  return `
    <div class="rightsDetailSection warning v72LimitationsLast">
      <button class="limitationToggleBtn" onclick="${hasDetails ? `toggleLimitationsV73('${entityKey}')` : ''}">
        <span>Ограничения</span>
        ${hasDetails ? `<b>${isExpanded ? 'Свернуть подробно' : 'Показать подробно'}</b>` : ''}
      </button>
      <p>${summaries.map(x => detailTextHtmlV73(x)).join('<br><br>')}</p>
      ${hasDetails && isExpanded ? `<div class="limitationDetailedText">${details.map(x => detailTextHtmlV73(x)).join('<br><br>')}</div>` : ''}
    </div>
  `;
}

function renderRightsDetail(){
  const card=document.getElementById('rightsDetailCard');
  const el=document.getElementById('rightsDetail');
  if(!card || !el) return;
  const detailsMap=getRightsDetailsMap();
  const d=selectedRightsEntity ? detailsMap[selectedRightsEntity] : null;

  if(!d){
    card.style.display='block';
    el.innerHTML=`
      ${detailColorLegendHtmlV72()}
      <div class="rightsDetailEmpty">
        <b>Детализация прав</b>
        <span>Нажмите на блок схемы, чтобы посмотреть права, периоды, территории, кол-во серий и ограничения.</span>
      </div>
    `;
    return;
  }

  const rows=[
    ['Роль в цепочке', d.role],
    ['Договор', d.contract],
    ['Территория', d.territory],
    ['Канал / платформа', d.platform],
    ['Продажа', d.sale],
    ['Сублицензирование', d.sublicensing]
  ];

  const rightsRowsHtml=(d.rows||[]).map((row, idx) => {
    const rowKey = `${selectedRightsEntity}_${idx}`;
    return `
      <div class="detailRightsRow v72RightsRow">
        <div class="detailRightsRowTop v72PeriodLine">
          <div class="detailPeriod">${safeHtmlV73(row.period)}${row.contract ? ` <span class="contractMini">: ${safeHtmlV73(row.contract)}</span>` : ''}</div>
          <div class="detailEpisodesInline">Кол-во серий: <b>${safeHtmlV73(row.episodes || '—')}</b></div>
        </div>
        <div class="detailTerritoryRow v72TerritoryLine">
          ${territoryButtonHtmlV73(row, rowKey)}
        </div>
        <div class="detailRightsChips v72RightsChips">${rightChipsHtmlV70(row.rights)}</div>
        ${exclusionChipsHtmlV71(row)}
      </div>
    `;
  }).join('');

  const entityKey = selectedRightsEntity || 'none';

  el.innerHTML=`
    ${detailColorLegendHtmlV72()}
    <div class="rightsDetailHeader">
      <div>
        <span>Детализация прав</span>
        <h2>${safeHtmlV73(d.title)}</h2>
      </div>
      <button onclick="selectedRightsEntity=null; renderRightsFlowRedesign(getSelectedRightsData()); renderRightsDetail()">×</button>
    </div>
    <div class="rightsDetailGrid">${rows.map(([k,v]) => `<div><span>${safeHtmlV73(k)}</span><b>${safeHtmlV73(v)}</b></div>`).join('')}</div>
    <div class="rightsDetailSection">
      <span>Права по периодам</span>
      <div class="detailRightsList">${rightsRowsHtml}</div>
    </div>
    ${limitationBlockHtmlV73(d, entityKey)}
  `;
}


/* v75: report start + cleaner detail grid + sublicensing per row */
function territoryButtonHtmlV73(row, rowKey){
  const full = row.territoryFull || row.territory || '';
  const compact = row.territory || '';
  const isExpanded = expandedTerritoriesV73.has(rowKey);
  const needsExpand = full && full !== compact;
  return `
    <button class="territoryToggleBtn" onclick="${needsExpand ? `toggleTerritoryV73('${rowKey}')` : ''}">
      <span>${safeHtmlV73(compact)}</span>
      ${needsExpand ? `<b>${isExpanded ? 'Свернуть' : 'Подробно'}</b>` : ''}
    </button>
    ${isExpanded && needsExpand ? `<div class="territoryFullText">${detailTextHtmlV73(full)}</div>` : ''}
  `;
}

function renderRightsDetail(){
  const card=document.getElementById('rightsDetailCard');
  const el=document.getElementById('rightsDetail');
  if(!card || !el) return;
  const detailsMap=getRightsDetailsMap();
  const d=selectedRightsEntity ? detailsMap[selectedRightsEntity] : null;

  if(!d){
    card.style.display='block';
    el.innerHTML=`
      ${detailColorLegendHtmlV72()}
      <div class="rightsDetailEmpty">
        <b>Детализация прав</b>
        <span>Нажмите на блок схемы, чтобы посмотреть права, периоды, территории, кол-во серий, сублицензирование и ограничения.</span>
      </div>
    `;
    return;
  }

  const rows=[
    ['Роль в цепочке', d.role],
    ['Договор', d.contract],
    ['Канал / платформа', d.platform],
    ['Продажа', d.sale]
  ];

  const rightsRowsHtml=(d.rows||[]).map((row, idx) => {
    const rowKey = `${selectedRightsEntity}_${idx}`;
    return `
      <div class="detailRightsRow v72RightsRow">
        <div class="detailRightsRowTop v72PeriodLine">
          <div class="detailPeriod">${safeHtmlV73(row.period)}${row.contract ? ` <span class="contractMini">: ${safeHtmlV73(row.contract)}</span>` : ''}</div>
          <div class="detailEpisodesInline">Кол-во серий: <b>${safeHtmlV73(row.episodes || '—')}</b></div>
        </div>

        <div class="detailTerritoryRow v72TerritoryLine">
          ${territoryButtonHtmlV73(row, rowKey)}
        </div>

        <div class="detailSubRow">
          <span>Сублицензирование</span>
          <b>${safeHtmlV73(row.sublicensing || '—')}</b>
        </div>

        <div class="detailRightsChips v72RightsChips">${rightChipsHtmlV70(row.rights)}</div>
        ${exclusionChipsHtmlV71(row)}
      </div>
    `;
  }).join('');

  const entityKey = selectedRightsEntity || 'none';

  el.innerHTML=`
    ${detailColorLegendHtmlV72()}
    <div class="rightsDetailHeader">
      <div>
        <span>Детализация прав</span>
        <h2>${safeHtmlV73(d.title)}</h2>
      </div>
      <button onclick="selectedRightsEntity=null; renderRightsFlowRedesign(getSelectedRightsData()); renderRightsDetail()">×</button>
    </div>
    <div class="rightsDetailGrid">${rows.map(([k,v]) => `<div><span>${safeHtmlV73(k)}</span><b>${safeHtmlV73(v)}</b></div>`).join('')}</div>
    <div class="rightsDetailSection">
      <span>Права по периодам</span>
      <div class="detailRightsList">${rightsRowsHtml}</div>
    </div>
    ${limitationBlockHtmlV73(d, entityKey)}
  `;
}


/* v76: compact channel/platform and sale in one row */
function renderRightsDetail(){
  const card=document.getElementById('rightsDetailCard');
  const el=document.getElementById('rightsDetail');
  if(!card || !el) return;
  const detailsMap=getRightsDetailsMap();
  const d=selectedRightsEntity ? detailsMap[selectedRightsEntity] : null;

  if(!d){
    card.style.display='block';
    el.innerHTML=`
      ${detailColorLegendHtmlV72()}
      <div class="rightsDetailEmpty">
        <b>Детализация прав</b>
        <span>Нажмите на блок схемы, чтобы посмотреть права, периоды, территории, кол-во серий, сублицензирование и ограничения.</span>
      </div>
    `;
    return;
  }

  const mainRows=[
    ['Роль в цепочке', d.role],
    ['Договор', d.contract]
  ];

  const rightsRowsHtml=(d.rows||[]).map((row, idx) => {
    const rowKey = `${selectedRightsEntity}_${idx}`;
    return `
      <div class="detailRightsRow v72RightsRow">
        <div class="detailRightsRowTop v72PeriodLine">
          <div class="detailPeriod">${safeHtmlV73(row.period)}${row.contract ? ` <span class="contractMini">: ${safeHtmlV73(row.contract)}</span>` : ''}</div>
          <div class="detailEpisodesInline">Кол-во серий: <b>${safeHtmlV73(row.episodes || '—')}</b></div>
        </div>

        <div class="detailTerritoryRow v72TerritoryLine">
          ${territoryButtonHtmlV73(row, rowKey)}
        </div>

        <div class="detailSubRow">
          <span>Сублицензирование</span>
          <b>${safeHtmlV73(row.sublicensing || '—')}</b>
        </div>

        <div class="detailRightsChips v72RightsChips">${rightChipsHtmlV70(row.rights)}</div>
        ${exclusionChipsHtmlV71(row)}
      </div>
    `;
  }).join('');

  const entityKey = selectedRightsEntity || 'none';

  el.innerHTML=`
    ${detailColorLegendHtmlV72()}
    <div class="rightsDetailHeader">
      <div>
        <span>Детализация прав</span>
        <h2>${safeHtmlV73(d.title)}</h2>
      </div>
      <button onclick="selectedRightsEntity=null; renderRightsFlowRedesign(getSelectedRightsData()); renderRightsDetail()">×</button>
    </div>

    <div class="rightsDetailGrid v76MainGrid">
      ${mainRows.map(([k,v]) => `<div><span>${safeHtmlV73(k)}</span><b>${safeHtmlV73(v)}</b></div>`).join('')}
    </div>

    <div class="detailCompactInfoRow">
      <div>
        <span>Канал / платформа</span>
        <b>${safeHtmlV73(d.platform)}</b>
      </div>
      <div>
        <span>Продажа</span>
        <b>${safeHtmlV73(d.sale)}</b>
      </div>
    </div>

    <div class="rightsDetailSection">
      <span>Права по периодам</span>
      <div class="detailRightsList">${rightsRowsHtml}</div>
    </div>
    ${limitationBlockHtmlV73(d, entityKey)}
  `;
}
