import { gql } from "apollo-server-express";

const typedefs = gql`

input loginDetails {
    email: String!
    password: String!
}
type DisplayMessage {
    message: String!
  }
type Query{
userSignin(input:loginDetails) : DisplayMessage
}
`

export default typedefs;