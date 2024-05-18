package com.example.fooddeliveryy.Configuration.JWT;



import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

public class CookiesUtil {
    public static String getTokenFromCookies(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("user-id".equals(cookie.getName())) {
                    return cookie.getValue();
                }
            }
        }
        return null;
    }
}
