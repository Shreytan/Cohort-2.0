import { atom, selector } from "recoil";

import axios from "axios";

export const notifications = atom({
    key : "notifications",
    default : selector({
        key: "FetchNotifications",
        get: () => 
            axios.get("http://localhost:3001/notifications")
                .then(res => res.data)
                .catch(() => []), // Return an empty array in case of an error
    })  // This selector will fetch notifications from the server on every render. This is not efficient.
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})