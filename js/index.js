window.onload = function() {
  initEvents();
  setYear(new Date().getFullYear());
  let app = document.getElementById('app');
  const days = renderDays()
  app.innerHTML = days.outerHTML;
}; 
const totaldays = 365;

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
}

const renderDays = () => {
  const now = new Date();
  const today = getDayofYear(now);
  const daysContainer = document.createElement('div');
  daysContainer.classList.add('days');
  daysContainer.innerHTML = '';
  month = 1;
  daysInMonth(month, now.getFullYear());
  day=1;

  for (let i = 1; i <= totaldays; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add(`month-${month}`);
    dayElement.classList.add(`day-${day}`);
    dayElement.classList.add(`day-total-${i}`);
    dayElement.classList.add(`day-${getDayName(new Date(now.getFullYear(), month - 1, day).getDay())}`);
    dayElement.classList.add('day');
    if(day == now.getDate() && month == now.getMonth() + 1) {
      dayElement.classList.add('today');
    }
    if(i > today) {
      dayElement.classList.add('future');
    }
    if(i<today) {
      dayElement.classList.add('past');
    }
    // dayElement.innerHTML = day;
    daysContainer.appendChild(dayElement);
    day++;
    if(day > daysInMonth(month, now.getFullYear())) {
      month++;
      day = 1;
    }
  }
  return daysContainer
}

const getDayName = (day) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[day];
}

const getDayofYear = (today) => {
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day + 1;
}

const initEvents = () => {

  const acceptButton = document.getElementById('acceptCookies');
  const rejectButton = document.getElementById('rejectCookies');
  const banner = document.getElementById('banner');
  acceptButton.addEventListener('click', () => {
    acceptTracking();
    banner.style.display = 'none';
  });
  rejectButton.addEventListener('click', () => {
    rejectTracking();
    banner.style.display = 'none';
  });
}

const acceptTracking = () => {
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JX246GVJ6L';
  document.head.appendChild(script);
  script.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JX246GVJ6L');
  };

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JX246GVJ6L');
}

const rejectTracking = () => {
  console.log('Tracking rejected');
}
const setYear = (year) => {
  const yearPlace = document.getElementById('year');
  yearPlace.innerHTML = year;
}