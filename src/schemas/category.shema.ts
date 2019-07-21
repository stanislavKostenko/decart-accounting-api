import * as mongoose from 'mongoose';
import { WorkSchema } from './work.schema';

export const CategorySchema = new mongoose.Schema({
  title: String,
  description: String,
  works: [WorkSchema],
  archived: Boolean,
  createdDate: Date,
  updatedDate: Date,
}, { versionKey: false });

CategorySchema.set('toObject', { getters: true });
CategorySchema.set('toJSON', { getters: true });
