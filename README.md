

# Blockbench Rich Presence

Creating a Discord rich presence plugin for Blockbench.

### Creating discord-rpc.js

To build discord-rpc.js:
```
npm run build
```
To pretty-print (Optional):
```
npm run prettyprint
```

### Features

* Integrates with Discord while Blockbench is running
* Displays the current project mode with icon
* Displays the current user action (editing, painting, animating)
* Displays the current filename
* Displays time elapsed working on current project
* Setting to toggle off filename display, if required

### Installation
1. Download the latest release discord-rpc.js from the [releases](https://github.com/Kas-tle/blockbench-rich-presence/releases) tab.
2. Place the file in a safe place, as Blockbench will not search for manually installed plugins if their location changes
3. Navigate to the "Filter" tab on the Blockbench menu bar
4. From the top of the context menu, select the </> symbol
5. Select the discord-rpc.js file downloaded from releases
