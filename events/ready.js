const config = require(`../config/bot.js`)

module.exports = (client) => {

    console.log(`(👌) Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
    
    client.user.setActivity(config.start.loading)
    setInterval(changing_status, 10000);
    
        function changing_status() {
            let status = [config.start.activity]
            let random = status[Math.floor(Math.random() * status.length)]
            client.user.setActivity(random)
        }
};