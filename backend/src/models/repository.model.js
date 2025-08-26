import mongoose from "mongoose";

const RepositorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  stars: {
    type: Number,
  },
  forks: {
    type: Number,
  },
  language: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Repository = mongoose.model('Repository', RepositorySchema);