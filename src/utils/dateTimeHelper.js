import dayjs from "dayjs";

function getFormattedDate(date) {
  return dayjs(date).format("DD/MM/YYYY");
}

export { getFormattedDate };
