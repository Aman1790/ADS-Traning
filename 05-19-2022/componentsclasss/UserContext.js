import React from "react";
const UserContext = React.createContext({
   users :[ { id: 'u1', name: 'Max' },
   { id: 'u2', name: 'Manuel' },
   { id: 'u3', name: 'Julie' },] 
});
export default UserContext;