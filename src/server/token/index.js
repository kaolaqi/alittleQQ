
import Cookies from 'js-cookie'
const TokenKey = 'Admin-Token'

var TokenServer = function() {
  this.getToken = function() {
    return Cookies.get(TokenKey)
  }
  this.setToken = function(token) {
    return Cookies.set(TokenKey, token)
  }
  this.removeToken = function() {
    return Cookies.remove(TokenKey)
  }
}

export default new TokenServer()
