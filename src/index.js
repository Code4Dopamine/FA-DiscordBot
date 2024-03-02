require("dotenv").config();
const { Client, IntentsBitField, EmbedBuilder, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    GatewayIntentBits.MessageContent,
  ],
});






client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

// client.on('message', (message)=>{
//   if(message.channel.id === '1196628616537198592'){
//       if(message.content.startsWith('start')) {

//               message.channel.fetchMessages({ limit: 1 }).then(messages => {
//                   let lastMessage = messages.first();
//                   console.log(lastMessage.content);
//                 })
//                 .catch(console.error);
//       }
//   }
//   });

client.on('messageCreate', (message) => {
  // console.log(message);

  if (message.content.toLowerCase() === "Hi") {
    message.channel.send("Hello" + message.author);
  }

  console.log("Message:", message);


  if (message.content.toLowerCase().includes('/imagine')) {
    // message.channel.send('Hey there! ' + message.author);

    // ========== Embed ==========

    const embed = new EmbedBuilder()
      .setTitle("Embed title")
      .setDescription("This is an embed description")
      .setColor("AAAAAA") // "Random" or "HexColor"
      .setImage("https://cdn.discordapp.com/attachments/1170717884184526881/1172482378485202984/yokoyasu451_natural_lighting_c6dae96a-a300-472d-9b71-c9e5225b38fd.png?ex=65f4224e&is=65e1ad4e&hm=6c2b2a959a3573d8d169ba127b5ce1a261ac99cb3c39092298e719fb26f3ddf6&")
      .addFields(
        {
          name: "Field title",
          value: "Some random value",
          inline: true,
        },
        {
          name: "2nd Field title",
          value: "Some random value",
          inline: true,
        },
      );

    message.reply({ embeds: [embed] });


  }


  //   let lastMessages = await message.channel.messages.fetch({ limit: 2 });
  // // this is the last message sent before this command
  // let previousMessage = lastMessages.last();

  // message.reply(`The last message was _"${previousMessage.content}"_`);
  // message.reply(
  //   `Is the first fetched message (i.e. \`lastMessages.first()\`) the same as this message?\n ${
  //     message.id === lastMessages.first().id ? '✅ yes' : '❌ no'
  //   }`,
  // );
});

client.on("interactionCreate", (interaction) => {
  // Debugging
  // console.log(interaction);

  if (!interaction.isChatInputCommand()) return;

  // Testing to see if the application runs
  // if (interaction.commandName === "hey") {
  //   return interaction.reply("hey!");
  // }
  // ==================== END ====================

  // ========== Test Chat Application ==========

  if (interaction.commandName === "imagine") {
    return interaction.reply(
      '/imagine "TestPrompt: Create a image of flying car in a futuristic city."'
    );
  }
  // ==================== END ====================


  // ========== Test EMBED Application ==========
  if (interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Embed title")
      .setDescription("This is an embed description")
      .setColor("AAAAAA") // "Random" or "HexColor"
      .setImage("https://cdn.discordapp.com/attachments/1170717884184526881/1172482378485202984/yokoyasu451_natural_lighting_c6dae96a-a300-472d-9b71-c9e5225b38fd.png?ex=65f4224e&is=65e1ad4e&hm=6c2b2a959a3573d8d169ba127b5ce1a261ac99cb3c39092298e719fb26f3ddf6&")
      .addFields(
        {
          name: "Field title",
          value: "Some random value",
          inline: true,
        },
        {
          name: "2nd Field title",
          value: "Some random value",
          inline: true,
        },
      );

    interaction.reply({ embeds: [embed] });
  }

  // ==================== END ====================

  // TODO: Call Midjoruney's bot via "/imagine" command

  // ========== Option Interaction ==========

  // ----- TEST ----
  // if (interaction.commandName === 'add') {
  //   const num1 = interaction.options.get('first-number').value;
  //   const num2 = interaction.options.get('second-number').value;

  //   interaction.reply(`The sum is ${num1 + num2}`);
  // }

  if (interaction.commandName === "record") {
    const option = interaction.options.get("option").value;
    const prompt = interaction.options.get("prompt").value;

    // TODO: Extract prompt to desktop.

    // const stringReply = ```
    // Performing ${option}
    // with the following prompt:
    // ${prompt}
    // ```;

    // interaction.reply(`
    // Performing   \`${option}\`
    // with the following prompt:
    // \`${prompt}\` 
    // `);

    const embed = new EmbedBuilder()
      .setTitle(`Performing ${option}`)
      .setDescription("This is an embed description")
      .setColor("AAAAAA") // "Random" or "HexColor"
      .setImage(`${prompt}`)
      .setImage(`${prompt}`)
      .addFields(
        {
          name: "Field title",
          value: "Some random value",
          inline: true,
        },
        {
          name: "2nd Field title",
          value: "Some random value",
          inline: true,
        },
      );

    interaction.reply({ embeds: [embed] });
    interaction.reply({ embeds: [embed] });



  }

  // ========== Embed Interaction ==========
});

client.login(process.env.TOKEN);
