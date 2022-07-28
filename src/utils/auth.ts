import Cookie from 'js-cookie'
const tokenKey = 'Cookie'

let getToken = (): string => Cookie.get(tokenKey)
let setToken = (token: string): void => Cookie.set(tokenKey, token)
let removeToken = (): void => Cookie.remove(tokenKey)

export { getToken, setToken, removeToken }
