import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import jwt_decode from "jwt-decode";

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user_id, setUserId] = useState(null);

  useEffect(() => {
    localStorage.setItem("token", token);
    try {
      const decodedToken = jwt_decode(token);
      if (decodedToken.sub) {
        setUserId(decodedToken.sub);
      }
    } catch (error) {
      console.log("Error decoding token:", error);
      setUserId(null);
    }
  }, [token]);

  function logout() {
    setToken(null);
    setUserId(null);
  }

  return (
    <AuthContext.Provider
      value={{ token, setToken, logout, user_id, setUserId }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
