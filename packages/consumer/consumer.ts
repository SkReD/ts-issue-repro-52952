import someVar from 'provider/provider.js'

/**
 * if replace this function with `console.log(someVar)` than exception do not throw
 */
export default function () {
    return {
        a: 1,
        ...someVar
    }
}