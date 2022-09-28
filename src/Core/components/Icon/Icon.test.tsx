import Icon from ".";
import { IconName } from "Core/types/Icon";
import { render, screen } from "@testing-library/react";

describe(`Core Component : ${Icon.name}`, () => {
  it("should render icon given an existing icon name", () => {
    render(<Icon name="chevronDown" />);

    const iconElement = screen.getByText("chevronDown.svg");

    expect(iconElement).toBeInTheDocument();
  });

  it("should render icon given an unexisting icon name", () => {
    render(<Icon name={"chevronUp" as IconName} />);

    const iconElement = screen.queryByText("chevronUp.svg");

    expect(iconElement).not.toBeInTheDocument();
  });
});
