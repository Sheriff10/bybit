import React from "react";

export default function AllUsers({ users }) {
   return (
      <div className="w-con">
         <table>
            <thead>
               <tr>
                  <th>User ID</th>
                  <th>Email</th>
               </tr>
            </thead>
            <tbody>
               {users.map((i, index) => (
                  <tr key={index}>
                     <th>{i._id}</th>
                     <th>{i.email}</th>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
