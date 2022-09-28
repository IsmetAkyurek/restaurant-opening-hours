import useOuterClick from ".";
import { useRef, useState } from "react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe(`Core Hook : ${useOuterClick.name}`, () => {
  it("should call callback when outside element is clicked", async () => {
    const TestComponent = () => {
      const [clicked, setClicked] = useState(false);
      const ref = useRef<HTMLDivElement>(null);

      useOuterClick(() => {
        setClicked(true);
      }, ref);

      return (
        <>
          {clicked && <span>Clicked</span>}
          <button>Item Outside</button>
          <div ref={ref}>Item Inside</div>
        </>
      );
    };

    render(<TestComponent />);

    const outsideElement = screen.getByText("Item Outside");

    await act(() => userEvent.click(outsideElement));

    expect(screen.queryByText("Clicked")).toBeInTheDocument();
  });
});
