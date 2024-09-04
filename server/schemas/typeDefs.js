const typeDefs = `
  type User {
    userId: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
    bookCount: Int
  }

  type Book {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

   type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(userName: String!, password: String!, emailAddress: String!): User
    addBook(userId: ID!, bookId: String!): Book
    removeBook(bookId: String!): Book
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
