// src/tests/Navbar.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar"; // Correct path to Navbar component

describe("Navbar Component", () => {
  test("renders Navbar links", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    // Add assertions to test Navbar links here
  });
});
