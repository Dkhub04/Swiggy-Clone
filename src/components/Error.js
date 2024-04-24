import { useRouteError } from "react-router-dom";

const Error = ()=>
{
    const error = useRouteError(); 
    return(
        <div>
            <h1>Oopss!!!</h1>
            <h2>404 Error Occurred</h2>
            <h2>{error.status} : {error.data}</h2>
        </div>
    )
}

export default Error;