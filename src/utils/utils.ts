import dayjs from 'dayjs';

export const getRatingColor = (rating: number) =>
  (Math.round(rating) * 100) / 5;

export const humanizeDate = (date: string) => dayjs(date).format('MMMM YYYY');

export const humanizeTime = (date: string) => dayjs(date).format('YYYY-MM-DD');
