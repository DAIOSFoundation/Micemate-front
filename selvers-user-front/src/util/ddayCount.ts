export const ddayCount = (endDay: string) => {
  const today = new Date();
  const target = new Date(endDay.slice(0, 10));
  today.setHours(24, 0, 0, 0);
  target.setHours(24, 0, 0, 0);

  const difference = target.getTime() - today.getTime();

  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

  if (daysLeft > 0) {
    return `-${daysLeft}`;
  } else {
    return `+${Math.abs(daysLeft)}`;
  }
};
