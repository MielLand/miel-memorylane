local lastMemory = 0
local spotEntered = false

CreateThread(function()
    while true do
        local playerPed = PlayerPedId()
        local playerCoords = GetEntityCoords(playerPed)
        local currentTime = GetGameTimer()
        local insideAnySpot = false

        for _, spot in pairs(Config.MemorySpots) do
            local dist = #(playerCoords - spot.coords)
            if dist < spot.radius then
                insideAnySpot = true
                if currentTime - lastMemory > (Config.Cooldown * 1000) and not spotEntered then
                    local chance = math.random(100) <= Config.Chance
                    if chance then
                        -- CreateThread(function ()
                        --     RequestAnimDict("random@drunk_driver_1")
                        --     while not HasAnimDictLoaded("random@drunk_driver_1") do
                        --         Wait(10)
                        --     end
                        --     ClearPedTasks(playerPed)
                        --     TaskPlayAnim(playerPed, "random@drunk_driver_1", "drunk_fall_over", 1.0, 1.0, -1, 8, 1.0, false, false, false)
                        -- end)
                        SetPedToRagdoll(playerPed, 10000, 10000, 0, false, false, false)
                        -- SetPedToRagdollWithFall(playerPed, 1000, 1000, 0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)
                        lastMemory = currentTime
                        local text = spot.message or Config.DefaultMessages[math.random(1, #Config.DefaultMessages)]
                        spotEntered = true
                        SendNUIMessage({
                            action = "showMemory",
                            text = text
                        })
                    end
                end
            end
        end

        if not insideAnySpot then
            spotEntered = false
        end

        Wait(1000)
    end
end)
