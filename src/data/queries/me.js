const UserType = require("../types/UserType");

module.exports = {
  type: UserType,
  resolve({ request }) {
    return (
      request.user && {
        id: request.user.id,
        name: request.user.name,
        email: request.user.email,
      }
    );
  },
};
