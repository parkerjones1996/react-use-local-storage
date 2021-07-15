import { useState, useEffect } from 'react'

function useLocalStorageState(
    key,
    defaultValue = '',
    { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {

    //  Using lazy state initialization as localStorage computation can be expensive
    const [state, setState] = useState(() => {
        const valueInLocalStorage = localStorage.getItem(key)

        if (valueInLocalStorage) {
            return deserialize(valueInLocalStorage)
        }

        return typeof defaultValue === 'function'
            ? defaultValue()
            : defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, serialize(state))
    }, [key, serialize, state])

    return [state, setState]
}
