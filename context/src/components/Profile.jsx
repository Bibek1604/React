import  { useContext } from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <diV>Please login</diV>

    return <div>Welcome {user.username}</div>
}

export default Profile
