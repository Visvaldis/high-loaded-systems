const canvas = document.getElementById('map')

ctx = canvas.getContext("2d")

ctx.beginPath()

const draw = () => {
    fetch('http:localhost:3000/postcodes/borders')
    .then(async (responseP) => {
        const borders = await responseP.json()
        console.log(borders)
        fetch('http:localhost:3000/orders/random')
        .then(async (response) => {
            
            const order = (await response.json()).order[0]
            
            order.movement.sort((a, b) => b.distance - a.distance).forEach((item, index, self) => {
                const x = Math.round(((borders.maxX - item.Lon) * canvas.width) / (borders.maxX - borders.minX))
                const y = Math.round(canvas.height - (((borders.maxY - item.Lat) * canvas.height)/ (borders.maxY - borders.minY)))
                
                // if (index%3 === 0) {
                    console.log('x: ', x, ' y: ', y)
                    if (index === 0) { //start
                        
                        ctx.fillStyle = "green";
                        ctx.arc(x, y, 10, 0, 2 * Math.PI);
                        ctx.fill()
                        ctx.moveTo(x, y)
                    } else if (index === self.length - 1) { //finish
                        ctx.fillStyle = "red";   
                        ctx.arc(x,y, 20, 0, 2 * Math.PI);
                        ctx.stroke(); 
                        ctx.lineTo(x, y)
                    } else {
                        ctx.arc(x,y, 4, 0, 2 * Math.PI);
                        ctx.stroke(); 
                        ctx.lineTo(x, y)
                    }

                    ctx.fillText(`Time: ${new Date(item.timestamp).getTime() - new Date(self[0].timestamp).getTime()}`, x, y-10)
                    ctx.fillText(`Distance: ${item.distance}`, x, y+20)
                // }
            })
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

draw()