module.exports = async(client, data) => {
    client.user.setActivity(`Analyse les donnés du covid`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/fujiouke"
      });
}