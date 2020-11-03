export const schema = gql`
  type Post {
    id: Int!
    title: String!
    slug: String!
    body: String!
    image: String
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  input CreatePostInput {
    title: String!
    slug: String!
    body: String!
    image: String
  }

  input UpdatePostInput {
    title: String
    slug: String
    body: String
    image: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
