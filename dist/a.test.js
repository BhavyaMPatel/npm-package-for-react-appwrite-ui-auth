"use strict";

var _react = require("@testing-library/react");
var _OAuth = _interopRequireDefault(require("./OAuth"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe("SearchForm", function () {
  test("renders SearchForm", function () {
    (0, _react.render)( /*#__PURE__*/React.createElement(_OAuth["default"], {
      provider: "google"
    }));
    expect(_react.screen.toHaveTextContent("heading", {
      name: /location search/i
    })).toBeVisible();
  });
});