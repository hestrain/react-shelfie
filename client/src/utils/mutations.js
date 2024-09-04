import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        userId
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        userId
        userName
        email
        password
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook(bookId: String!, userId: ID) {
    addBook(bookId: #bookId!, userId: $userId) {
      book {
        bookId
        title
        authors
        description
        image
        link
        }
      userId
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(bookId: String!) {
    removeBook(bookId: #bookId!) {
      bookId
    }
  }
`;

