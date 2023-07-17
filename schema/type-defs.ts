import { gql } from "apollo-server-express";

const typedefs = gql`

input {
    email: String!
    password: String!
}
`

export default typedefs;