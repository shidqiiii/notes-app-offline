import PushNotificationHelper from "./push-notification-helper";

const swRegister = async () => {
    if (!("serviceWorker" in navigator)) {
        console.log("Service Worker not supported in the browser");
        return;
    }

    try {
        await navigator.serviceWorker.register("sw.bundle.js");

        // Initialize web push notification after service worker activated successfully
        await PushNotificationHelper.init({
            subscribeButton: document.getElementById("subscribeBtn"),
            unsubscribeButton: document.getElementById("unsubscribeBtn"),
        });

        console.log("Service worker registered");
    } catch (error) {
        console.log("Failed to register service worker");
        console.error(error);
    }
};

export default swRegister;
