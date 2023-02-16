const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  guild_id: {
    type: String,
    required: true,
    ref: 'Guild'
  },
  address: {
    type: mongoose.Schema.Types.EthAddress,
    required: true,
  },
  network: {
    type: mongoose.Schema.Types.Network,
    required: true,
  },
  warrior: {
    type: String,
  },
  wins: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  },
  played_today: {
    type: Number,
    default: 0
  },
  cooldown: {
    type: Date,
    default: Date.now,
  }
}, { collection: 'users', timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

UserSchema.index({ id: 1, guild_id: 1 }, { unique: true });

const User = mongoose.model('User', UserSchema);

User.createIndexes()

module.exports = User;