import * as mongoose from 'mongoose';

export const WorkSchema = new mongoose.Schema({
  title: String,
  units: String,
  repeats: Boolean,
  categoryId: String,
  createdDate: Date,
  updatedDate: Date,
}, { versionKey: false });

WorkSchema.set('toObject', { getters: true });
WorkSchema.set('toJSON', { getters: true });
