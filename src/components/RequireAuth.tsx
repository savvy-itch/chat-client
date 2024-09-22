import { Outlet } from "react-router-dom"

export default function RequireAuth({
  allowedRoles,
}: {
  allowedRoles: number[]
}) {
  // check if the access token exists and matches the allowed roles

  return <Outlet />
}
