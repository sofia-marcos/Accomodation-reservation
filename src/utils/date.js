export const nowUnix = () => new Date().valueOf();

export const todayLastHourUnix = () => new Date().setHours(23, 59, 59, 59);

export const dateToUnix = (date) => {
  let fromUnix = new Date(`${date.from} 00:00:00`).valueOf();
  if (isToday(fromUnix)) {
    fromUnix = nowUnix();
  }
  let toUnix = new Date(`${date.to} 00:00:00`).valueOf();
  if (isToday(toUnix)) {
    toUnix = todayLastHourUnix();
  }

  return { from: fromUnix, to: toUnix };
};

export const isToday = (unixDate) => {
  const todayUnixWithoutTime = new Date().setHours(0, 0, 0, 0);
  const dateUnixWithoutTime = new Date(unixDate).setHours(0, 0, 0, 0);
  return todayUnixWithoutTime === dateUnixWithoutTime;
};

export const beforeDateStatus = (date) => {
  const todayUnixWithoutTime = new Date().setHours(0, 0, 0, 0);
  const dateUnixWithoutTime = new Date(`${date} 00:00:00`).valueOf();
  return dateUnixWithoutTime < todayUnixWithoutTime;
};

export const dateUnixFromInput = (value) =>
  new Date(`${value} 00:00:00`).valueOf();
