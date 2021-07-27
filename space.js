var canvas = document.querySelector("canvas")
canvas.width = 0
canvas.height = 0

var shoot=document.getElementById("shootsound")

document.getElementById("startgamebtn").addEventListener("click", () => {


    document.getElementById("back").style.display = "none"
    var canvas = document.querySelector("canvas")
    var cvx = canvas.getContext("2d");
    document.getElementById("startgamebtn")
    canvas.width = innerWidth
    canvas.height = innerHeight
    const x = canvas.width / 2
    const y = canvas.height / 2

    class enemy {
        constructor(X, Y, radius, color) {
            this.X = X
            this.Y = Y
            this.radius = radius
            this.color = color
        }
        draw() {
            cvx.beginPath()
            cvx.arc(this.X, this.Y, this.radius, 0, 2 * Math.PI, false)
            cvx.fillStyle = this.color
            cvx.fill()
            cvx.beginPath()
            cvx.moveTo(this.X, this.Y - this.radius)


            cvx.lineTo(this.X + 25 * Math.cos(3 * Math.PI / 8), this.Y - 25 * Math.sin(3 * Math.PI / 8))
            cvx.lineTo(this.X + this.radius * Math.cos(2 * Math.PI / 8), this.Y - this.radius * Math.sin(2 * Math.PI / 8))
            cvx.lineTo(this.X + 25 * Math.cos(1 * Math.PI / 8), this.Y - 25 * Math.sin(1 * Math.PI / 8))
            cvx.lineTo(this.X + this.radius * Math.cos(0 * Math.PI / 8), this.Y - this.radius * Math.sin(0 * Math.PI / 8))

            cvx.lineTo(this.X + 25 * Math.cos(1 * Math.PI / 8), this.Y + 25 * Math.sin(1 * Math.PI / 8))
            cvx.lineTo(this.X + this.radius * Math.cos(2 * Math.PI / 8), this.Y + this.radius * Math.sin(2 * Math.PI / 8))
            cvx.lineTo(this.X + 25 * Math.cos(3 * Math.PI / 8), this.Y + 25 * Math.sin(3 * Math.PI / 8))
            cvx.lineTo(this.X + this.radius * Math.cos(4 * Math.PI / 8), this.Y + this.radius * Math.sin(4 * Math.PI / 8))
            cvx.strokeStyle = "white"


            cvx.lineTo(this.X - 25 * Math.cos(3 * Math.PI / 8), this.Y + 25 * Math.sin(3 * Math.PI / 8))
            cvx.lineTo(this.X - this.radius * Math.cos(2 * Math.PI / 8), this.Y + this.radius * Math.sin(2 * Math.PI / 8))
            cvx.lineTo(this.X - 25 * Math.cos(1 * Math.PI / 8), this.Y + 25 * Math.sin(1 * Math.PI / 8))
            cvx.lineTo(this.X - this.radius * Math.cos(0 * Math.PI / 8), this.Y + this.radius * Math.sin(0 * Math.PI / 8))


            cvx.lineTo(this.X - 25 * Math.cos(1 * Math.PI / 8), this.Y - 25 * Math.sin(1 * Math.PI / 8))
            cvx.lineTo(this.X - this.radius * Math.cos(2 * Math.PI / 8), this.Y - this.radius * Math.sin(2 * Math.PI / 8))
            cvx.lineTo(this.X - 25 * Math.cos(3 * Math.PI / 8), this.Y - 25 * Math.sin(3 * Math.PI / 8))
            cvx.lineTo(this.X - this.radius * Math.cos(4 * Math.PI / 8), this.Y - this.radius * Math.sin(4 * Math.PI / 8))
            cvx.fillStyle = "white"
            cvx.fill()



        }

        update() {
            this.X = this.X - 3
            this.draw()
        }
    }


    const alienlist = []
    setInterval(() => {
        alienlist.push(new enemy(window.innerWidth, Math.random() * 800, 20, "red"))
        //console.log(alienlist)
    }, 1000)

    class spaceship {
        constructor(xcord, ycord, radius, color) {
            this.xcord = xcord
            this.ycord = ycord
            this.radius = radius
            this.color = color
        }
        draw() {
            cvx.beginPath()
            cvx.arc(this.xcord, this.ycord, this.radius, 0, 2 * Math.PI, false)
            cvx.fillStyle = this.color
            cvx.fill()
            cvx.beginPath()

        }


    }
    const spacecraft = new spaceship(canvas.width / 2, canvas.height / 2, 20, "red")
    spacecraft.draw()
    var counter = 0
    var highscore


    function storagesectionandsiplay() {
        if (localStorage.getItem("users") == null) {
            localStorage.setItem("users", counter)
            highscore = localStorage.getItem("users")
            cvx.fillStyle = "orange"
            cvx.font = "30px Roboto"
            cvx.fillText("Yourscore : " + counter, 100, 500)
            cvx.fillText("Highest Score : " + highscore, 100, 550)
        } else if (counter > localStorage.getItem("users")) {
            localStorage.setItem("users", counter)
            highscore = localStorage.getItem("users")
            cvx.fillStyle = "orange"
            cvx.font = "30px Roboto"
            cvx.fillText("Yourscore : " + counter, 100, 500)
            cvx.fillText("Highest Score : " + highscore, 100, 550)
        } else {
            highscore = localStorage.getItem("users");
            cvx.fillStyle = "orange"
            cvx.font = "30px Roboto"
            cvx.fillText("Yourscore : " + counter, 100, 500)
            cvx.fillText("Highest Score : " + highscore, 100, 550)
        }

    }



    class bullet {
        constructor(x, y, radius, color, velocity) {
            this.x = x
            this.y = y
            this.radius = radius
            this.velocity = velocity
            this.color = color
        }
        draw() {
            cvx.beginPath()
            cvx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
            cvx.fillStyle = this.color
            cvx.fill()
        }
        update() {
            this.x = this.x + this.velocity.x
            this.y = this.y + this.velocity.y
            this.draw()
        }
    }

    spacecraft.draw()

    function reloadingpage() {
        window.location.reload()
    }

    function animate() {
        let animateid = requestAnimationFrame(animate)
        cvx.fillStyle = "rgba(0,0,0,0.2)"
        cvx.beginPath()
        cvx.fillRect(0, 0, innerWidth, innerHeight)

        cvx.moveTo(innerWidth / 2 - 20, innerHeight / 2)
        cvx.bezierCurveTo(innerWidth / 2 - 30, innerHeight / 2 - 30, innerWidth / 2 - 30, innerHeight / 2 - 60, innerWidth / 2, 200)
        cvx.moveTo(innerWidth / 2, 200)
        cvx.bezierCurveTo(innerWidth / 2 + 30, innerHeight / 2 - 60, innerWidth / 2 + 30, innerHeight / 2 - 30, innerWidth / 2 + 20, innerHeight / 2)
        cvx.fillStyle = "blue"
        cvx.fill()
        cvx.beginPath()
        cvx.arc(innerWidth / 2, innerHeight / 2 - 50, 10, 0, 2 * Math.PI)
        cvx.strokeStyle = "red"
        cvx.stroke()
        cvx.beginPath()
        cvx.arc(innerWidth / 2, innerHeight / 2 - 50, 5, 0, 2 * Math.PI)
        cvx.fillStyle = "blue"
        cvx.fill()
        cvx.beginPath()
        cvx.arc(innerWidth / 2, innerHeight / 2 - 90, 8, 0, 2 * Math.PI)
        cvx.strokeStyle = "red"
        cvx.stroke()
        cvx.beginPath()
        cvx.arc(innerWidth / 2, innerHeight / 2 - 90, 4, 0, 2 * Math.PI)
        cvx.fillStyle = "blue"
        cvx.fill()
        cvx.beginPath()
        cvx.moveTo(innerWidth / 2 - 20, innerHeight / 2 - 10)
        cvx.lineTo(innerWidth / 2 - 20, innerHeight / 2 - 50)
        cvx.lineTo(innerWidth / 2 - 40, innerHeight / 2)
        cvx.lineTo(innerWidth / 2 - 40, innerHeight / 2 + 40)
        cvx.lineTo(innerWidth / 2, innerHeight / 2)
        cvx.fillStyle = "red"
        cvx.fill()

        cvx.moveTo(innerWidth / 2 + 20, innerHeight / 2 - 10)
        cvx.lineTo(innerWidth / 2 + 20, innerHeight / 2 - 50)
        cvx.lineTo(innerWidth / 2 + 40, innerHeight / 2)
        cvx.lineTo(innerWidth / 2 + 40, innerHeight / 2 + 40)
        cvx.lineTo(innerWidth / 2, innerHeight / 2)
        cvx.fillStyle = "red"
        cvx.fill()


        alienlist.forEach((enemy, index) => {

            if ((enemy.X <= (innerWidth / 2 + 50)) && (enemy.Y >= 180 && enemy.Y <= innerHeight / 2 + 20)) {
                cancelAnimationFrame(animateid)
                storagesectionandsiplay()
                let reload = document.createElement("button")
                reload.textContent = "PLAY AGAIN"
                document.getElementById("reloaddiv").appendChild(reload)
                reload.addEventListener("click", reloadingpage)

            }
            enemy.update()

            if (enemy.X < 0) {
                alienlist.splice(index, 1)
            }
            bullets.forEach((bullet, bulletindex) => {
                const dist = Math.hypot(enemy.X - bullet.x, enemy.Y - bullet.y)
                if (dist - enemy.radius - bullet.radius < 1) {
                    counter += 30
                    alienlist.splice(index, 1)
                    bullets.splice(bulletindex, 1)
                }
                bullet.update()
            })
        })

        spacecraft.draw()
        cvx.fillStyle = "red"
        cvx.fillRect(innerWidth / 2 - 20, innerHeight / 2 - 20, 40, 40)
        bullets.forEach((bullet) => {
            bullet.update()
        })
    }

    const bullets = []
    addEventListener("click", (event) => {
        shoot.play()
        const angle = Math.atan2(event.clientY - y, event.clientX - x)
        const velocity = {
            x: Math.cos(angle) * 2,
            y: Math.sin(angle) * 2
        }
        bullets.push(
            new bullet(x, y, 7, 'green', velocity)
        )
    })
    animate()


})