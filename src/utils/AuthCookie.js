import Cookies from 'js-cookie';

const AUTH_COOKIE = 'assign-auth-token';

const MAX_DAYS_EXP = 30;

export default class AuthCookie {
  name = AuthCookie;

  static get() {
    return Cookies.get(AUTH_COOKIE);
  }

  static set(token) {
    return Cookies.set(AUTH_COOKIE, token, {
      expires: MAX_DAYS_EXP,
    });
  }

  static clear() {
    Cookies.remove(AUTH_COOKIE);
  }
}
