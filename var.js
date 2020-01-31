var plugin_data = {

	id: 'discord-rpc',
	title: 'Discord Rich Presence',
	icon: 'announcement', //Material icon name
	author: 'strajabot & Kastle',
	description: 'Show a rich presence status in Discord',
	version: '1.0.0', //Plugin version
	variant: 'desktop'	// 'both', 'web', 'desktop'
};

(function() {

var setting;

Plugin.register("discord-rpc", {
"author": "strajabot & Kastle",
"icon": "announcement",
"version": "1.0.0",
"description": "Show a rich presence status in Discord",
onload() {

		setting = new Setting('obfiscaterpc', {
			value: true,
			name: 'Discord Rich Prescense',
			description: 'Obfiscate Project Name',
		})
