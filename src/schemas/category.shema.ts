import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  title: String,
  description: String,
  works: [{type: mongoose.Schema.Types.ObjectId, ref: 'Works'}],
  archived: Boolean,
  createdDate: Date,
  updatedDate: Date,
}, { versionKey: false });
