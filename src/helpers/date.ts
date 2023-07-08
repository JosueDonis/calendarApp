export const parseDate = (date: string): string => {
  if (!Boolean(date)) return "- - -";
  let d = new Date(date);
  let regex = /^[0-9]{4,}[-][0-9]{2}[-][0-9]{2}$/g;

  return regex.test(date)
    ? new Date(
        d?.getTime() + d?.getTimezoneOffset() * 60 * 1000
      )?.toLocaleDateString("es")
    : d?.toLocaleString();
};

export const formatDate = (value: string): string => {
  return parseDate(value)?.replace(/\//g, "-");
};
