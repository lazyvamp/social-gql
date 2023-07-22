

const resolvers = {
  Query: {
    userSignin: async (args: any) => {
      const { email, password } = args.input;
    },
  },
};

export default resolvers;
