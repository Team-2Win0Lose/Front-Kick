export const sliceTitle = (title: string) => {
  const nowtitle = title.slice(0, 20);
  const returnTitle = nowtitle + '...';
  return returnTitle;
};
export const sliceDate = (date: string) => {
  return date.split('~')[0];
};
