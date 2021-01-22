while (true) {
    music.setVolume(100)
    if (input.lightLevel() < 10 && input.soundLevel() > 150) {
        light.setAll(light.rgb(255, 0, 0))
        music.wawawawaa.playUntilDone()
        pause(5000)
    } else {
        light.setAll(light.rgb(0, 255, 0))
    }
    
}
