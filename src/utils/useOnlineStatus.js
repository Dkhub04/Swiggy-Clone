import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, SetonlineStatus] = useState(true)

    useEffect(() => {

        window.addEventListener("offline", () => {
            SetonlineStatus(false)
        })


        window.addEventListener("online", () => {
            SetonlineStatus(true)
        }, [])

    })

    return onlineStatus;
}

export default useOnlineStatus;