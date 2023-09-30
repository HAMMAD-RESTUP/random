import { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Quiz logo.png"

export default function Protected(props: any) {



    const { Screen } = props

    const [loader, setloader] = useState(true)
    const navigate = useNavigate()

    let checkAuth = () => {
        setloader(true)
        let auth = true
        if (auth) {
            setloader(false)
        } else {
            setloader(false);
            navigate("/login")
        }

    }

    useEffect(() => {
        checkAuth();
    }, [])

    return loader?(
        <> 
        <h1>Loading.......</h1>
     
        </>
        ):( 
            <Screen/> 
        )
      
}