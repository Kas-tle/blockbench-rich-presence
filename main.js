const DiscordRPC = require('discord-rpc')
const clientId = '642126871177199617'

const rpc = new DiscordRPC.Client({ transport: 'ipc' })
const startTimestamp = new Date();

(function() {

let setting
let intervalID
let installed = true

let curProject = ''

Plugin.register('discord-rpc', {
  title: 'Discord RPC',
  author: 'strajabot & Kastle & simplyme',
  icon: 'announcement',
  version: '1.0.1',
  description: 'Show a rich presence status in Discord',
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

      const discordrpcfilename = (Settings.get('obfuscaterpc')) ? 'Unknown Model' : `${curProject}.bbmodel`;

      const actionString = {
        'edit': 'Editing',
        'paint': 'Painting',
        'animate': 'Animating'
      }[Modes.selected.id] || 'Making'

      rpc.setActivity({
        largeImageKey: 'icon',
        largeImageText: `Blockbench ${Blockbench.version}`,
        smallImageKey: `${Format.id}`,
        details: `${actionString} a ${Format.name}`,
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
