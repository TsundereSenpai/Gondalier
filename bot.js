var Discord = require('discord.js');
var client = new Discord.Client();
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
client.on('ready', ()=> {
console.log('Successfully logged in.');
client.user.setActivity("with your emotions", { type: 'PLAYING' });
});
client.login(auth.token);

  g = '691793782466674721';
  dj = '697523799175987292';
  bt = '697585748974764042';
  pd = '696846999965663323';
  d = '697457937240686705';
  fa = '697458000889380885';
  sl = '697458067285082142';
  pj = '697458197660827728';
  cra = '697459291719860224';
  s = '697472683809701929';
  p = '697485262221082744';
  bot = '691793782466674721';
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
var icIcon = 'https://cdn.discordapp.com/attachments/713792176894509076/713972815396601877/profile.png'
var gondGitIcon = 'https://cdn.discordapp.com/attachments/713792176894509076/713973546497343508/gondolagit.png'
client.on('message', msg => {




// General commands



  // Test for bot
  if(msg.content.slice(0,10) === '..paninis'){
    msg.reply('No, you actual idiot. Did your brain rot up? or just fall out? I had never thought I could find someone with lower IQ than <@385190937795624960>, but here we are. The word panini comes from the Italian word for sandwich, panino. The plural of which is panini. By saying paninis you are effectively saying sandwicheses. And thus insulting anyone with a damn brain. If you plan to keep spreading your idiocy, go to the healing crystal store, maybe they’ll learn something. Oh, by the way the bot is working. Yare yare my head...')
  }
  // Ask Gondalier for prefix
  if(msg.content.includes('<@!643515430287310868>')){
    msg.channel.send('My prefix is `..`, for a list of my commands, do `..h`.')
  }
  //Help menu
  if(msg.content.slice(0,3) === '..h'){
          const embed = new Discord.MessageEmbed()
              .setColor('#c368ee')
              .setTitle('Gondalier Settings')
              .setURL('https://youtu.be/dQw4w9WgXcQ')
              .setAuthor('ItalianCucumber', icIcon, 'https://github.com/ItalianCucumber')
              .setDescription('For those in need of help')
              .setThumbnail(gondalierIcon)
              .addFields(
                  { name: '\u200B', value: '\u200B' },
                  { name: `..s`, value: `Creates a new suggestion for the parliament\n\`..s <suggestion>\``, inline:true },
                  { name: `..q`, value: `Shows the queue of suggestions\n\`..q\``, inline:true },
                  { name: '\u200B', value: '\u200B' },
                  { name: `..v`, value: `Vote for a suggestion in the queue, yes, no, veto and pass respectively\n\`..v <code> -y/-n/-v/-p\``, inline: true },
                  //{ name: `${package.prefix}queue, ${package.prefix}suggestions`, value: `Shows suggestion queue for the server.\n\`Usage: ${package.prefix}suggestions\``, inline: true },
              )
              .setTimestamp()
              .setFooter('Gondalier Settings • Creato da ItalianCucumber', gondGitIcon)
          msg.channel.send(embed)
      }
  // Suggest for parliament
  if(msg.content.slice(0,4) === '..s '){
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
  if(msg.content.slice(0,3) === '..q'){
    msg.channel.send('Showing queue of suggestions.')
    for(var i = 0; i < voteQueue.length; i++){
    msg.channel.send('(' + voteQueue[i].id + ') ' + voteQueue[i].suggestion);
  }
}
  // Voting for suggestions
  if(msg.content.slice(0,4) === '..v '&&(usedIds().includes(msg.content.slice(5,-4)) + msg.content.slice(-4))){
    msg.delete();
    if(client.guilds.cache.get(msg.guild.id).members.cache.get(msg.author.id).roles.cache.find(role => role.name === 'Declasial')) {
      if(msg.content.slice(-2,-1) + msg.content.slice(-1) === '-y' || msg.content.slice(-2,-1) + msg.content.slice(-1) === '-n' || msg.content.slice(-2,-1) + msg.content.slice(-1) === '-v' || msg.content.slice(-2,-1) + msg.content.slice(-1) === '-p'){
      if(msg.content.slice(-2,-1) + msg.content.slice(-1) === '-y'){
      var newId = msg.author.id
      console.log(newId)
      console.log(votedIds)
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
        if(t == 5){
          if(ty > tn){
            msg.channel.send('Suggestion ' + voteQueue[voteQueue.length - 1].id + ' has been passed in this party of law.')
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
        if(t == 5){
          if(ty > tn){
            msg.channel.send('Suggestion ' + voteQueue[voteQueue.length - 1].id + ' has been passed in this party of law.')
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
      if(msg.content.slice(-2,-1) + msg.content.slice(-1) === '-v'){
      msg.channel.send('Suggestion ' + voteQueue[voteQueue.length - 1].id + ' has been vetoed.')
      }
      if(msg.content.slice(-2,-1) + msg.content.slice(-1) === '-p'){
      msg.channel.send('Suggestion ' + voteQueue[voteQueue.length - 1].id + ' has been passed in this party of law.')
      }
    } else {
      msg.channel.send('That is not a valid voting option.')
    }
  } else {
    msg.channel.send('You are not a member of the Declasial party.')
  }
}




// Channel redirects




  // Sets redirect for general
  if(msg.content.slice(0,5) === '..sgr'){
    msg.delete();
    g = msg.channel.id;
    msg.channel.send('General redirect set!')
  }
  // Sets redirect for dj
  if(msg.content.slice(0,5) === '..sdr'){
    msg.delete();
    dj = msg.channel.id;
    msg.channel.send('DJ redirect set!')
  }
  // Sets redirect for bot-testing
  if(msg.content.slice(0,5) === '..sbr'){
    msg.delete();
    bt = msg.channel.id;
    msg.channel.send('Bot testing redirect set!')
  }
  // Sets redirect for parliamentary decisions
  if(msg.content.slice(0,6) === '..spdr'){
    msg.delete();
    pd = msg.channel.id;
    msg.channel.send('Parliamentary decisions redirect set!')
  }
  // Sets redirect for voting
  if(msg.content.slice(0,5) === '..svr'){
    msg.delete();
    d = msg.channel.id;
    msg.channel.send('Voting redirect set!')
  }
  // Sets redirect for foreign-affairs
  if(msg.content.slice(0,5) === '..sfr'){
    msg.delete();
    fa = msg.channel.id;
    msg.channel.send('Foreign-affairs redirect set!')
  }
  // Sets redirect for supreme leader
  if(msg.content.slice(0,5) === '..slr'){
    msg.delete();
    sl = msg.channel.id;
    msg.channel.send('Supreme Leader redirect set!')
  }
  // Sets redirect for judging
  if(msg.content.slice(0,5) === '..sjr'){
    msg.delete();
    pj = msg.channel.id;
    msg.channel.send('Judge redirect set!')
  }
  // Sets redirect for CRA
  if(msg.content.slice(0,5) === '..scr'){
    msg.delete();
    cra = msg.channel.id;
    msg.channel.send('CRA redirect set!')
  }
  // Sets redirect for suggestions
  if(msg.content.slice(0,5) === '..ssr'){
    msg.delete();
    s = msg.channel.id;
    msg.channel.send('Suggestions redirect set!')
  }
  // Sets redirect for protocol
  if(msg.content.slice(0,5) === '..spr'){
    msg.delete();
    p = msg.channel.id;
    msg.channel.send('Protocol redirect set!')
  }




// Personal commands (peco)




//const peco = require("./peco");
});
