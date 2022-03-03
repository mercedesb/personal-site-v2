import dayjs from "dayjs"

function format(date = null) {
  if (date) {
    return dayjs(date).format("MMMM DD, YYYY")
  } else {
    return dayjs().format("MMMM DD, YYYY")
  }
}

const DateUtils = {
  format,
}

export default DateUtils
