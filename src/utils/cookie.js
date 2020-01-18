import Cookies from 'js-cookie'

const Token = 'token' 
     
export function setToken(token) {
  return Cookies.set(Token, token)
}

export function getToken() {
  return Cookies.get(Token)
}


//  if this is object 

// export function setUserinfo(userinfo) {
//   return Cookies.set(info, userinfo)
// }

// export function getUserinfo() {
//   return Cookies.get(info) ? JSON.parse(Cookies.get(info)) : ''
// }
