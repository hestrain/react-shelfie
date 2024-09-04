const { Book } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },

    book: async (parent, { bookId }) => {
      return Book.findOne({ _id: bookId });
    },
  },

  Mutation: {
    addBook: async (parent, { bookText, bookAuthor }) => {
      return Book.create({ bookText, bookAuthor });
    },
    removeBook: async (parent, { bookId }) => {
      return Book.findOneAndDelete({ bookId: bookId });
    },

}};

module.exports = resolvers;
