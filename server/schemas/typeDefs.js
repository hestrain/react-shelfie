const typeDefs = `
  type Thought {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
  authors: [{String}]
  description: String
  bookId: String
  image: String
  link: String
  title: String
  }

  type Query {
    books: [Book]!
    book(bookId: bookId!): Book
  }

  type Mutation {
    addUser(userName: String!, password: String!, emailAddress: String!): User
    addBook(userId: ID!, bookId: String!): Book
    removeUser(userId: ID!): User
    removeBook(userId: ID!, bookId: String!): Book
  }
`;

module.exports = typeDefs;
