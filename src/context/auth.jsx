import { createContext, useEffect, useState} from "react";


export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = window.localStorage.getItem('user_token');
        const usersStorage = window.localStorage.getItem('users_bd');
    
        if (userToken && usersStorage) {
          const hasUser = JSON.parse(usersStorage)?.filter(
            (user) => user.email === JSON.parse(userToken).email
          );
    
          if (hasUser) setUser(hasUser[0]);
        }
      }, []);

      const login = (email, password) => {
        const usersStorage = JSON.parse(window.localStorage.getItem('users_bd'));
    
        const hasUser = usersStorage?.filter((user) => user.email === email);
        
    
        if (hasUser?.length) {
          if (hasUser[0].email === email && hasUser[0].password === password) {
            const token = Math.random().toString(36).substring(2);
            window.localStorage.setItem('user_token', JSON.stringify({ email, token }));
            setUser({ email, password });
            return;
          } else {
            return "E-mail ou senha incorretos";
          }
        } else {
          return "Usuário não cadastrado";
        }
      };

      const registro = (email, password) => {
        const usersStorage = JSON.parse(window.localStorage.getItem('users_bd'));
    
        const hasUser = usersStorage?.filter((user) => user.email === email);
    
        if (hasUser?.length) {
          return "Já tem uma conta com esse E-mail";
        }
    
        let newUser;
    
        if (usersStorage) {
          newUser = [...usersStorage, { email, password }];
        } else {
          newUser = [{ email, password }];
        }
    
        window.localStorage.setItem('users_bd', JSON.stringify(newUser));
    
        return;
      };

      const sair = () => {
        setUser(null);
        window.localStorage.removeItem('user_token');
      };


    return <AuthContext.Provider value={{ user, signed: !!user, login, registro, sair }}>{children}</AuthContext.Provider>;
}

