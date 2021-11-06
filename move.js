function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback) {
        let direction = null
        let x = left
        let y = bottom

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'


        function handleX(x, direction) {
            if (direction === 'west') {
                return x - 1
            }

            if (direction === 'east') {
                return x + 1
            }

            return x
        }

        function handleY(y, direction) {
            if (direction === 'north') {
                return y + 1
            }
            if (direction === 'south') {
                return y - 1
            }
            return y
        }
        function moveCharacter() {
            if (!direction) return

            const willElementCollide = boundaryBoxes.some(([Bx, By]) => {
                const [boxLeft, boxRight] = Bx
                const [boxTop, boxBottom] = By

                const charTop = element.offsetTop - handleY(0, direction)
                const charBottom = element.height + charTop - handleY(0, direction)
                const charLeft = handleX(element.offsetLeft, direction)
                const charRight = handleX(element.width + charLeft, direction)

                const xCollides = boxLeft < charRight && boxRight > charLeft
                const yCollides = boxTop < charBottom && boxBottom > charTop

                return xCollides && yCollides
            })

            if (willElementCollide) return

            x = handleX(x, direction)
            y = handleY(y, direction)

            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function (e) {
            if (e.repeat) return

            if (e.key === 'ArrowLeft') {
                direction = 'west'
            }
            if (e.key === 'ArrowUp') {
                direction = 'north'
            }
            if (e.key === 'ArrowRight') {
                direction = 'east'
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
            }
            callback(direction)
        })

        document.addEventListener('keyup', function (e) {
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}