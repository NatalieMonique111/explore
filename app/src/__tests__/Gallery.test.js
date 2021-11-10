import { render, screen } from "@testing-library/react";

import Gallery from "../Gallery/Gallery.js";

describe("App", () => {
  test("should render Gallery component", () => {
    render(<Gallery />);
    const galleryElement = screen.getByTestId("test-1");
    expect(galleryElement).toBeInTheDocument();
    screen.debug();
  });
});
