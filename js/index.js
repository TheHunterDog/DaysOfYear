window.onload = function() {
  let app = document.getElementById('app');
  const days = renderDays()
  app.innerHTML = days.outerHTML;
}; 
const totaldays = 365;

const renderDays = () => {
  const today = getDayofYear();
  const daysContainer = document.createElement('div');
  daysContainer.classList.add('days');
  daysContainer.innerHTML = '';

  for (let i = 1; i <= totaldays; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    if(i === today) {
      dayElement.classList.add('today');
    }
    if(i > today) {
      dayElement.classList.add('future');
    }
    if(i<today) {
      dayElement.classList.add('past');
    }
    daysContainer.appendChild(dayElement);
  }
  return daysContainer
}

const getDayofYear = () => {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
}