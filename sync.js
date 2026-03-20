async function syncToServer() {

    if (!navigator.onLine) {
        console.log("Offline. Cannot sync.");
        return;
    }

    try {
        const response = await fetch("https://kingdom-quest-api.onrender.com/api/sync", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: user.name,
                totalScore: user.totalScore
            })
        });

        const result = await response.json();
        console.log("Synced:", result);

    } catch (error) {
        console.log("Sync failed:", error);
    }
}