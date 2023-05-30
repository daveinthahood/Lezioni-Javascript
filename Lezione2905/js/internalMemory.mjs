
export const internalMemory = {
    /**
     * save data on local storage
     * @param {string} key local storage key 
     * @param {*} value value to save 
     */
    save:(key, value) => {
        if (typeof key !== "string") throw new Error("key must be a valid string")
        if (value === undefined) throw new Error ("value cannot be undefined")
        localStorage.setItem(key, JSON.stringify(value))
    },
    get:(key) => {
        if (typeof key !== "string") throw new Error("key must be a valid string")
        return JSON.parse(localStorage.getItem(key))
    },
    remove:(key) => {
        if (typeof key !== "string") throw new Error("key must be a valid string")
        localStorage.removeItem(key)
    },
    clear:() => {
        localStorage.clear()
    }
}

// export default internalMemory;