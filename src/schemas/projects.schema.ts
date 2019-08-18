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

ProjectSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

ProjectSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
  },
});
