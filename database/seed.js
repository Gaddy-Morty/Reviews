const fs = require ('fs')
// const csvWriter = require('csv-write-stream')
const faker = require('faker')

// let writer = csvWriter()

let reviews = fs.createWriteStream('reviews.csv')

const generateReviews = (num) => {
  let index = 0;
  for (var i = 0; i < num/10000; i++) {
    var entry = '';
    for (var j = 0; j < 10000; j++) {
    let propID = Math.round(Math.random() * 10000000)
    let userID = Math.round(Math.random() * 30000000)
    let review = `${faker.lorem.sentence()} ${faker.lorem.sentence()}`
    let date = faker.date.past()
    let cleanliness = Math.round(Math.random() * (5-2) +2)
    let communication = Math.round(Math.random() * (5-2) +2)
    let checkIn = Math.round(Math.random() * (5-2) +2)
    let accuracy = Math.round(Math.random() * (5-2) +2)
    let location = Math.round(Math.random() * (5-2) +2)
    let value = Math.round(Math.random() * (5-2) +2)
    let response = faker.random.boolean()
    let responseComment = response ? faker.lorem.sentence() : null
    let responseDate =  response ? faker.date.past() : null
    
    entry = entry.concat(`${propID}, ${userID}, ${date}, ${review}, ${cleanliness}, ${communication}, ${checkIn}, ${accuracy}, ${location}, ${value}, ${responseComment}, ${responseDate}\n`) 
    
    index++
    }
    reviews.write(entry);
    if (index % 10000 ===0) {
      console.log(index)
    }
  }
}

let props = fs.createWriteStream('props.csv')
const generateProperties = (num) => {
  let index = 0
  for (var i = 0; i < num/10000; i++) {
    let entry = ''
    for (var j = 0; j < 10000; j++) {
      let ownerID = Math.round(Math.random() * 30000000)
      let cleanliness = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
      let communication = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
      let checkIn = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
      let accuracy = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
      let location = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
      let value = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
      let overall = parseInt(cleanliness + communication + checkIn + accuracy + location + value)
      entry = entry.concat(`${ownerID}, ${cleanliness}, ${communication}, ${checkIn}, ${accuracy}, ${location}, ${value}, ${overall}\n`)
      index++
    }
    props.write(entry);
    if (index % 10000 ===0) {
      console.log(index)
    }
  }
}

let users = fs.createWriteStream('users.csv')
const generateUsers = (num) => {
  let index = 0
  for (var i = 0; i < num/10000; i++) {
    let entry = ''
    for (var j = 0; j < 10000; j++) {
      let name = faker.name.firstName()
      let photo = faker.image.avatar()
      let owner = faker.random.boolean()
      entry = entry.concat(`${name}, ${photo}, ${owner}\n`)
      index++
    }
    users.write(entry);
    if (index % 10000 ===0) {
      console.log(index)
    }
  }
}
console.time('users')
generateUsers(30000000)
console.timeEnd('users')
// console.time('props')
// generateProperties(10000000)
// console.timeEnd('props')

// console.time('test')
// generateReviews(50000000)
// console.timeEnd('test')
// const generateProperties = () => {
//   let i = 0
//   writer.pipe(fs.createWriteStream('props.csv'));
//   do {
//     writer.write({
//       ownerID: faker.random.number(),
      // cleanliness: (Math.random()*(4.9-3.8)+3.8).toPrecision(2),
      // communication: (Math.random()*(4.9-3.8)+3.8).toPrecision(2),
      // checkIn: (Math.random()*(4.9-3.8)+3.8).toPrecision(2),
      // accuracy: (Math.random()*(4.9-3.8)+3.8).toPrecision(2),
      // location: (Math.random()*(4.9-3.8)+3.8).toPrecision(2),
      // value: (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
//     })
//     i++
//     if (i % 100000 === 0) {
//       console.log(i)
//     }
//   } while ( i < 10000000)
//   writer.end()
//   console.log('done')
// }

// // console.time('test')
// // generateProperties()
// // console.timeEnd('test')

// const generateReviews = () => {
//   writer.pipe(fs.createWriteStream('reviews.csv'))
//   for (var i = 0; i < 50000000; i++) {
//     let response = faker.random.boolean()
//     writer.write({
//       propId: Math.round(Math.random() * 10000000),
//       userID: Math.round(Math.random() * 30000000),
//       review: faker.lorem.paragraph(),
//       date: faker.date.past(),
//       cleanliness: (Math.random()*(4.9-3.8)+3.8).toPrecision(2),
//       communication: (Math.random()*(4.9-3.8)+3.8).toPrecision(2),
//       checkIn: (Math.random()*(4.9-3.8)+3.8).toPrecision(2),
//       accuracy: (Math.random()*(4.9-3.8)+3.8).toPrecision(2),
//       location: (Math.random()*(4.9-3.8)+3.8).toPrecision(2),
//       hostId: (Math.round(Math.random() * 5000000)),
      // responseComment: response ? faker.lorem.paragraph() : null,
      // responseDate: response ? faker.date.past() : null
//     })
//     if (i % 100000 === 0) {
//       console.log(i)
//     }
//   } 
// }

// console.time('test2')
// generateReviews()
// console.timeEnd('test2')
  // const generateProperties = () => {
//   let props = ''
//   let i = 0 
//   do {
//     let ownerId = faker.random.number()
//     let cleanliness = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
//     let communication = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
//     let checkIn = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
//     let accuracy = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
//     let location = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
//     let value = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
//     props = props.concat(`${ownerId}, ${cleanliness}, ${communication}, ${checkIn}, ${accuracy}, ${location}, ${value}\n`)
//     i++
//   } while (i<1000000)
//   fs.writeFile('props.csv', props)
// }
// const generateReviews = () => {
//   let reviews = ''
//   let i = 0
//   do {
    // let review = faker.lorem.paragraph()
    // let date = faker.date.past()
    // let cleanliness = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
    // let communication = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
    // let checkIn = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
    // let accuracy = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
    // let location = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
    // let value = (Math.random()*(4.9-3.8)+3.8).toPrecision(2)
    // let response = faker.random.boolean()
//      reviews = reviews.concat(`${review}, ${date}, ${cleanliness}, ${communication}, ${checkIn}, ${accuracy}, ${location}, ${value}, ${response}\n`)
//     i++
//   } while( i < 1000000)
 

// fs.writeFile('reviews.csv', reviews)

// }

// const generateUsers = () => {
//   let users = ''
//   let i = 0
//   do {
//     let firstName = faker.name.firstName()
//     let photo = faker.image.avatar()
//     let owner = faker.random.boolean()
//     users = users.concat(`${firstName}, ${photo}, ${owner}\n`)
//    i++
//   } while (i < 1000000)
// fs.writeFile('users.csv', users)

// }

// // console.log(data2)

// // console.time('test')
// // generateReviews()
// // console.timeEnd('test')

// // console.time('test2')
// // generateUsers()
// // console.timeEnd('test2')

// console.time('test3')
// generateProperties()
// console.timeEnd('test3')