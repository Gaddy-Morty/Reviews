const fs = require ('fs')
const faker = require('faker')

let table = fs.createWriteStream('cassie4.csv')

const generateTable = (num) => {
    let index = 0
    for (var i = 0; i < num/5; i++) {
        let entry = ''
        let propID = (i+1)
        for (var j = 0; j < 5; j++) {

            // let propID = Math.round(Math.random() * 10000000)
            let hostID = Math.round(Math.random() * 8000000)
            let hostName = faker.name.firstName()
            let hostPhoto = faker.image.avatar()
            let reviewID = index+1
            let reviewerID = Math.round(Math.random() * 30000000)
            let reviewerName = faker.name.firstName()
            let reviewerPhoto = faker.image.avatar()
            let reviewDate = faker.date.past()
            let reviewComment = `${faker.lorem.sentence()} ${faker.lorem.sentence()}`
            let ratingCleanliness = Math.round(Math.random() * (5-2) +2)
            let ratingCommunication = Math.round(Math.random() * (5-2) +2)
            let ratingCheckin = Math.round(Math.random() * (5-2) +2)
            let ratingAccuracy = Math.round(Math.random() * (5-2) +2)
            let ratingLocation = Math.round(Math.random() * (5-2) +2)
            let ratingValue = Math.round(Math.random() * (5-2) +2)
            let response = faker.random.boolean()
            let responseComment = response ? faker.lorem.sentence() : null
            let responseDate =  response ? faker.date.past() : null

            entry = entry.concat(`${propID}, ${hostID}, ${hostName}, ${hostPhoto}, ${reviewID}, ${reviewerID}, ${reviewerName}, ${reviewerPhoto}, ${reviewDate}, ${reviewComment}, ${ratingCleanliness}, ${ratingCommunication}, ${ratingCheckin}, ${ratingAccuracy}, ${ratingLocation}, ${ratingValue}, ${responseComment}, ${responseDate}\n`)
            index++
        }
        table.write(entry)
        if (index % 10000 ===0) {
            console.log(index)
          }
    }
    

}

console.time('test')
generateTable(10000000)
console.timeEnd('test')