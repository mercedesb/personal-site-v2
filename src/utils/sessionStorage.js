const sessionStorageUtil = {
  get: key => {
    if (typeof window === "undefined") {
      return null
    } else {
      const data = sessionStorage.getItem(key)
      if (!data) {
        return null
      }
      const { value } = JSON.parse(data)
      return value
    }
  },
  set: (key, value) => {
    if (typeof window !== "undefined" && typeof value !== undefined) {
      const data = {
        value,
      }
      sessionStorage.setItem(key, JSON.stringify(data))
    }
  },
  remove: key => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(key)
    }
  },
  clear: () => {
    if (typeof window !== "undefined") {
      sessionStorage.clear()
    }
  },
}

export default sessionStorageUtil
