// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have npm walk north for 1.4 seconds and then callback
npc.walkNorth(1400, () => {
    // have npm walk east for 1.2 seconds and then callback
    npc.walkEast(1200, () => {
        // have npm walk south for .3 seconds and then callback
        npc.walkSouth(300, () => {
            // have npm walk east for 1.5 seconds and then callback
            npc.walkEast(1500, () => {
                // have npm walk south for 1.5 seconds and then callback
                npc.walkSouth(1500, () => {
                    // have npm walk east for 2.7 seconds and then callback
                    npc.walkEast(2700, () => {
                        npc.walkEast(400)
                    })
                })
            })
        })
    })
})

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
