import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Unauthorized from "./components/Unauthorized"
import Overview from "./components/Overview"
import Missing from "./components/Missing"
import RequireAuth from "./components/RequireAuth"
import Admin from "./components/Admin"

const ROLES = {
  Admin: 5623,
  Moderator: 7028,
  User: 1874,
}

const App = () => {
  return (
    <Routes>
      <Route path="/">
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="overview" element={<Overview />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  )
}

export default App
