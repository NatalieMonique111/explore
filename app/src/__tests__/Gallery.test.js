import { render, screen, cleanup } from "@testing-library/react";

import Gallery from "../Gallery/Gallery";

test("should render Gallery component", () => {
  render(<Gallery />);
  const galleryElement = screen.getByTestId("test-1");
  expect(galleryElement).toBeInTheDocument();
  // expect(galleryElement).toHaveTextContent("no images available");
});
