import {useState ,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,SetUsername] = useState('')

    const [password,setPassword]=useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})

    }
    return (
        <div>
            <h2>login</h2>
            <input type='text' 
            placeholder={username} 
            onChange={(e)=> SetUsername(e.target.value)}/>
            <input type='text' 
            placeholder={password} 
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        
    )
}

export default Login
