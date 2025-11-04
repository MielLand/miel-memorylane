Config = {}

-- General
Config.Cooldown = 60 -- Seconds between memories
Config.Chance = 20 -- meaning 10 percent chance it happens once player entered radius
-- Default random lines
Config.DefaultMessages = {
    "You feel a strange sense of nostalgia...",
    "Something about this place feels familiar.",
    "Memories flood back for just a moment.",
    "You remember the first time you stood here...",
    "A faint echo of the past lingers in the air."
}

-- Memory spots
Config.MemorySpots = {
    {coords = vector3(213.5, -810.1, 30.7), radius = 5.0, message = "You remember the chaos of your first visit to Legion Square."},
    {coords = vector3(-56.9, -1096.5, 26.4), radius = 5.0, message = "The smell of fresh paint reminds you of your first car purchase here."},
    {coords = vector3(1854.1, 3683.5, 34.2), radius = 6.0, message = "The desert whispers back your first arrest..."},
    {coords = vector3(440.8, -981.9, 30.6), radius = 6.0, message = "You recall stepping into the PD for the very first time."}
}

