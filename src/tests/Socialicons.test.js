import React from "react";
import { render, screen } from "@testing-library/react";
import SocialIcons from "./SocialIcons";
import '@testing-library/jest-dom';

describe("SocialIcons Component", () => {
    test("renders all social media icons", () => {
        render(<SocialIcons />);

        // Check if each social media icon is rendered
        expect(screen.getByTestId("InstagramIcon")).toBeInTheDocument();
        expect(screen.getByTestId("TwitterIcon")).toBeInTheDocument();
        expect(screen.getByTestId("FacebookIcon")).toBeInTheDocument();
        expect(screen.getByTestId("LinkedInIcon")).toBeInTheDocument();
    });
});
