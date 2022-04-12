const localStorageUtil = {
  get: key => {
    if (typeof window === "undefined") {
      return null
    } else {
      const data = localStorage.getItem(key)
      if (!data) {
        return null
      }
      return JSON.parse(data)
    }
  },
  set: (key, value) => {
    if (typeof window !== "undefined" && typeof value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  },
  remove: key => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key)
    }
  },
  clear: () => {
    if (typeof window !== "undefined") {
      localStorage.clear()
    }
  },
}

export default localStorageUtil
