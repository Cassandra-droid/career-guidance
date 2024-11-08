
// src/tests/Socialicons.test.js
import { render } from "@testing-library/react";
import SocialIcons from "../components/SocialIcons"; // Adjust path if necessary

describe("SocialIcons Component", () => {
  test("renders without crashing", () => {
    render(<SocialIcons />);
  });
});
