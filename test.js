
const DiscordRPC = require("discord-rpc")
const clientId = "642126871177199617"

const rpc = new DiscordRPC.Client({ transport: "ipc" })
const startTimestamp = new Date()

async function setActivity() {
  if (!rpc) {
    return
  }

  rpc.setActivity({
    largeImageKey: 'icon',
    largeImageText: `Blockbench ${Blockbench.version}`,
    smallImageKey: `${Format.id}`,
    details: `Making a ${Format.name}`,
    state: `${Project.name}.json`,
    startTimestamp,
    instance: false,
  })
}

rpc.on('ready', () => {
  setActivity()
  intervalID = setInterval(() => {
    setActivity()
  }, 15e3)
})

rpc.login({ clientId }).catch(console.error)
