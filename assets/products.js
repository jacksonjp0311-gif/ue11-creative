/*
 * UE11 Creative: the single source of truth for every product on the site.
 * Every count on the page (headline, line cards, filter chips, end tile) is computed from this list by app.js.
 *
 * Fields
 *   name     = short name shown on the card ("Rei", "Golden Hour")
 *   title    = the full product name as listed on Gumroad (lightbox heading, alt text)
 *   status   = "live" or "soon". A pack only counts as live when its url is a real
 *              https://unifiedenergy11.gumroad.com/l/<permalink> address copied from the live page. Never guess one.
 *              "soon" packs appear dimmed in the grid's end tile, with no price and no buy button.
 *   art      = site-only gallery image (no baked-in text), built by tools/build_art.py
 *   samples  = real files from the pack (Twitch 112 px emotes, or screen/overlay thumbnails)
 *   contents = what is in the download zip (read from the zip by tools/build_art.py)
 */
window.UE11_SHOP = "https://unifiedenergy11.gumroad.com";
window.UE11_LINES = {
  samurai:   { name: "Samurai", jp: "侍" },
  kawaii:    { name: "Kawaii", jp: "可愛い" },
  yokai:     { name: "Yokai & Animals", jp: "妖" },
  halloween: { name: "Halloween", jp: "祭" },
  stream:    { name: "Stream & Tools", jp: "配信" }
};
window.UE11_PRODUCTS = [
  {
    slug: "samurai-emotions-rei", status: "live", url: "https://unifiedenergy11.gumroad.com/l/samurai-emotions-rei",
    name: "Rei", title: "UE11 Samurai Emotions: Rei", oc: "Rei", jp: "玲", line: "samurai", price: 15,
    hook: "24 emotes of a calm woman samurai OC with a crimson streak, plus battle wallpapers.",
    art: "assets/gallery/samurai-emotions-rei.webp",
    sampleKind: "emote", samples: ["assets/emotes/samurai-emotions-rei/hype.png", "assets/emotes/samurai-emotions-rei/gg.png", "assets/emotes/samurai-emotions-rei/lul.png", "assets/emotes/samurai-emotions-rei/love.png"],
    contents: ["24 emotes: Twitch 112/56/28 px + Discord 128 px (96 PNGs)", "24 transparent sticker PNGs", "24 high-res masters", "4 battle wallpapers", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  },
  {
    slug: "samurai-emotions-aoi", status: "live", url: "https://unifiedenergy11.gumroad.com/l/samurai-emotions",
    name: "Aoi", title: "UE11 Samurai Emotions", oc: "Aoi", jp: "蒼", line: "samurai", price: 15,
    hook: "24 emotes of Aoi, a cobalt-eyed samurai OC, plus battle wallpapers.",
    art: "assets/gallery/samurai-emotions-aoi.webp",
    sampleKind: "emote", samples: ["assets/emotes/samurai-emotions-aoi/hype.png", "assets/emotes/samurai-emotions-aoi/gg.png", "assets/emotes/samurai-emotions-aoi/lul.png", "assets/emotes/samurai-emotions-aoi/love.png"],
    contents: ["24 emotes: Twitch 112/56/28 px + Discord 128 px (96 PNGs)", "4 battle wallpapers", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  },
  {
    slug: "samurai-demon-kurogane", status: "live", url: "https://unifiedenergy11.gumroad.com/l/samurai-demon-kurogane",
    name: "Kurogane", title: "Kurogane Samurai Emote Pack", oc: "Kurogane", jp: "黒鉄", line: "samurai", price: 15,
    hook: "24 emotes of a steel-eyed human demon-fighter, plus 4 battle wallpapers.",
    art: "assets/gallery/samurai-demon-kurogane.webp",
    sampleKind: "emote", samples: ["assets/emotes/samurai-demon-kurogane/hype.png", "assets/emotes/samurai-demon-kurogane/gg.png", "assets/emotes/samurai-demon-kurogane/lul.png", "assets/emotes/samurai-demon-kurogane/love.png"],
    contents: ["24 emotes: Twitch 112/56/28 px + Discord 128 px (96 PNGs)", "24 transparent sticker PNGs", "24 high-res masters", "4 battle wallpapers", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  },
  {
    slug: "samurai-cyber-zero", status: "live", url: "https://unifiedenergy11.gumroad.com/l/samurai-cyber-zero",
    name: "Zero-Blade", title: "Zero-Blade Cyber Samurai Emote Pack", oc: "Zero-Blade", jp: "零", line: "samurai", price: 15,
    hook: "24 emotes of a neon cyber samurai, plus 4 rain-soaked battle wallpapers.",
    art: "assets/gallery/samurai-cyber-zero.webp",
    sampleKind: "emote", samples: ["assets/emotes/samurai-cyber-zero/hype.png", "assets/emotes/samurai-cyber-zero/gg.png", "assets/emotes/samurai-cyber-zero/lul.png", "assets/emotes/samurai-cyber-zero/love.png"],
    contents: ["24 emotes: Twitch 112/56/28 px + Discord 128 px (96 PNGs)", "24 transparent sticker PNGs", "24 high-res masters", "4 battle wallpapers", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  },
  {
    slug: "sushi-pack", status: "live", url: "https://unifiedenergy11.gumroad.com/l/sushi-pack",
    name: "Sushi", title: "UE11 Sushi Pack", oc: "", jp: "寿司", line: "kawaii", price: 12,
    hook: "24 kawaii sushi critters as die-cut stickers and emotes, plus cozy scenes.",
    art: "assets/gallery/sushi-pack.webp",
    sampleKind: "emote", samples: ["assets/emotes/sushi-pack/salmon-nigiri.png", "assets/emotes/sushi-pack/wasabi-blob.png", "assets/emotes/sushi-pack/egg-tamago.png", "assets/emotes/sushi-pack/tuna-nigiri.png"],
    contents: ["24 emotes: Twitch 112/56/28 px + Discord 128 px (96 PNGs)", "24 transparent sticker PNGs", "24 high-res masters", "2 screensaver scenes", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  },
  {
    slug: "soup-ramen-pack", status: "live", url: "https://unifiedenergy11.gumroad.com/l/soup-ramen-pack",
    name: "Soup & Ramen", title: "Soup & Ramen Kawaii Sticker Pack", oc: "", jp: "ラーメン", line: "kawaii", price: 12,
    hook: "15 ramen, gyoza and miso critters, plus cozy counter screensavers.",
    art: "assets/gallery/soup-ramen-pack.webp",
    sampleKind: "emote", samples: ["assets/emotes/soup-ramen-pack/ramen-bowl.png", "assets/emotes/soup-ramen-pack/gyoza.png", "assets/emotes/soup-ramen-pack/takoyaki.png", "assets/emotes/soup-ramen-pack/dumpling-trio.png"],
    contents: ["15 emotes: Twitch 112/56/28 px + Discord 128 px (60 PNGs)", "15 transparent sticker PNGs", "15 high-res masters", "2 screensaver scenes", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  },
  {
    slug: "kitsune-ember-seal", status: "live", url: "https://unifiedenergy11.gumroad.com/l/kitsune-ember-seal",
    name: "Kitsune", title: "Kitsune Ember Seal Emote Pack", oc: "", jp: "狐", line: "yokai", price: 17,
    hook: "24 emotes of an ember fox spirit, plus shrine screensavers and a 狐 seal set.",
    art: "assets/gallery/kitsune-ember-seal.webp",
    sampleKind: "emote", samples: ["assets/emotes/kitsune-ember-seal/hype.png", "assets/emotes/kitsune-ember-seal/gg.png", "assets/emotes/kitsune-ember-seal/lul.png", "assets/emotes/kitsune-ember-seal/love.png"],
    contents: ["24 emotes: Twitch 112/56/28 px + Discord 128 px (96 PNGs)", "24 transparent sticker PNGs", "24 high-res masters", "2 screensaver scenes", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  },
  {
    slug: "oni-pulse-mask", status: "live", url: "https://unifiedenergy11.gumroad.com/l/oni-pulse-mask",
    name: "Oni", title: "Oni Pulse Mask Emote Pack", oc: "", jp: "鬼", line: "yokai", price: 19,
    hook: "16 horned oni-mask emotes, plus temple scenes and battle wallpapers.",
    art: "assets/gallery/oni-pulse-mask.webp",
    sampleKind: "emote", samples: ["assets/emotes/oni-pulse-mask/hype.png", "assets/emotes/oni-pulse-mask/gg.png", "assets/emotes/oni-pulse-mask/lul.png", "assets/emotes/oni-pulse-mask/love.png"],
    contents: ["16 emotes: Twitch 112/56/28 px + Discord 128 px (64 PNGs)", "16 transparent sticker PNGs", "16 high-res masters", "2 battle wallpapers", "2 soft scenes", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  },
  {
    slug: "chochin-lantern-ghost", status: "live", url: "https://unifiedenergy11.gumroad.com/l/chochin-lantern-ghost",
    name: "Chōchin", title: "Halloween Kawaii Ghost Twitch Emotes & Discord Stickers | Chochi Lantern OC", oc: "Chochi", jp: "提灯", line: "halloween", price: 14,
    hook: "16 mood-glow lantern-ghost emotes, soft Halloween scenes, bonus stickers and Twitch sub badges.",
    art: "assets/gallery/chochin-lantern-ghost.webp",
    sampleKind: "emote", samples: ["assets/emotes/chochin-lantern-ghost/hype.png", "assets/emotes/chochin-lantern-ghost/gg.png", "assets/emotes/chochin-lantern-ghost/lul.png", "assets/emotes/chochin-lantern-ghost/love.png"],
    contents: ["16 emotes: Twitch 112/56/28 px + Discord 128 px (64 PNGs)", "16 transparent sticker PNGs", "16 high-res masters", "3 soft screensaver scenes (4K + 1080p)", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "10 Halloween bonus stickers + printable sheet", "3-tier Twitch sub badges (72/36/18 px)", "Upload guide, README and LICENSE"]
  },
  {
    slug: "komori-candy-bat", status: "live", url: "https://unifiedenergy11.gumroad.com/l/komori-candy-bat",
    name: "Komori", title: "Halloween Kawaii Bat Twitch Emotes & Discord Stickers | Komori Candy Bat OC", oc: "Komori", jp: "蝙蝠", line: "halloween", price: 14,
    hook: "16 candy-bat emotes in hang and upright poses, soft night scenes, bonus stickers and Twitch sub badges.",
    art: "assets/gallery/komori-candy-bat.webp",
    sampleKind: "emote", samples: ["assets/emotes/komori-candy-bat/hype.png", "assets/emotes/komori-candy-bat/gg.png", "assets/emotes/komori-candy-bat/lul.png", "assets/emotes/komori-candy-bat/love.png"],
    contents: ["16 emotes: Twitch 112/56/28 px + Discord 128 px (64 PNGs)", "16 transparent sticker PNGs", "16 high-res masters", "3 soft screensaver scenes (4K + 1080p)", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "10 Halloween bonus stickers + printable sheet", "3-tier Twitch sub badges (72/36/18 px)", "Upload guide, README and LICENSE"]
  },
  {
    slug: "origami-friends", status: "live", url: "https://unifiedenergy11.gumroad.com/l/origami-friends",
    name: "Origami", title: "Origami Friends Kawaii Sticker Pack", oc: "", jp: "折り紙", line: "kawaii", price: 12,
    hook: "11 folded-paper crane, fox, bunny, cat and frog stickers, plus picnic scenes.",
    art: "assets/gallery/origami-friends.webp",
    sampleKind: "emote", samples: ["assets/emotes/origami-friends/crane-love.png", "assets/emotes/origami-friends/fox-happy.png", "assets/emotes/origami-friends/cat-love.png", "assets/emotes/origami-friends/bunny-sleep.png"],
    contents: ["11 emotes: Twitch 112/56/28 px + Discord 128 px (44 PNGs)", "11 transparent sticker PNGs", "11 high-res masters", "2 screensaver scenes", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  },
  {
    slug: "neon-sakura-stream-kit", status: "live", url: "https://unifiedenergy11.gumroad.com/l/neon-sakura-stream",
    name: "Neon Sakura", title: "Neon Sakura Stream Kit", oc: "", jp: "桜", line: "stream", price: 19,
    hook: "Cyber-sakura OBS screens, alerts, webcam frames and channel panels.",
    art: "assets/gallery/neon-sakura-stream-kit.webp",
    sampleKind: "thumb", samples: ["assets/samples/neon-sakura-stream-kit/starting-soon.webp", "assets/samples/neon-sakura-stream-kit/sub.webp", "assets/samples/neon-sakura-stream-kit/about.webp", "assets/samples/neon-sakura-stream-kit/brb.webp"],
    contents: ["5 stream screens (1280×720)", "6 alerts", "5 channel panels", "3 webcam frames", "Upload guide, README and LICENSE"]
  },
  {
    slug: "emote-lab-vol1", status: "live", url: "https://unifiedenergy11.gumroad.com/l/emote-lab-vol1",
    name: "Emote Lab", title: "UE11 Emote Lab Vol.1", oc: "Pip", jp: "絵文字", line: "stream", price: 19,
    hook: "24 Twitch and Discord emotes starring Pip, an original pastel critter.",
    art: "assets/gallery/emote-lab-vol1.webp",
    sampleKind: "emote", samples: ["assets/emotes/emote-lab-vol1/hype.png", "assets/emotes/emote-lab-vol1/gg.png", "assets/emotes/emote-lab-vol1/lul.png", "assets/emotes/emote-lab-vol1/love.png"],
    contents: ["24 emotes: Twitch 112/56/28 px + Discord 128 px (96 PNGs)", "24 high-res masters", "Upload guide, README and LICENSE"]
  },
  {
    slug: "golden-hour-atmosphere", status: "live", url: "https://unifiedenergy11.gumroad.com/l/golden-hour-overlays",
    name: "Golden Hour", title: "Golden Hour Atmosphere Overlay Pack", oc: "", jp: "夕日", line: "stream", price: 15,
    hook: "48 transparent PNG light leaks, dust and bokeh for a late-day glow.",
    art: "assets/gallery/golden-hour-atmosphere.webp",
    sampleKind: "thumb", samples: ["assets/samples/golden-hour-atmosphere/light-leak-03.webp", "assets/samples/golden-hour-atmosphere/dust-03.webp", "assets/samples/golden-hour-atmosphere/bokeh-haze-05.webp"],
    contents: ["16 light leaks, 16 dust, 16 bokeh + haze PNGs (1920×1280)", "README and LICENSE"]
  },
  {
    slug: "chibi-sticker-lab", status: "live", url: "https://unifiedenergy11.gumroad.com/l/chibi-sticker-lab",
    name: "Chibi Prompts", title: "Chibi Sticker Lab Prompt Pack", oc: "", jp: "ちび", line: "stream", price: 12,
    hook: "90 Midjourney and SD prompts for thick-outline, die-cut chibi stickers.",
    art: "assets/gallery/chibi-sticker-lab.webp",
    sampleKind: "thumb", samples: ["assets/samples/chibi-sticker-lab/01-animals-01.webp", "assets/samples/chibi-sticker-lab/02-food-03.webp", "assets/samples/chibi-sticker-lab/04-fantasy-07.webp", "assets/samples/chibi-sticker-lab/05-emotes-09.webp"],
    contents: ["90 prompts (PROMPTS.md + PDF), workflow guide and sample images", "README and LICENSE"]
  },
  {
    slug: "neko-night-shift", status: "soon", url: "",
    name: "Neko", title: "Neko Night Shift Emote Pack", oc: "", jp: "猫", line: "yokai", price: 15,
    hook: "16 emotes of a charcoal night-owl cat, plus neon scenes and a paw hanko.",
    art: "assets/gallery/neko-night-shift.webp",
    sampleKind: "emote", samples: ["assets/emotes/neko-night-shift/hype.png", "assets/emotes/neko-night-shift/gg.png", "assets/emotes/neko-night-shift/love.png", "assets/emotes/neko-night-shift/blush.png"],
    contents: ["16 emotes: Twitch 112/56/28 px + Discord 128 px (64 PNGs)", "16 transparent sticker PNGs", "16 high-res masters", "2 battle wallpapers", "2 screensaver scenes", "2 soft scenes", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  },
  {
    slug: "shiba-loyalty-pack", status: "soon", url: "",
    name: "Shiba", title: "Shiba Loyalty Emote Pack", oc: "", jp: "柴", line: "yokai", price: 14,
    hook: "16 emotes of a red-sesame shiba, plus park scenes and a dog-seal hanko.",
    art: "assets/gallery/shiba-loyalty-pack.webp",
    sampleKind: "emote", samples: ["assets/emotes/shiba-loyalty-pack/hype.png", "assets/emotes/shiba-loyalty-pack/gg.png", "assets/emotes/shiba-loyalty-pack/love.png", "assets/emotes/shiba-loyalty-pack/blush.png"],
    contents: ["16 emotes: Twitch 112/56/28 px + Discord 128 px (64 PNGs)", "16 transparent sticker PNGs", "16 high-res masters", "2 battle wallpapers", "2 screensaver scenes", "2 soft scenes", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  },
  {
    slug: "dragon-ember-cub", status: "soon", url: "",
    name: "Dragon", title: "Dragon Ember Cub Emote Pack", oc: "", jp: "龍", line: "yokai", price: 15,
    hook: "16 emotes of an ember baby dragon, plus cloud and hot-spring scenes.",
    art: "assets/gallery/dragon-ember-cub.webp",
    sampleKind: "emote", samples: ["assets/emotes/dragon-ember-cub/hype.png", "assets/emotes/dragon-ember-cub/gg.png", "assets/emotes/dragon-ember-cub/love.png", "assets/emotes/dragon-ember-cub/blush.png"],
    contents: ["16 emotes: Twitch 112/56/28 px + Discord 128 px (64 PNGs)", "16 transparent sticker PNGs", "16 high-res masters", "2 battle wallpapers", "2 screensaver scenes", "2 soft scenes", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  },
  {
    slug: "usagi-moon-mail", status: "soon", url: "",
    name: "Usagi", title: "Usagi Moon Mail Emote Pack", oc: "", jp: "兎", line: "yokai", price: 14,
    hook: "16 emotes of a moon-courier bunny, plus moonlit scenes and a crescent hanko.",
    art: "assets/gallery/usagi-moon-mail.webp",
    sampleKind: "emote", samples: ["assets/emotes/usagi-moon-mail/hype.png", "assets/emotes/usagi-moon-mail/gg.png", "assets/emotes/usagi-moon-mail/love.png", "assets/emotes/usagi-moon-mail/blush.png"],
    contents: ["16 emotes: Twitch 112/56/28 px + Discord 128 px (64 PNGs)", "16 transparent sticker PNGs", "16 high-res masters", "2 battle wallpapers", "2 screensaver scenes", "2 soft scenes", "Brush-signature autograph set: brush-style name art, portrait card, letter sheet, hanko seals", "Upload guide, README and LICENSE"]
  }
];
