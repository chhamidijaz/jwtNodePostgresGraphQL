const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return await models.User.findByPk(id);
    },
    async users(root, args, { models }) {
      return await models.User.findAll();
    },
  },
  Mutation: {
    async createUser(root, { id, name, email, password, role }, { models }) {
      await models.User.create({
        id,
        name,
        email,
        password: await bcrypt.hash(password, 10),
        role,
      });
      return jwt.sign({ id }, "qqqqqqqqqqqqqqqqqqqqqq");
    },

    login: async (root, { email, password }, { models }) => {
      const user = await models.User.findAll({
        where: { email },
      });
      const valid = await bcrypt.compare(
        password,
        user.password,
        function (err, result) {
          if (err) console.log("something happened:", err);

          console.log("works well:", (result = true));
        }
      );
      return jwt.sign({ id: user._id }, "qqqqqqqqqqqqqqqqqqqqqq");
    },

    updateUser: async (root, { id, name }, { models }) => {
      const user = await models.User.update(
        {
          name,
        },
        { where: { id } }
      );
      var message;
      if (user) message = "User updated successfully";
      else message = "Cannot find the User.";
      return message;
    },

    deleteUser: async (root, { id }, { models }) => {
      const user = await models.User.destroy({ where: { id } });
      var message;
      if (user) message = "User deleted successfully";
      else message = "Cannot find the User.";
      return message;
    },
  },
};

module.exports = resolvers;
