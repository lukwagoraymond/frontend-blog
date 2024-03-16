import { describe, it, expect } from "vitest";
import Blogs from "../../pages/Blogs";
import { render, screen, waitFor } from "@testing-library/react";


describe('Blogs', () => {
  it('renders Blogs Component', () => {
    render(<Blogs />);
    waitFor(() =>
      expect(screen.getAllByRole('button')).toBeInTheDocument()
    )
    expect(screen.queryByText(/blogs page/i)).toHaveTextContent(/blogs page/i)
  });
});