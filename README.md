# Miel Memory Lane

[![Pay What You Want](https://img.shields.io/badge/Pay%20What%20You%20Want-%F0%9F%92%B0-green.svg)](https://ko-fi.com/miel_land)

**Miel Memory Lane** is a FiveM script that adds immersive, nostalgic flashbacks to your RP server. Players trigger haunting memories at key locations with glitchy visuals, typewriter text, ragdoll falls, and custom audio. Boost player retention and RP depth!

## 🎥 Showcase Video
[Watch Demo](https://youtu.be/NiTSCpE1lvA)  

## ✨ Features
- **Location-Based Triggers**: Custom spots with radius & messages (e.g., "First arrest echoes...").
- **Stunning NUI Effects**: Glitch overlays, film grain, chromatic text, pulse rings.
- **Typewriter Animation**: Smooth, wrapping text reveal (configurable speed).
- **Ragdoll & Audio**: Player falls + custom SFX.
- **Configurable**: Cooldown, chance (0-100%), standalone and compatible with any framework.
- **Easy Setup**: Drag & drop, no database.
- **Open Source**: This script is completely open source.

## 📦 Installation
1. Download & extract to `resources/[custom]`.
2. Add `ensure miel-memorylane` to `server.cfg`.
3. Edit `config.lua` for spots/messages.
4. Restart server.

**Test in-game**: Enter a spot.

## ⚙️ Config Example
```lua
Config.MemorySpots = {
    {coords = vector3(213.5, -810.1, 30.7), radius = 5.0, message = "Chaos at Legion Square..."}
}
Config.Chance = 100  -- Guaranteed trigger
Config.Cooldown = 60 -- 1 min between
```

## 💰 Pay What You Want
- **Free Forever**: Full script here on GitHub.
- **Support the Dev**: [Ko-Fi](https://ko-fi.com/miel_land) – Any support to me means the world, truly.
- **Why Donate?** Funds new features and more free unique scripts (Every $ helps! :))

## 🛠️ Support
- **Issues**: [GitHub Issues](https://github.com/MielLand/miel-memorylane/issues).
- **Discord**: [Join Server](https://discord.gg/uCydYa9s3T). (Join for coupons, discounts, giveaways and more!)

**Support greatly appreciated!** ⭐ Star this repo, share with server owners, or tip via Ko-fi. Let's make RP epic! 🚀**

**Join the discord and tell me your script ideas you want me to bring to life! At 100 members i will release another free script :)**
---

*Made with ❤️ by Miel | Version 1.0.0 |*
