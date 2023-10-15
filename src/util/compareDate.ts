export const compareDate = (date1: string, date2: string): boolean => {
  const parsedDate1 = new Date(date1);
  const parsedDate2 = new Date(date2);

  if (parsedDate1 > parsedDate2) {
    return false;
  } else if (parsedDate1 < parsedDate2) {
    return true;
  } else {
    return false;
  }
};

export const convertStringToArray = (tag: string) => {
  const parts = tag.split(',');

  return parts;
};
