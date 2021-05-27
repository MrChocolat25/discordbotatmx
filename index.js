const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("!")

client.on('ready', function() {


});

client.login(process.env.TOKEN);

client.on('message', message => {
    if (message.content === prefix + "commandes"){
        message.channel.sendMessage("__**Liste Des Commandes**__ :tools: **:** \n **!commandes** \n **!Twitch** \n **!Twitter** \n **!Serveur** (ND) \n **!Récap'** (ND) \n **!BG** (ND) \n **!quest** ")
        client.user.setGame("J'aime beaucoup le SEX")
    }

if (message.content === "Salut"){
    message.reply("Bien le bonjour disciple de satan")
    console.log("La salutation satanique à été effectué")
    
}

if (message.content === "Teru"){
    message.channel.send("**Disciple de elpadreee.** ::sob:")
    message.channel.sendFile("https://pbs.twimg.com/media/D8p__nEWwAAg_Yg.jpg")
    console.log("Message troll postés")
}

if (message.content === "elpadreee"){
    message.channel.send("**LE GRAND MAÎTRE SUPRÊME ! Au dessus de Satan**")
    console.log("Grand maître suprême a été honorée")
}

if (message.content === "!Serveur"){
    message.reply("https://discord.gg/HKsrZG7")
    console.log("Les liens ont bien été redistribué")
}

if (message.content === "!BG"){
    message.reply("Le BG N'est pas encore donnés")  
    console.log("Background affichée")
}

if (message.content === 'ping'){
    (message.channel.send("pong"))
    console.log("Pong Chang Gang")

}

if (message.content.startsWith(prefix + 'Terumikami')){
    (message.react("😂"))
    console.log("mdrrr je l'ai bien ridiculiser cette grosse pute de ses morts")
}

if (message.content.startsWith(prefix + 'Salope')){
    (message.react("💌"))
    console.log("SexeRP IS Définie By Me")
}

if (message.content.startsWith(prefix + 'Test')){
    (message.react("482579031959535650"))
    console.log("Sexe In The Beach")
}

if (message.content === '!Twitch'){
    message.reply("https://twitch.tv/eIpadreee")
    message.react("482579031959535650")
    console.log("La commande twitch fonctionne !")
}

if (message.content === '!Récap'){
    message.reply("**La commande est actuellement indisponible !**")
    console.log("L'information à été distribué")

}

if (message.content === '!OFF'){
    message.channel.send("Je vous souhaite une agréable nuit à tous. OVER")
    console.log("Bonne nuit !")
}

if (message.content === 'Hyxo'){
    message.channel.send(" = Pédé")
    console.log("Nique ta mère Hyxo")
}

if (message.content === 'pd'){
    message.channel.send("437787476220706826")
}

if (message.content.startsWith(prefix + "Twitter")){
    message.reply("https://twitter.com/elpadreee_")
    console.log('Le Twitter a bien été redistribué')
}

if (message.content === 'Skylenaa'){
    message.channel.send("**Skylenna de la Pechemalbak de la marlboro**")
    console.log('BOOM')
}

if (message.content === '!quest'){
    message.channel.send("__**Certains Mots vous feront gagnées des surprises, trouvez-les**__ ! \n __***DES INDICES VOUS SERONT DONNEES AU FIL DES JOURS***__ \n https://tenor.com/view/lol-bobs-burgers-linda-excited-aaaaaah-gif-5383381")
    console.log("Alright")    
    }

if (message.content === 'a'){
    message.channel.send("Avale t'es mort fdp")
}

if (message.content === "Avale t'es mort fdp")
message.channel.send("Avale t'es mort fdp")

    if (message.content === "Aya")
    message.channel.send("**Le sang mais elle supporte le Barcaca** :syringe: ")

    if (message.content === "!ON")
    message.channel.send("Bonjour je suis actuellement fonctionnel ! 🤖")

    if (message.content === "!reboot")
    message.channel.send("**Je suis actuellement en plein redémarrage... 🤖**")

    if (message.content === "**Je suis actuellement en plein redémarrage... 🤖**")
    message.channel.send("__**Je suis de nouveau fonctionnel ! 🤖**__")

    if (message.content === "jokairr")
    message.channel.send("**Les problèmes... :no_mouth:**")

    if (message.content === "Azufel")
    message.channel.send("Azufesse LOL ")

    if (message.content === "Drys")
    message.channel.send("mis")
    
    if (message.content.startsWith(prefix + "Auto"))
    message.channel.send(":speaking_head: __**POUR AFFICHER LES MESSAGES AUTO TAPEZ :**__ :speaking_head:  \n **=> jokairr** \n **=> Aya** \n **=> Skylenaa** \n **=> Teru** \n **=> Salut** \n **=> Hyxo** \n **=> elpadreee** \n **=> ping** \n **=> Azufel** \n **=> Drys** \n **=> rip** \n __**BIEN D'AUTRES SONT DISSIMULES TROUVEZ-LES ! \n DES INDICES SERONT BIENTÔT DONNEES !**__ :speaking_head: ")

    if (message.content === "Yo")
    message.channel.send("Yo G, wassup")

    if (message.content === "Yo G, wassup")
    message.react("👋")
        
    if (message.content === '!avatar')
    message.channel.send(message.author.avatarURL);
{
    if (message.content === "sex")
    message.channel.send("https://cdn.discordapp.com/attachments/323230370415771653/643976091060404226/twitch_babe_belissalovely_topless_leaks_busty_stream_girl_-_gallery_7143103126.png")

    if (message.content === "https://cdn.discordapp.com/attachments/323230370415771653/643976091060404226/twitch_babe_belissalovely_topless_leaks_busty_stream_girl_-_gallery_7143103126.png")
    message.channel.send("sex")}

    if (message.content === "rip")
    message.delete(),
    message.channel.sendFile('https://i.imgur.com/w3duR07.png')

    if (message.content.startsWith(prefix + "live"))
    message.delete(),
    message.channel.send("**Raphaël est actuellement en live ICI ! Viens nous rejoindre ! @everyone** \n https://twitch.tv/eIpadreee")
})
