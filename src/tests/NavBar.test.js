import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Wrap with Router for Link components
import Navbar from "./Navbar";

describe("Navbar Component", () => {
    test("renders Navbar links", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        
        // Check if each link renders
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Services")).toBeInTheDocument();
        expect(screen.getByText("Resources")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
    });

    test("toggleNavbar function toggles the hidden links", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );

        // Locate the toggle button and click it
        const toggleButton = screen.getByRole("button", { name: /toggle navbar/i });
        fireEvent.click(toggleButton);

        // Check if the leftside navbar opens
        const leftsideNavbar = screen.getByTestId("leftside-navbar");
        expect(leftsideNavbar).toHaveAttribute("id", "open");

        // Toggle it back to close
        fireEvent.click(toggleButton);
        expect(leftsideNavbar).toHaveAttribute("id", "close");
    });

    test("displays welcome message on Login button click", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );

        // Locate and click the Login button
        const loginButton = screen.getByText("Login");
        fireEvent.click(loginButton);

        // Verify that the welcome message appears
        expect(screen.getByText("Welcome to")).toBeInTheDocument();
        expect(screen.getByText("AI Career Guidance!")).toBeInTheDocument();
    });

    test("hides welcome message on Cancel button click", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );

        // Trigger the welcome message
        const loginButton = screen.getByText("Login");
        fireEvent.click(loginButton);

        // Verify welcome message appears
        const cancelButton = screen.getByText("×");
        fireEvent.click(cancelButton);

        // Check that the message is no longer visible
        expect(screen.queryByText("Welcome to")).not.toBeInTheDocument();
    });

    test("navigates to Signup and Login pages from welcome message", () => {
        const mockNavigate = jest.fn();
        jest.mock("react-router-dom", () => ({
            ...jest.requireActual("react-router-dom"),
            useNavigate: () => mockNavigate,
        }));

        render(
            <Router>
                <Navbar />
            </Router>
        );

        // Trigger the welcome message
        fireEvent.click(screen.getByText("Login"));

        // Click New User and Existing User buttons
        fireEvent.click(screen.getByText("New User"));
        expect(mockNavigate).toHaveBeenCalledWith("/signup");

        fireEvent.click(screen.getByText("Existing User"));
        expect(mockNavigate).toHaveBeenCalledWith("/login");
    });
});
