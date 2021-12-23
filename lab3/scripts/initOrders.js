const db = connect('172.23.96.1:60000/londonTaxi')
const ITERATIONS_COUNT = 1000

const INIT_DATE = new Date(2015, 1, 1)
const CURRENT_DATE = new Date()
const PROBABILITY_OF_LEAVING_FEEDBACK = 0.03

const maxLon = db.Postcodes.find({}, {Longitude: 1}).sort({ Longitude: 1 }).limit(1).toArray()[0].Longitude
const minLon = db.Postcodes.find({}, {Longitude: 1}).sort({ Longitude: -1 }).limit(1).toArray()[0].Longitude
const maxLat = db.Postcodes.find({}, {Latitude: 1}).sort({ Latitude: 1 }).limit(1).toArray()[0].Latitude
const minLat = db.Postcodes.find({}, {Latitude: 1}).sort({ Latitude: -1 }).limit(1).toArray()[0].Latitude

const feedbacks = [
    'Great!',
    'Asshole!',
    'The best guy',
    'Strange dude',
    'Nice',
    'I like it',
    'I dont like it'
]


function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const getAppropriateDate = (user, driver) => {
    const date = randomDate(INIT_DATE, CURRENT_DATE)
    return date
    
}

const calculateRandomFinishAt = (startDate) => {
    return randomDate(startDate, new Date(new Date(startDate).setHours(startDate.getHours() + 2)))
}

const getDistanceBetweenTwoDots = (startX, startY, finishX, finishY) => {
    return Math.sqrt(Math.pow(startX - finishX, 2) + Math.pow(startY - finishY, 2))
}

const getMovementArray = (itemsCount, createdAt, finishedAt) => {
    const arr = []
    const arrOfDistances = []
    const timestampArr = []

    for (let i = 0; i < itemsCount; i++) {
        arr.push({
            Lon: minLon + (Math.random() * (maxLon - minLon)),
            Lat: minLat + (Math.random() * (maxLat - minLat)),
        })

        timestampArr.push(randomDate(createdAt, finishedAt))
    }

    for (let i = 0; i < itemsCount; i++) {
        arrOfDistances.push({ distance: getDistanceBetweenTwoDots(arr[i].Lon, arr[i].Lat, arr[arr.length - 1].Lon, arr[arr.length - 1].Lat),  Lon: arr[i].Lon, Lat: arr[i].Lat })
    }

    const sortedTimestamps = timestampArr.sort((a, b) => b - a)
    return arrOfDistances.sort((a,b) => a.distance - b.distance).map((item, index) => ({
        ...item,
        timestamp: sortedTimestamps[index]
    }));
}

let drivers = []
let users = []
let user = {}
let driver = {}

for (let i = 0; i < ITERATIONS_COUNT; i++) {
    if (i%100 ===0) print('iteration #', i, new Date())

    if (i%1000 === 0 || i === 0) {
        users = db.Users.aggregate([{ $sample: { size: 100 } }]).toArray()
        drivers = db.Drivers.aggregate([{ $sample: { size: 100 } }]).toArray()
    }

    user = users[Math.floor(Math.random() * (users.length -1))]
    driver = drivers[Math.floor(Math.random() * (drivers.length -1))]
    createdAt = getAppropriateDate(user, driver)
    finishedAt = calculateRandomFinishAt(createdAt)

    db.Orders.save({
        userId: user._id,
        driverId: driver._id,
        createdAt,
        finishedAt,
        movement: getMovementArray(Math.floor(Math.random() * 100), createdAt, finishedAt),
        price: Math.floor(Math.random() * 200) + 30,
        feedback: Math.random < PROBABILITY_OF_LEAVING_FEEDBACK ? feedbacks[Math.floor(Math.random() * feedbacks.length -1)] : ''
    })
}

print('Orders-seed-finished')