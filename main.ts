basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 106)
    basic.pause(785)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 47)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 47)
    basic.pause(650)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 106)
})
