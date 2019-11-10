
const DiscordRPC = require("discord-rpc")
const clientId = "398111176145502209"

const rpc = new DiscordRPC.Client({ transport: "ipc" })
const startTimestamp = new Date()

async function setActivity() {
  if (!rpc) {
    return
  }

  rpc.setActivity({
    largeImageKey: 'blockbench',
    largeImageText: 'Blockbench',
    details: "Working on blockmodel",
    state: `"${Project.name}"`,
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


