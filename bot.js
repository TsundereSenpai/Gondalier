var Discord = require('discord.js');
var client = new Discord.Client();
var logger = require('winston');
var auth = require('./auth.json');
const fs = require('fs')
const ffmpeg = require('ffmpeg-static');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
client.on('ready', ()=> {
console.log('Successfully logged in.');
client.user.setActivity("the dolphins fly away", { type: 'WATCHING' });
});
var bot = botdire.bot;
client.login(auth.token);

  g = '<general_channel_id>';
  d = '<declarative_channel_id>';
  j = '<policial_channel_id>';
  t = 0;
  ty = 0;
  tn = 0;

var casecode = {
  'test': Math.floor((Math.random() * 10000) + 0)
}
var voteQueue = [];
var voteList = [];
var usedIds = function(){
             var idArray = [];
             for(var i = 0; i < voteQueue.length; i++){
                  idArray.push(voteQueue[i].id);
             }
             return idArray;
        };
var votedIds = function(){
              var voteArray = [];
              for(var i = 0; i < voteList.length; i++){
                  voteArray.push(voteList[i].id);
              }
              return voteArray;
        };
var gondalierIcon = 'https://cdn.discordapp.com/attachments/713792176894509076/713806982129123348/gondolaicon.png'
var icIcon = 'https://cdn.discordapp.com/attachments/713792176894509076/732865142718595092/newProfile.png'
var gondGitIcon = 'https://cdn.discordapp.com/attachments/713792176894509076/713973546497343508/gondolagit.png'

client.on('message', msg => {

  let p = config.prefix;
  let messageArray = msg.content.split(" ");
  let c = messageArray[0];





// General commands




  // Test for bot
  if(c === `${p}ping`){
    msg.reply('Complete and utter pong')
  }
  // Ask Gondalier for prefix
  if(msg.content.includes('<@!643515430287310868>')){
    msg.channel.send('My prefix is `' + `${p}` + '`, for a list of my commands, do `' + `${p}h` + '`.')
  }
  //Help menu
  if(c === `${p}h`){
          const embed = new Discord.MessageEmbed()
              .setColor('#c368ee')
              .setTitle('Gondalier Settings')
              .setURL('https://github.com/ItalianCucumber/Gondalier')
              .setAuthor('ItalianCucumber', icIcon, 'https://github.com/ItalianCucumber')
              .setDescription('For those in need of help')
              .setThumbnail(gondalierIcon)
              .addFields(
                  { name: '\u200B', value: '\u200B' },
                  { name: `${p}s`, value: `Creates a new suggestion for the parliament\n\`${p}s <suggestion>\``, inline:true },
                  { name: `${p}q`, value: `Shows the queue of suggestions\n\`${p}q\``, inline:true },
                  { name: '\u200B', value: '\u200B' },
                  { name: `${p}v`, value: `Vote for a suggestion in the queue, yes, no, veto and pass respectively\n\`${p}v <code> -y/-n/-v/-p\``, inline: true },
                  { name: `${p}d`, value: `Rolls a random number from 1 to the inserted value\n\`${p}d<number>\``, inline: true },
                  //{ name: `${package.prefix}queue, ${package.prefix}suggestions`, value: `Shows suggestion queue for the server.\n\`Usage: ${package.prefix}suggestions\``, inline: true },
              )
              .setTimestamp()
              .setFooter('Gondalier Settings • Creato da ItalianCucumber', gondGitIcon)
          msg.channel.send(embed)
      }
  // Suggest for parliament
  if(msg.content.slice(0,4) === `${p}s `){
        var newId = Math.round(Math.random() * 10000);
        while(usedIds().includes(newId)){
            newId = Math.round(Math.random() * 10000);
        }
        voteQueue.push(
            {
                id: newId,
                suggestion: msg.content.slice(4,-1) + msg.content.slice(-1),
            }
        );
    msg.reply('your suggestion is being processed now. (' + voteQueue[voteQueue.length - 1].id + ')')
    let suggestion = msg.content.slice(4,-1) + msg.content.slice(-1);
        client.channels.cache.get(d).send('<@' + msg.author.id + '>' + ' suggested: ' + suggestion + ' (' + voteQueue[voteQueue.length - 1].id + ')');
        console.log(voteQueue[voteQueue.length - 1].suggestion)
        console.log(voteQueue[voteQueue.length - 1].id)
  }
  // Queue for suggestions
  if(c === `${p}q`){
    msg.channel.send('Showing queue of suggestions.')
    for(var i = 0; i < voteQueue.length; i++){
    msg.channel.send('(' + voteQueue[i].id + ') ' + voteQueue[i].suggestion);
  }
}
  // Voting for suggestions
  if(msg.content.slice(0,4) === '..v '&&(usedIds().includes(msg.content.slice(5,-4)) + msg.content.slice(-4))){
    msg.delete();
    if(client.guilds.cache.get(msg.guild.id).members.cache.get(msg.author.id).roles.cache.find(role => role.name === 'Declasion')) {
      if(msg.content.slice(-2,-1) + msg.content.slice(-1) === '-y' || msg.content.slice(-2,-1) + msg.content.slice(-1) === '-n' || msg.content.slice(-2,-1) + msg.content.slice(-1) === '-v' || msg.content.slice(-2,-1) + msg.content.slice(-1) === '-p'){
      if(msg.content.slice(-2,-1) + msg.content.slice(-1) === '-y'){
      var newId = msg.author.id
      console.log(newId)
      if(votedIds().includes(newId)){
           t = t - 1
           ty = ty - 1
      }
      t = t + 1;
      ty = ty + 1;
      console.log(ty);
      console.info('Y');
      if(votedIds().includes(newId)){
        msg.channel.send('You have already voted for this suggestion.')
      } else {
        voteList.push(
            {
                id: newId,
            }
        );
        if(t == 5){
          if(ty > tn){
            msg.channel.send('Suggestion ' + voteQueue[voteQueue.length - 1].id + ' has been passed in this party of law.')
            client.channels.cache.get(l).send('Suggestion' + voteQueue[voteQueue.length - 1].id + 'has passed the first stage of submitting a suggestion and is waiting for approval from the supreme leader:');
            client.channels.cache.get(l).send(voteQueue[voteQueue.length - 1].suggestion);
            t = 0;
            tn = 0;
            ty = 0;
          } else {
            msg.channel.send('Suggestion ' + voteQueue[voteQueue.length - 1].id + ' has been voted down, suggestion ' + voteQueue[voteQueue.length - 1].id + ' will not become a law.')
            t = 0;
            tn = 0;
            ty = 0;
          }
        } else {
          msg.channel.send('Thank you for your vote towards suggestion ' + voteQueue[voteQueue.length - 1].id + '.')
        }
        }
      }
      if(msg.content.slice(-2,-1) + msg.content.slice(-1) === '-n'){
      var newId = msg.author.id
      console.log(newId)
      while(votedIds().includes(newId)){
           t = t - 1
           tn = tn - 1
      }
      t = t + 1;
      tn = tn + 1;
      console.log(tn)
      console.info('N')
      if(votedIds().includes(newId)){
        msg.channel.send('You have already voted for this suggestion.')
      } else {
        voteList.push(
            {
                id: newId,
            }
        );
        if(t == 5){
          if(ty > tn){
            msg.channel.send('Suggestion ' + voteQueue[voteQueue.length - 1].id + ' has been passed in this party of law.')
            client.channels.cache.get(l).send('Suggestion' + voteQueue[voteQueue.length - 1].id + 'has passed the first stage of submitting a suggestion and is waiting for approval from the supreme leader:');
            client.channels.cache.get(l).send(voteQueue[voteQueue.length - 1].suggestion);
            t = 0;
            tn = 0;
            ty = 0;
          } else {
            msg.channel.send('Suggestion ' + voteQueue[voteQueue.length - 1].id + ' has been voted down, suggestion ' + voteQueue[voteQueue.length - 1].id + ' will not become a law.')
            t = 0;
            tn = 0;
            ty = 0;
          }
        } else {
        msg.channel.send('Thank you for your vote towards suggestion ' + voteQueue[voteQueue.length - 1].id + '.')
        }
        }
      }
    } else {
      msg.channel.send('That is not a valid voting option.')
    }
  } else {
    msg.channel.send('You are not a member of the Declaration party.')
  }
  if(msg.content.slice(-2,-1) + msg.content.slice(-1) === '-v'){
    if(client.guilds.cache.get(msg.guild.id).members.cache.get(msg.author.id).roles.cache.find(role => role.name === 'Supreme Leader' || role.name === 'Policial')) {
      msg.channel.send('Suggestion ' + voteQueue[voteQueue.length - 1].id + ' has been vetoed.')
    } else {
      msg.channel.send('You are not within a party able to veto a law.')
    }
  }
  if(msg.content.slice(-2,-1) + msg.content.slice(-1) === '-p'){
    msg.channel.send('Suggestion ' + voteQueue[voteQueue.length - 1].id + ' has been passed in this party of law.')
    client.channels.cache.get(l).send('Suggestion ' + voteQueue[voteQueue.length - 1].id + ' has passed the first stage of submitting a suggestion and is waiting for approval from the supreme leader:');
    client.channels.cache.get(l).send(voteQueue[voteQueue.length - 1].suggestion);
  }
}
// Dice rolling
if(msg.content.slice(0,3) === `${p}d`){
  let number = msg.content.slice(3,-1) + msg.content.slice(-1);
  var roll = Math.round(Math.random() * number);
  while(roll === 0){
    var roll = Math.round(Math.random() * number);
  }
  msg.channel.send(roll)
}




// Channel redirects




  // Sets redirect for general
  if(c === `${p}sgr`){
    msg.delete();
    g = msg.channel.id;
    msg.channel.send('General redirect set!')
  }
  // Sets redirect for declaration
  if(c === `${p}sdr`){
    msg.delete();
    j = msg.channel.id;
    msg.channel.send('Declaration redirect set!')
  }
  // Sets redirect for policial
  if(c === `${p}sjr`){
    msg.delete();
    j = msg.channel.id;
    msg.channel.send('Policial redirect set!')
  }




// Personal commands (peco)



  // Put your personal commands here

  //Example of a command
  if(c === `${p}examplecommand`){
    msg.channel.send('Example response')
  }
});
