import Loading from ".";
import { render, screen } from "@testing-library/react";

describe(`Core Component : ${Loading.name}`, () => {
  it("should render children", () => {
    render(
      <Loading>
        <span>Children</span>
      </Loading>
    );

    const childrenElement = screen.getByText("Children");

    expect(childrenElement).toBeInTheDocument();
  });

  it("should render with className", () => {
    render(<Loading className="className">Loading</Loading>);

    const loadingElement = screen.getByText("Loading");

    expect(loadingElement).toHaveClass("className");
  });

  it("should render overlay when loading is true", () => {
    render(<Loading loading={true} />);

    const overlayElement = screen.getByText("loading.svg");

    expect(overlayElement).toBeInTheDocument();
  });

  it("should not render overlay when loading is false", () => {
    render(<Loading loading={false} />);

    const overlayElement = screen.queryByText("loading.svg");

    expect(overlayElement).not.toBeInTheDocument();
  });
});
