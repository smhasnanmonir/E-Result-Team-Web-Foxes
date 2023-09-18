// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../Account/Provider/AuthProvider";
// import { useState } from "react";
// import { useEffect } from "react";



// const useAdmin = () => {
//     const {user} = useContext(AuthContext);
//     const [checkAdmin, setAdmin] = useState([]);
//     useEffect(() => {
//     fetch(`https://e-result-server.vercel.app/user/isAdmin?email=${user ? user.email : 'team@web.fox'}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setAdmin(data.admin);
//       });
//   }, [user]);
//   return [checkAdmin];
// };

// export default useAdmin;

//Implemented With Redux Toolkit (Team web foxex)

import { useSelector, useDispatch } from 'react-redux';
import { useContext, useEffect } from 'react';
import { selectAdmin, setAdmin } from './Redux/adminSlice'; 
import { AuthContext } from '../Account/Provider/AuthProvider';

const useAdmin = () => {
  const {user} = useContext(AuthContext);
  const checkAdmin = useSelector(selectAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://e-result-server.vercel.app/user/isAdmin?email=${user ? user.email : 'team@web.fox'}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setAdmin(data.admin));
      });
  }, [user, dispatch]);

  return [checkAdmin];
};

export default useAdmin;
