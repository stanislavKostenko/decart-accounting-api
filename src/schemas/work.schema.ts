import * as mongoose from 'mongoose';

export const WorkSchema = new mongoose.Schema({
  title: String,
  units: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' },
  createdDate: Date,
  updatedDate: Date,
}, { versionKey: false });
