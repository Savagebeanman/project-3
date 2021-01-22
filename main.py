while True:
    music.set_volume(100)

    if input.light_level() < 10 and input.sound_level() > 150:
        light.set_all(light.rgb(255,0,0))
        music.wawawawaa.play_until_done()
        pause(5000)

    else:
        light.set_all(light.rgb(0,255,0))
