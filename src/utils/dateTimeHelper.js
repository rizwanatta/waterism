import dayjs from "dayjs";

function getFormattedDate(date) {
  if (date === "") {
    return;
  }

  return dayjs(date).format("DD/MM/YYYY");
}

export { getFormattedDate };
