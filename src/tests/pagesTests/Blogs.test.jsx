import { describe, it, expect } from "vitest";
import Blogs from "../../pages/Blogs";
import { render, screen } from "@testing-library/react";


describe('Blogs', () => {
  it('renders Blogs Component', () => {
    render(<Blogs />);
    screen.debug();
  });
});