// import React, { createContext, useContext, useState } from 'react';
// import { authenticateUser } from './userService';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   const login = async (credentials) => {
//     try {
//       const user = await authenticateUser(credentials);
//       setLoggedInUser(user);
//     } catch (error) {
//       console.error('Erro durante o login:', error.message);
//       throw error;
//     }
//   };

//   const logout = () => {
//     // Lógica de logout
//     setLoggedInUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ loggedInUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth deve ser usado dentro de um AuthProvider');
//   }
//   return context;
// };
