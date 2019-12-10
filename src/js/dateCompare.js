export function getToday() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  today = `${yyyy}${mm}${dd}`;

  return today;
}

export function getItemDate(date) {
  let thisDate = new Date(date);

  const dd = String(thisDate.getDate()).padStart(2, '0');
  const mm = String(thisDate.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = thisDate.getFullYear();

  thisDate = `${yyyy}${mm}${dd}`;

  return thisDate;
}
