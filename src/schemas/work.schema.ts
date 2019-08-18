import * as mongoose from 'mongoose';

export const WorkSchema = new mongoose.Schema({
  title: String,
  units: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' },
  createdDate: Date,
  updatedDate: Date,
}, { versionKey: false });

WorkSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

WorkSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => { delete ret._id; },
});
