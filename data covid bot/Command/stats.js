const {MessageEmbed} = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
        message.delete();

       let data = {
        "cas" : 11156,
        "deces" : 14497,
        "guéris" : 45513,
        "réanimation" : 4526
       }
       

        const embed = new MessageEmbed()
        .setTitle(`Voici les statistiques qui concernent les covid-19`)
        .setDescription(`**Cas Normandie**: ${data.cas} \n **deces**: ${data.deces} \n **guéris**: ${data.guéris} \n **réanimation**: ${data.réanimation}`)
        .setColor("#2f3136")
        .setImage('https://www.magnetic-bordeaux.fr/wp-content/uploads/2020/03/covid-19.jpg')
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'stats',
  };