const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 200,
      min_length: 1,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
    type: Date,
    default: Date.now(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return `${this.reactions.length}`
  })

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;