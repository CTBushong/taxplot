const React = require("react")
const UserContext = require("./src/components/UserContext")
  .default

exports.wrapRootElement = ({ element }) => {
  return <UserContext>{element}</UserContext>
}
