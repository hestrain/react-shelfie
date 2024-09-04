const typeDefs = `
  type User {
    userId: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
  authors: [String]
  description: String
  bookId: String
  image: String
  link: String
  title: String
  }

   type Auth {
    token: ID!
    user: User
  }

  type Query {
    books: [Book]!
    book(bookId: String!): Book
  }

  type Mutation {
    addUser(userName: String!, password: String!, emailAddress: String!): User
    addBook(userId: ID!, bookId: String!): Book
    removeBook(bookId: String!): Book
        login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
