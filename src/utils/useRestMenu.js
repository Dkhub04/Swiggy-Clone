import { useState, useEffect } from "react";
import { Menu_API } from "../utils/Constants";


const useRestMenu = (Resid) => {
    const [ResInfo, SetRestInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

        const data = await fetch(Menu_API + Resid);
        const json = await data.json();

        SetRestInfo(json.data);
    }

    return ResInfo;
}

export default useRestMenu;