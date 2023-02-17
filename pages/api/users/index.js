// posts.js

import { getUsers, createUser } from "../../../lib/mongo/users";

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { users, error } = await getUsers()
      if (error) throw new Error(error)

      return res.status(200).json({ users })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  else if (req.method === 'POST') {
    try {
      const { _id, guild_id, address, network, wins, losses, played_today } = req.body;
      console.log("📜📜📜📜📜📜📜📜📜📜📜",  _id, guild_id, address, network, wins, losses, played_today)
      const { user, error } = await createUser(_id, guild_id, address, network, wins, losses, played_today);
    
      if (error) throw new Error(error);

      return res.status(201).json({ user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} is not allowed.`);
  }
};

export default handler

