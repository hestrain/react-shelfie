const { Book, User } = require('../models');

const {signToken, isCorrectPassword} = require("../utils/auth") ;


const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },

    book: async (parent, { bookId }) => {
      return Book.findOne({ bookId: bookId });
    },
  },

  Mutation: {
    addBook: async (parent, { bookId, userId }) => {
      return Book.create({ bookId, userId });
    }, //next office hours bring in context
    removeBook: async (parent, { bookId }) => {
      return Book.findOneAndDelete({ bookId: bookId });
    },
    addUser: async (parent, {userName, password, emailAddress}) => {
      const user = User.create({userName, password, emailAddress});
      const token = signToken(user)
       return {user, token}
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
}};

module.exports = resolvers;
