const cassandra = require('cassandra-driver')

const client = new cassandra.Client({
    contactPoints:['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'sdc'
});

module.exports = {
    get: (id, callback) => {
        const query = 'SELECT * from reviews WHERE propid = ?'
        client.execute(query, [id], { prepare: true})
        .then(result => callback(null, result))
        .catch(error => callback(error))
    },
    post: (values, callback) => {
        const query = 'INSERT into reviews (propid, hostid, hostname, hostphoto, reviewid, reviewerid, reviewername, reviewerphoto, reviewdate, reviewcomment, cleanliness, communication, checkin, accuracy, location, value) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'   
        let inserts = [values.params.property_id, values.body.hostid, values.body.hostname, values.body.hostphoto, values.body.reviewid, values.body.reviewerid, values.body.reviewername, values.body.reviewerphoto, values.body.reviewdate, values.body.reviewcomment, values.body.cleanliness, values.body.communication, values.body.checkin, values.body.accuracy, values.body.location, values.body.value]
        client.execute(query, inserts, {prepare: true})
        .then(callback(null, 'inserted into cassie!'))
        .catch(error => callback(error))
    },
    update: (values, callback) => {
        const query = 'UPDATE reviews set'
    },
    delete: (values, callback) => {
        const query = 'DELETE from reviews where propid = ? AND reviewid = ?'
        let ids = [values.params.property_id, values.params.id]
        console.log(ids)
        client.execute(query, ids, {prepare: true})
        .then((callback(null, 'deleted review!')))
        .catch(error => callback(error))
    }
}