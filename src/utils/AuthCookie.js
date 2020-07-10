import Cookies from 'js-cookie';

const AUTH_COOKIE = 'assign-auth-token';

export default class AuthCookie {
  name = AuthCookie;

  static get() {
    return Cookies.get(AUTH_COOKIE);
  }

  static set(token) {
    return Cookies.set(AUTH_COOKIE, token, { expires: 20 });
  }

  static clear() {
    Cookies.remove(AUTH_COOKIE);
  }
}
