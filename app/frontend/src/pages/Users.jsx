import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { requestUsers } from '../services/requests';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [role, setRole] = useState(null); // Adiciona o estado para o role [extra
  const [isAdm, setIsAdm] = useState(false);

  // Recupera o usuário logado do localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token') || false;

  useEffect(() => {
    // Chama a função de busca de usuários apenas se o usuário estiver autenticado
    if (loggedInUser) {
      const role = localStorage.getItem('role') || false;

      fetchUsers();

      setIsAdm(role === 'admin');
      setRole(role);
    }
  }, [loggedInUser]);


  const fetchUsers = async () => {
    try {
      const users = await requestUsers('/users', token);
      setUsers(users);
      setError(null); // Limpa qualquer erro anterior se a busca for bem-sucedida
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  if (!loggedInUser) return <Navigate to="/login" />;

  return (
    <div>
      <h2>Página de Usuários</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loggedInUser && role === 'admin' ? (
        // Renderiza a lista completa de usuários para o admin
        <div>
          <h3>Lista de Todos os Usuários:</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.photo && (
                  <img
                    src={user.photo}
                    alt={`Foto de ${user.username}`}
                    width="50"
                  />
                )}
                <p>Usuário: {user && user.username}</p>
                <p>Email: {user && user.email}</p>
                <p>Cidade: {user && user.city}</p>
                <p>Estado: {user && user.state}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Renderiza apenas os dados do usuário para usuários comuns
        <div>
          <h3>Seus Dados:</h3>
          {users.photo && (
            <img
              src={users.photo}
              alt={`Foto de ${users.username}`}
              width="50"
            />
          )}
          <p>Usuário: {users && users.username}</p>
          <p>Email: {users && users.email}</p>
          <p>Cidade: {users && users.city}</p>
          <p>Estado: {users && users.state}</p>
        </div>
      )}
    </div>
  );
};

export default Users;
