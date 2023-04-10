import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props){
    const{ Component} = props;
    const navigate = useNavigate();

        let login=0 ;
    useEffect(()=>{
        if(login !== 0){

            navigate('/login')
        }
    },[])
    return(
        <>
            <Component/>
        </>
    )
}
export default Protected;