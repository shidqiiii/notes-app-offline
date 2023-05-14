import { Workbox } from "workbox-window";
import PushNotificationHelper from "./push-notification-helper";

const swRegister = async () => {
    if (!("serviceWorker" in navigator)) {
        console.log("Service Worker not supported in the browser");
        return;
    }

    try {
        const wb = new Workbox("/sw.bundle.js");
        const registration = await wb.register();

        // Initialize web push notification after service worker activated successfully
        await PushNotificationHelper.init({
            subscribeButton: document.getElementById("subscribeBtn"),
            unsubscribeButton: document.getElementById("unsubscribeBtn"),
        });

        console.log("Service worker registered");
    } catch (error) {
        console.error("Failed to register service worker", error);
    }
};

export default swRegister;
