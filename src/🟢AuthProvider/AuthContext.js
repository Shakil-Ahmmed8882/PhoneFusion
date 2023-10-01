import { useContext } from "react"
import { AuthContext } from "./AuthContextProvider"

const useAuth = () => {
      const all = useContext(AuthContext)

      return all
}

export default useAuth;