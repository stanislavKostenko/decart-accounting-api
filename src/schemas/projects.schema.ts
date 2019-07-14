import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  address: {
    city: String,
    street: String,
    houseNumber: Number,
    flatNumber: Number,
  },
  archived: Boolean,
  createdDate: Date,
  updatedDate: Date,
  square: Number,
}, { versionKey: false });

ProjectSchema.set('toObject', { getters: true });
ProjectSchema.set('toJSON', { getters: true });
