var removeFileNameAction;

Plugin.register('discord_rpc', {
    title: 'Discord Rich Presence',
    icon: 'announcement',
    author: 'strajabot and Kastle',
    description: 'Show a rich presence status in Discord',
    version: '1.0.0',
    min_version: '3.0.0',
    variant: 'desktop',

    onload() {
        removeFileNameAction = new Action({
            id: 'remove_filenaname',
            name: 'Discord RPC',
            icon: 'announcement',
            description: 'Discord RPC Settings',
            category: 'filter',
            click: function (ev) {
                settingsDialog.show();
            }
        });
        MenuBar.addAction(removeFileNameAction, 'filter');
    },
    onunload() {
        this.onuninstall();
    },
    onuninstall() {
        removeFileNameAction.delete();
    }
})

var settingsDialog = new Dialog({
    id: 'discordrpc_settings',
    title: 'Discord RPC Settings',
    draggable: true,
    form: {
        hide_names: {label: 'Hide Filename', type: 'checkbox'}
    },
    onConfirm: function(data) {
        exportSettings(data.hide_names);
        settingsDialog.hide();
    }
});

function exportSettings(hide_names) {
	var project_name;
	if (hide_names) {
		project_name = 'in Blockbench';
	}
	else {
		project_name = `${Project.name}.json`;
	}
}
!function(e) {
    var t = {};
    function s(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, s), i.l = !0, i.exports;
    }
    s.m = e, s.c = t, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        });
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) s.d(n, i, function(t) {
            return e[t];
        }.bind(null, i));
        return n;
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return s.d(t, "a", t), t;
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, s.p = "", s(s.s = 4);
}([ function(e, t, s) {
    "use strict";
    let n;
    try {
        const {app: e} = s(6);
        n = e.setAsDefaultProtocolClient.bind(e);
    } catch (e) {
        try {
            n = s(7);
        } catch (e) {}
    }
    "function" != typeof n && (n = (() => !1));
    e.exports = {
        pid: function() {
            return "undefined" != typeof process ? process.pid : null;
        },
        register: n,
        uuid: () => {
            let e = "";
            for (let t = 0; t < 32; t += 1) {
                let s;
                if (8 !== t && 12 !== t && 16 !== t && 20 !== t || (e += "-"), 12 === t) s = 4; else {
                    const e = 16 * Math.random() | 0;
                    s = 16 === t ? 3 & e | 0 : e;
                }
                e += s.toString(16);
            }
            return e;
        }
    };
}, function(e, t) {
    e.exports = require("events");
}, function(e, t, s) {
    "use strict";
    var n = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== n) return n;
        throw new Error("unable to locate global object");
    }();
    e.exports = t = n.fetch, t.default = n.fetch.bind(n), t.Headers = n.Headers, t.Request = n.Request, 
    t.Response = n.Response;
}, function(e, t, s) {
    "use strict";
    function n(e) {
        const t = {};
        for (const s of e) t[s] = s;
        return t;
    }
    t.browser = "undefined" != typeof window, t.RPCCommands = n([ "DISPATCH", "AUTHORIZE", "AUTHENTICATE", "GET_GUILD", "GET_GUILDS", "GET_CHANNEL", "GET_CHANNELS", "GET_RELATIONSHIPS", "GET_USER", "SUBSCRIBE", "UNSUBSCRIBE", "SET_USER_VOICE_SETTINGS", "SET_USER_VOICE_SETTINGS_2", "SELECT_VOICE_CHANNEL", "GET_SELECTED_VOICE_CHANNEL", "SELECT_TEXT_CHANNEL", "GET_VOICE_SETTINGS", "SET_VOICE_SETTINGS_2", "SET_VOICE_SETTINGS", "CAPTURE_SHORTCUT", "SET_ACTIVITY", "SEND_ACTIVITY_JOIN_INVITE", "CLOSE_ACTIVITY_JOIN_REQUEST", "ACTIVITY_INVITE_USER", "ACCEPT_ACTIVITY_INVITE", "INVITE_BROWSER", "DEEP_LINK", "CONNECTIONS_CALLBACK", "BRAINTREE_POPUP_BRIDGE_CALLBACK", "GIFT_CODE_BROWSER", "OVERLAY", "BROWSER_HANDOFF", "SET_CERTIFIED_DEVICES", "GET_IMAGE", "CREATE_LOBBY", "UPDATE_LOBBY", "DELETE_LOBBY", "UPDATE_LOBBY_MEMBER", "CONNECT_TO_LOBBY", "DISCONNECT_FROM_LOBBY", "SEND_TO_LOBBY", "SEARCH_LOBBIES", "CONNECT_TO_LOBBY_VOICE", "DISCONNECT_FROM_LOBBY_VOICE", "SET_OVERLAY_LOCKED", "OPEN_OVERLAY_ACTIVITY_INVITE", "OPEN_OVERLAY_GUILD_INVITE", "OPEN_OVERLAY_VOICE_SETTINGS", "VALIDATE_APPLICATION", "GET_ENTITLEMENT_TICKET", "GET_APPLICATION_TICKET", "START_PURCHASE", "GET_SKUS", "GET_ENTITLEMENTS", "GET_NETWORKING_CONFIG", "NETWORKING_SYSTEM_METRICS", "NETWORKING_PEER_METRICS", "NETWORKING_CREATE_TOKEN", "SET_USER_ACHIEVEMENT", "GET_USER_ACHIEVEMENTS" ]), 
    t.RPCEvents = n([ "CURRENT_USER_UPDATE", "GUILD_STATUS", "GUILD_CREATE", "CHANNEL_CREATE", "RELATIONSHIP_UPDATE", "VOICE_CHANNEL_SELECT", "VOICE_STATE_CREATE", "VOICE_STATE_DELETE", "VOICE_STATE_UPDATE", "VOICE_SETTINGS_UPDATE", "VOICE_SETTINGS_UPDATE_2", "VOICE_CONNECTION_STATUS", "SPEAKING_START", "SPEAKING_STOP", "GAME_JOIN", "GAME_SPECTATE", "ACTIVITY_JOIN", "ACTIVITY_JOIN_REQUEST", "ACTIVITY_SPECTATE", "ACTIVITY_INVITE", "NOTIFICATION_CREATE", "MESSAGE_CREATE", "MESSAGE_UPDATE", "MESSAGE_DELETE", "LOBBY_DELETE", "LOBBY_UPDATE", "LOBBY_MEMBER_CONNECT", "LOBBY_MEMBER_DISCONNECT", "LOBBY_MEMBER_UPDATE", "LOBBY_MESSAGE", "CAPTURE_SHORTCUT_CHANGE", "OVERLAY", "OVERLAY_UPDATE", "ENTITLEMENT_CREATE", "ENTITLEMENT_DELETE", "USER_ACHIEVEMENT_UPDATE", "READY", "ERROR" ]), 
    t.RPCErrors = {
        CAPTURE_SHORTCUT_ALREADY_LISTENING: 5004,
        GET_GUILD_TIMED_OUT: 5002,
        INVALID_ACTIVITY_JOIN_REQUEST: 4012,
        INVALID_ACTIVITY_SECRET: 5005,
        INVALID_CHANNEL: 4005,
        INVALID_CLIENTID: 4007,
        INVALID_COMMAND: 4002,
        INVALID_ENTITLEMENT: 4015,
        INVALID_EVENT: 4004,
        INVALID_GIFT_CODE: 4016,
        INVALID_GUILD: 4003,
        INVALID_INVITE: 4011,
        INVALID_LOBBY: 4013,
        INVALID_LOBBY_SECRET: 4014,
        INVALID_ORIGIN: 4008,
        INVALID_PAYLOAD: 4e3,
        INVALID_PERMISSIONS: 4006,
        INVALID_TOKEN: 4009,
        INVALID_USER: 4010,
        LOBBY_FULL: 5007,
        NO_ELIGIBLE_ACTIVITY: 5006,
        OAUTH2_ERROR: 5e3,
        PURCHASE_CANCELED: 5008,
        PURCHASE_ERROR: 5009,
        RATE_LIMITED: 5011,
        SELECT_CHANNEL_TIMED_OUT: 5001,
        SELECT_VOICE_FORCE_REQUIRED: 5003,
        SERVICE_UNAVAILABLE: 1001,
        TRANSACTION_ABORTED: 1002,
        UNAUTHORIZED_FOR_ACHIEVEMENT: 5010,
        UNKNOWN_ERROR: 1e3
    }, t.RPCCloseCodes = {
        CLOSE_NORMAL: 1e3,
        CLOSE_UNSUPPORTED: 1003,
        CLOSE_ABNORMAL: 1006,
        INVALID_CLIENTID: 4e3,
        INVALID_ORIGIN: 4001,
        RATELIMITED: 4002,
        TOKEN_REVOKED: 4003,
        INVALID_VERSION: 4004,
        INVALID_ENCODING: 4005
    }, t.LobbyTypes = {
        PRIVATE: 1,
        PUBLIC: 2
    }, t.RelationshipTypes = {
        NONE: 0,
        FRIEND: 1,
        BLOCKED: 2,
        PENDING_INCOMING: 3,
        PENDING_OUTGOING: 4,
        IMPLICIT: 5
    };
}, function(e, t, s) {
    const n = new (s(5).Client)({
        transport: "ipc"
    }), i = new Date();
    async function o() {
        n && n.setActivity({
            largeImageKey: "icon",
            largeImageText: `Blockbench ${Blockbench.version}`,
            smallImageKey: `${Format.id}`,
            details: `Making a ${Format.name}`,
            state: `${project_name}`,
            startTimestamp: i,
            instance: !1
        });
    }
    n.on("ready", () => {
        o(), intervalID = setInterval(() => {
            o();
        }, 15e3);
    }), n.login({
        clientId: "642126871177199617"
    }).catch(console.error);
}, function(e, t, s) {
    "use strict";
    const n = s(0);
    e.exports = {
        Client: s(8),
        register: e => n.register(`discord-${e}`)
    };
}, function(e, t) {
    if ("undefined" == typeof electron) {
        var s = new Error("Cannot find module 'electron'");
        throw s.code = "MODULE_NOT_FOUND", s;
    }
    e.exports = electron;
}, function(e, t) {}, function(e, t, s) {
    "use strict";
    const n = s(1), {setTimeout: i, clearTimeout: o} = s(9), r = s(2), c = s(10), {RPCCommands: E, RPCEvents: a, RelationshipTypes: _} = s(3), {pid: T, uuid: u} = s(0);
    function I(e, t) {
        return `${e}${JSON.stringify(t)}`;
    }
    e.exports = class extends n {
        constructor(e = {}) {
            super(), this.options = e, this.accessToken = null, this.clientId = null, this.application = null, 
            this.user = null;
            const t = c[e.transport];
            if (!t) throw new TypeError("RPC_INVALID_TRANSPORT", e.transport);
            this.fetch = ((e, t, {data: s, query: n} = {}) => r(`${this.fetch.endpoint}${t}${n ? new URLSearchParams(n) : ""}`, {
                method: e,
                body: s,
                headers: {
                    Authorization: `Bearer ${this.accessToken}`
                }
            }).then(e => e.json())), this.fetch.endpoint = "https://discordapp.com/api", this.transport = new t(this), 
            this.transport.on("message", this._onRpcMessage.bind(this)), this._expecting = new Map(), 
            this._subscriptions = new Map(), this._connectPromise = void 0;
        }
        connect(e) {
            return this._connectPromise ? this._connectPromise : (this._connectPromise = new Promise((t, s) => {
                this.clientId = e;
                const n = i(() => s(new Error("RPC_CONNECTION_TIMEOUT")), 1e4);
                n.unref(), this.once("connected", () => {
                    o(n), t(this);
                }), this.transport.once("close", () => {
                    this._expecting.forEach(e => {
                        e.reject(new Error("connection closed"));
                    }), this.emit("disconnected"), s();
                }), this.transport.connect().catch(s);
            }), this._connectPromise);
        }
        async login(e = {}) {
            let {clientId: t, accessToken: s} = e;
            return await this.connect(t), e.scopes ? (s || (s = await this.authorize(e)), this.authenticate(s)) : (this.emit("ready"), 
            this);
        }
        request(e, t, s) {
            return new Promise((n, i) => {
                const o = u();
                this.transport.send({
                    cmd: e,
                    args: t,
                    evt: s,
                    nonce: o
                }), this._expecting.set(o, {
                    resolve: n,
                    reject: i
                });
            });
        }
        _onRpcMessage(e) {
            if (e.cmd === E.DISPATCH && e.evt === a.READY) e.data.user && (this.user = e.data.user), 
            this.emit("connected"); else if (this._expecting.has(e.nonce)) {
                const {resolve: t, reject: s} = this._expecting.get(e.nonce);
                if ("ERROR" === e.evt) {
                    const t = new Error(e.data.message);
                    t.code = e.data.code, t.data = e.data, s(t);
                } else t(e.data);
                this._expecting.delete(e.nonce);
            } else {
                const t = I(e.evt, e.args);
                if (!this._subscriptions.has(t)) return;
                this._subscriptions.get(t)(e.data);
            }
        }
        async authorize({scopes: e, clientSecret: t, rpcToken: s, redirectUri: n} = {}) {
            t && !0 === s && (s = (await this.fetch("POST", "/oauth2/token/rpc", {
                data: new URLSearchParams({
                    client_id: this.clientId,
                    client_secret: t
                })
            })).rpc_token);
            const {code: i} = await this.request("AUTHORIZE", {
                scopes: e,
                client_id: this.clientId,
                rpc_token: s,
                redirect_uri: n
            });
            return (await this.fetch("POST", "/oauth2/token", {
                data: new URLSearchParams({
                    client_id: this.clientId,
                    client_secret: t,
                    code: i,
                    grant_type: "authorization_code",
                    redirect_uri: n
                })
            })).access_token;
        }
        authenticate(e) {
            return this.request("AUTHENTICATE", {
                access_token: e
            }).then(({application: t, user: s}) => (this.accessToken = e, this.application = t, 
            this.user = s, this.emit("ready"), this));
        }
        getGuild(e, t) {
            return this.request(E.GET_GUILD, {
                guild_id: e,
                timeout: t
            });
        }
        getGuilds(e) {
            return this.request(E.GET_GUILDS, {
                timeout: e
            });
        }
        getChannel(e, t) {
            return this.request(E.GET_CHANNEL, {
                channel_id: e,
                timeout: t
            });
        }
        async getChannels(e, t) {
            const {channels: s} = await this.request(E.GET_CHANNELS, {
                timeout: t,
                guild_id: e
            });
            return s;
        }
        setCertifiedDevices(e) {
            return this.request(E.SET_CERTIFIED_DEVICES, {
                devices: e.map(e => ({
                    type: e.type,
                    id: e.uuid,
                    vendor: e.vendor,
                    model: e.model,
                    related: e.related,
                    echo_cancellation: e.echoCancellation,
                    noise_suppression: e.noiseSuppression,
                    automatic_gain_control: e.automaticGainControl,
                    hardware_mute: e.hardwareMute
                }))
            });
        }
        setUserVoiceSettings(e, t) {
            return this.request(E.SET_USER_VOICE_SETTINGS, {
                user_id: e,
                pan: t.pan,
                mute: t.mute,
                volume: t.volume
            });
        }
        selectVoiceChannel(e, {timeout: t, force: s = !1} = {}) {
            return this.request(E.SELECT_VOICE_CHANNEL, {
                channel_id: e,
                timeout: t,
                force: s
            });
        }
        selectTextChannel(e, {timeout: t, force: s = !1} = {}) {
            return this.request(E.SELECT_TEXT_CHANNEL, {
                channel_id: e,
                timeout: t,
                force: s
            });
        }
        getVoiceSettings() {
            return this.request(E.GET_VOICE_SETTINGS).then(e => ({
                automaticGainControl: e.automatic_gain_control,
                echoCancellation: e.echo_cancellation,
                noiseSuppression: e.noise_suppression,
                qos: e.qos,
                silenceWarning: e.silence_warning,
                deaf: e.deaf,
                mute: e.mute,
                input: {
                    availableDevices: e.input.available_devices,
                    device: e.input.device_id,
                    volume: e.input.volume
                },
                output: {
                    availableDevices: e.output.available_devices,
                    device: e.output.device_id,
                    volume: e.output.volume
                },
                mode: {
                    type: e.mode.type,
                    autoThreshold: e.mode.auto_threshold,
                    threshold: e.mode.threshold,
                    shortcut: e.mode.shortcut,
                    delay: e.mode.delay
                }
            }));
        }
        setVoiceSettings(e) {
            return this.request(E.SET_VOICE_SETTINGS, {
                automatic_gain_control: e.automaticGainControl,
                echo_cancellation: e.echoCancellation,
                noise_suppression: e.noiseSuppression,
                qos: e.qos,
                silence_warning: e.silenceWarning,
                deaf: e.deaf,
                mute: e.mute,
                input: e.input ? {
                    device_id: e.input.device,
                    volume: e.input.volume
                } : void 0,
                output: e.output ? {
                    device_id: e.output.device,
                    volume: e.output.volume
                } : void 0,
                mode: e.mode ? {
                    mode: e.mode.type,
                    auto_threshold: e.mode.autoThreshold,
                    threshold: e.mode.threshold,
                    shortcut: e.mode.shortcut,
                    delay: e.mode.delay
                } : void 0
            });
        }
        captureShortcut(e) {
            const t = I(a.CAPTURE_SHORTCUT_CHANGE), s = () => (this._subscriptions.delete(t), 
            this.request(E.CAPTURE_SHORTCUT, {
                action: "STOP"
            }));
            return this._subscriptions.set(t, ({shortcut: t}) => {
                e(t, s);
            }), this.request(E.CAPTURE_SHORTCUT, {
                action: "START"
            }).then(() => s);
        }
        setActivity(e = {}, t = T()) {
            let s, n, i, o;
            if (e.startTimestamp || e.endTimestamp) {
                if ((s = {
                    start: e.startTimestamp,
                    end: e.endTimestamp
                }).start instanceof Date && (s.start = Math.round(s.start.getTime())), s.end instanceof Date && (s.end = Math.round(s.end.getTime())), 
                s.start > 2147483647e3) throw new RangeError("timestamps.start must fit into a unix timestamp");
                if (s.end > 2147483647e3) throw new RangeError("timestamps.end must fit into a unix timestamp");
            }
            return (e.largeImageKey || e.largeImageText || e.smallImageKey || e.smallImageText) && (n = {
                large_image: e.largeImageKey,
                large_text: e.largeImageText,
                small_image: e.smallImageKey,
                small_text: e.smallImageText
            }), (e.partySize || e.partyId || e.partyMax) && (i = {
                id: e.partyId
            }, (e.partySize || e.partyMax) && (i.size = [ e.partySize, e.partyMax ])), (e.matchSecret || e.joinSecret || e.spectateSecret) && (o = {
                match: e.matchSecret,
                join: e.joinSecret,
                spectate: e.spectateSecret
            }), this.request(E.SET_ACTIVITY, {
                pid: t,
                activity: {
                    state: e.state,
                    details: e.details,
                    timestamps: s,
                    assets: n,
                    party: i,
                    secrets: o,
                    instance: !!e.instance
                }
            });
        }
        clearActivity(e = T()) {
            return this.request(E.SET_ACTIVITY, {
                pid: e
            });
        }
        sendJoinInvite(e) {
            return this.request(E.SEND_ACTIVITY_JOIN_INVITE, {
                user_id: e.id || e
            });
        }
        sendJoinRequest(e) {
            return this.request(E.SEND_ACTIVITY_JOIN_REQUEST, {
                user_id: e.id || e
            });
        }
        closeJoinRequest(e) {
            return this.request(E.CLOSE_ACTIVITY_JOIN_REQUEST, {
                user_id: e.id || e
            });
        }
        createLobby(e, t, s) {
            return this.request(E.CREATE_LOBBY, {
                type: e,
                capacity: t,
                metadata: s
            });
        }
        updateLobby(e, {type: t, owner: s, capacity: n, metadata: i} = {}) {
            return this.request(E.UPDATE_LOBBY, {
                id: e.id || e,
                type: t,
                owner_id: s && s.id || s,
                capacity: n,
                metadata: i
            });
        }
        deleteLobby(e) {
            return this.request(E.DELETE_LOBBY, {
                id: e.id || e
            });
        }
        connectToLobby(e, t) {
            return this.request(E.CONNECT_TO_LOBBY, {
                id: e,
                secret: t
            });
        }
        sendToLobby(e, t) {
            return this.request(E.SEND_TO_LOBBY, {
                id: e.id || e,
                data: t
            });
        }
        disconnectFromLobby(e) {
            return this.request(E.DISCONNECT_FROM_LOBBY, {
                id: e.id || e
            });
        }
        updateLobbyMember(e, t, s) {
            return this.request(E.UPDATE_LOBBY_MEMBER, {
                lobby_id: e.id || e,
                user_id: t.id || t,
                metadata: s
            });
        }
        getRelationships() {
            const e = Object.keys(_);
            return this.request(E.GET_RELATIONSHIPS).then(t => t.relationships.map(t => ({
                ...t,
                type: e[t.type]
            })));
        }
        subscribe(e, t, s) {
            return s || "function" != typeof t || (s = t, t = void 0), this.request(E.SUBSCRIBE, t, e).then(() => {
                const n = I(e, t);
                return this._subscriptions.set(n, s), {
                    unsubscribe: () => this.request(E.UNSUBSCRIBE, t, e).then(() => this._subscriptions.delete(n))
                };
            });
        }
        async destroy() {
            this.transport.close();
        }
    };
}, function(e, t) {
    e.exports = require("timers");
}, function(e, t, s) {
    "use strict";
    e.exports = {
        ipc: s(11),
        websocket: s(13)
    };
}, function(e, t, s) {
    "use strict";
    const n = s(12), i = s(1), o = s(2), {uuid: r} = s(0), c = {
        HANDSHAKE: 0,
        FRAME: 1,
        CLOSE: 2,
        PING: 3,
        PONG: 4
    };
    function E(e = 0) {
        return new Promise((t, s) => {
            const i = function(e) {
                if ("win32" === process.platform) return `\\\\?\\pipe\\discord-ipc-${e}`;
                const {env: {XDG_RUNTIME_DIR: t, TMPDIR: s, TMP: n, TEMP: i}} = process;
                return `${(t || s || n || i || "/tmp").replace(/\/$/, "")}/discord-ipc-${e}`;
            }(e), o = () => {
                e < 10 ? t(E(e + 1)) : s(new Error("Could not connect"));
            }, r = n.createConnection(i, () => {
                r.removeListener("error", o), t(r);
            });
            r.once("error", o);
        });
    }
    function a(e, t) {
        t = JSON.stringify(t);
        const s = Buffer.byteLength(t), n = Buffer.alloc(8 + s);
        return n.writeInt32LE(e, 0), n.writeInt32LE(s, 4), n.write(t, 8, s), n;
    }
    const _ = {
        full: "",
        op: void 0
    };
    function T(e, t) {
        const s = e.read();
        if (!s) return;
        let n, {op: i} = _;
        if ("" === _.full) {
            i = _.op = s.readInt32LE(0);
            const e = s.readInt32LE(4);
            n = s.slice(8, e + 8);
        } else n = s.toString();
        try {
            t({
                op: i,
                data: JSON.parse(_.full + n)
            }), _.full = "", _.op = void 0;
        } catch (e) {
            _.full += n;
        }
        T(e, t);
    }
    e.exports = class extends i {
        constructor(e) {
            super(), this.client = e, this.socket = null;
        }
        async connect() {
            const e = this.socket = await E();
            e.on("close", this.onClose.bind(this)), e.on("error", this.onClose.bind(this)), 
            this.emit("open"), e.write(a(c.HANDSHAKE, {
                v: 1,
                client_id: this.client.clientId
            })), e.pause(), e.on("readable", () => {
                T(e, ({op: e, data: t}) => {
                    switch (e) {
                      case c.PING:
                        this.send(t, c.PONG);
                        break;

                      case c.FRAME:
                        if (!t) return;
                        "AUTHORIZE" === t.cmd && "ERROR" !== t.evt && async function e(t = 0) {
                            if (t > 30) throw new Error("Could not find endpoint");
                            const s = `http://127.0.0.1:${6463 + t % 10}`;
                            try {
                                return 401 !== (await o(s)).status ? e(t + 1) : s;
                            } catch (s) {
                                return e(t + 1);
                            }
                        }().then(e => {
                            this.client.request.endpoint = e;
                        }), this.emit("message", t);
                        break;

                      case c.CLOSE:
                        this.emit("close", t);
                    }
                });
            });
        }
        onClose(e) {
            this.emit("close", e);
        }
        send(e, t = c.FRAME) {
            this.socket.write(a(t, e));
        }
        close() {
            this.send({}, c.CLOSE), this.socket.end();
        }
        ping() {
            this.send(r(), c.PING);
        }
    }, e.exports.encode = a, e.exports.decode = T;
}, function(e, t) {
    e.exports = require("net");
}, function(e, t, s) {
    "use strict";
    const n = s(1), {browser: i} = s(3), o = i ? window.WebSocket : s(14), r = e => JSON.stringify(e), c = e => JSON.parse(e);
    e.exports = class extends n {
        constructor(e) {
            super(), this.client = e, this.ws = null, this.tries = 0;
        }
        async connect(e, t = this.tries) {
            if (this.connected) return;
            const s = 6463 + t % 10;
            this.hostAndPort = `127.0.0.1:${s}`;
            const n = this.ws = new o(`ws://${this.hostAndPort}/?v=1&client_id=${this.client.clientId}`);
            n.onopen = this.onOpen.bind(this), n.onclose = n.onerror = this.onClose.bind(this), 
            n.onmessage = this.onMessage.bind(this);
        }
        send(e) {
            this.ws && this.ws.send(r(e));
        }
        close() {
            this.ws && this.ws.close();
        }
        ping() {}
        onMessage(e) {
            this.emit("message", c(e.data));
        }
        onOpen() {
            this.emit("open");
        }
        onClose(e) {
            try {
                this.ws.close();
            } catch (e) {}
            const t = e.code >= 4e3 && e.code < 5e3;
            e.code && !t || this.emit("close", e), t || setTimeout(() => this.connect(void 0, 1006 === e.code ? ++this.tries : 0), 250);
        }
    };
}, function(e, t) {} ]);