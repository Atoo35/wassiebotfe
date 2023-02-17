// posts.js

import clientPromise from "./index";

let client
let db
let users

async function init () {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db()
    users = await db.collection('users')
  } catch (error) {
    throw new Error('Failed to establish a connection to the DB')
  }

}

; (async () => {
  await init()
})()

////////////////
////USERS//////
//////////////

export async function getUsers () {
  try {
    if (!users) await init()
    const result = await users
      .find({})
      .limit(20)
      .map(user => ({ ...user, _id: user._id.toString() }))
      .toArray()
    return { users: result }
  } catch (error) {
    return { error: 'Failed to fetch users' }
  }
}

export async function createUser (user) {
  try {
    if (!users) await init();
    const result = await users.insertOne(user);
    return { user: { ...result.ops[0], _id: result.ops[0]._id.toString() } };
  } catch (error) {
    return { error };
  }
}
