export const formatDate = (date: string | Date): string => {
  const d = typeof date === "string" ? new Date(date) : date;
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  return d.toLocaleDateString("en-US", options);
};

export const formatPeriod = (
  startDate: string,
  endDate?: string | null,
): string => {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "Present";
  return `${start} - ${end}`;
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString("en-US");
};

export const formatPercentage = (value: number): string => {
  return `${Math.round(value * 100)}%`;
};
