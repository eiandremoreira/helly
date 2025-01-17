/**
 * Numeric intents flags. All available properties:
 * * `GUILDS`
 * * `GUILD_MEMBERS`
 * * `GUILD_BANS`
 * * `GUILD_EMOJIS_AND_STICKERS`
 * * `GUILD_INTEGRATIONS`
 * * `GUILD_WEBHOOKS`
 * * `GUILD_INVITES`
 * * `GUILD_VOICE_STATES`
 * * `GUILD_PRESENCES`
 * * `GUILD_MESSAGES`
 * * `GUILD_MESSAGE_REACTIONS`
 * * `GUILD_MESSAGE_TYPING`
 * * `DIRECT_MESSAGE_REACTIONS`
 * * `DIRECT_MESSAGE_TYPING`
 * * `GUILD_SCHEDULED_EVENTS`
 * @see {@link https://discord.com/developers/docs/topics/gateway#gateway-intents}
 * @typedef {Object<string, number>} IntentFlags
 */
const FLAGS = {
	GUILDS: 1 << 0,
	GUILD_MEMBERS: 1 << 1,
	GUILD_BANS: 1 << 2,
	GUILD_EMOJIS_AND_STICKERS: 1 << 3,
	GUILD_INTEGRATIONS: 1 << 4,
	GUILD_WEBHOOKS: 1 << 5,
	GUILD_INVITES: 1 << 6,
	GUILD_VOICE_STATES: 1 << 7,
	GUILD_PRESENCES: 1 << 8,
	GUILD_MESSAGES: 1 << 9,
	GUILD_MESSAGE_REACTIONS: 1 << 10,
	GUILD_MESSAGE_TYPING: 1 << 11,
	DIRECT_MESSAGES: 1 << 12,
	DIRECT_MESSAGE_REACTIONS: 1 << 13,
	DIRECT_MESSAGE_TYPING: 1 << 14,
	GUILD_SCHEDULED_EVENTS: 1 << 16,
	ALL: 0,
};

FLAGS.ALL = Object.values(FLAGS).reduce((a, b) => a | b);

type IntentNames = keyof typeof FLAGS;

export { FLAGS, IntentNames };