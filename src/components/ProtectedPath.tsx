import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../store/AuthStore";

const ProtectedPath = ({children}: { children: React.ReactNode }) => {
    const token = useAppSelector(state => state.auth.token);

    const navigator = useNavigate();

    if(token===undefined||token===null||token==="") {
        navigator('/login');
    }

    return <>{children}</>
}

export default ProtectedPath;
