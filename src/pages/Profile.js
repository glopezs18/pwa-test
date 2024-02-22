// import { useEffect, useState } from "react"
// import { Navigate } from "react-router-dom";
// import { getCurrentUser, signOut } from "../auth"

// function Profile() {
//   const [user, setUser] = useState()

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const user = await getCurrentUser()
//         setUser(user)
//       } catch (err) {
//         console.error(err)
//       }
//     }

//     fetchUser()
//   }, [])

//   return (
//     <div>
//       {user && (
//         <div>
//           <h2>User Profile</h2>
//           <p>Username: {user.username}</p>
//           <p>Email: {user.email}</p>
//           {/* Display any other user data here */}
//         </div>
//       )}

//       <button onClick={signOut}>Sign Out</button>
//     </div>
//   )
// }

// export default Profile;

import { useContext } from "react"
import { AuthContext } from "../AuthContext"
import { Navigate } from "react-router-dom";

function Profile() {
  const { user, signOut } = useContext(AuthContext)
  // console.log(user);

  if (!user) {
    // Redirect to the profile page
    return <Navigate to="/login" />
  }


  return (
    <div>
      {user && (
        <div>
          <h2>User Profile</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Display any other user data here */}
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}      
    </div>
  )
}

export default Profile;