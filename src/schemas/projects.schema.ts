import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
}, { versionKey: false });

ProjectSchema.set('toObject', { getters: true });
ProjectSchema.set('toJSON', { getters: true });
