import { useRouter } from "next/router"

const Navbar = () => {
    const router = useRouter()
  return (
    <div className="navbar">
        <h2 onClick={(e)=>router.push('/')} className="nav-head">LegalEase.ai</h2>
        <p className="login-btn">Login</p>
    </div>
  )
}

export default Navbar