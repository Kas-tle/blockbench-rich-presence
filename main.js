const DiscordRPC = require('discord-rpc')
const clientId = '642126871177199617'

const rpc = new DiscordRPC.Client({ transport: 'ipc' })
var startTimestamp = new Date();

(function() {

let setting
let intervalID
let installed = true

let curProject = ''

Plugin.register('discord-rpc', {
  title: 'Discord RPC',
  author: 'strajabot, Kastle, & simplyme',
  icon: 'announcement',
  version: '1.1.1',
  description: 'Show a rich presence status in Discord',
  variant: 'desktop',
  onload() {
    setting = new Setting('obfuscaterpc', {
      value: true,
      name: 'Discord Rich Prescense',
      description: 'Obfuscate Project Name',
    })

    async function setActivity() {
      if (!rpc) {
        return
      }

      if (curProject !== Project.name) {
        curProject = Project.name
        startTimestamp = new Date()
      }

      var discordrpcfilename = (Settings.get('obfuscaterpc')) ? 'Unknown Model' : `${curProject}.bbmodel`;

      const actionString = {
        'edit': 'Editing',
        'paint': 'Painting',
        'animate': 'Animating',
        'start': 'Starting'
      }[Modes.selected.id] || 'Making'

      const formatString = {
        'java_block': 'a Java Block/Item',
        'bedrock': 'a Bedrock Model',
        'bedrock_old': 'a Bedrock Legacy Model',
        'modded_entity': 'a Modded Entity',
        'optifine_entity': 'an OptiFine Entity',
        'optifine_part': 'an OptiFine Part',
        'skin': 'a Skin',
        'free': 'a Generic Model'
      }[Format.id] || `a ${Format.name}`

      rpc.setActivity({
        largeImageKey: 'icon',
        largeImageText: `Blockbench ${Blockbench.version}`,
        smallImageKey: `${Format.id}`,
        details: `${actionString} ${formatString}`,
        state: `${discordrpcfilename}`,
        startTimestamp,
        instance: false,
      })
    }

    // add a small hook onto the clicks to detect when they change, hehe
    const ops = Modes.options
    Object.keys(ops).forEach(e => {
      const mode = Modes.options[e]
      if (mode.onSelect && typeof mode.onSelect === 'function') {
        let appSelect = mode.onSelect
        mode.onSelect = () => {
          appSelect.apply(this, arguments)
          if (installed) setActivity()
        }
      }
    })

    rpc.on('ready', () => {
      setActivity()
      intervalID = setInterval(() => {
        setActivity()
      }, 15e3)
    })

    rpc.login({ clientId }).catch(console.error)
  },
  onunload() {
    installed = false
    setting.delete()
    clearInterval(intervalID)
  }
});

})();
