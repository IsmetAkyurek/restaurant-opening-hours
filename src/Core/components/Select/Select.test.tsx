import Select from ".";
import userEvent from "@testing-library/user-event";
import { createEvent, fireEvent, render, screen, waitFor } from "@testing-library/react";

describe(`Core Component : ${Select.name}`, () => {
  it("should render default text without children or placeholder", async () => {
    render(<Select onChange={jest.fn()} />);

    const optionElement = screen.getByText("Select");

    expect(optionElement).toBeInTheDocument();
  });

  it("should open selectbox when card is clicked", async () => {
    render(
      <Select onChange={jest.fn()}>
        <Select.Option value={1}>Option 1</Select.Option>
      </Select>
    );

    const cardElement = screen.getByTestId("select-toggle");

    userEvent.click(cardElement);

    await waitFor(() => expect(screen.queryByRole("combobox", { expanded: true })).toBeInTheDocument());
  });

  it("should call onChange with clicked option value", async () => {
    const onChange = jest.fn();

    render(
      <Select value={1} onChange={onChange}>
        <Select.Option value={1}>Option 1</Select.Option>
      </Select>
    );

    const optionElement = screen.getByRole("option");

    userEvent.click(optionElement);

    await waitFor(() => expect(onChange).toBeCalledWith(1));
    await waitFor(() => expect(screen.getByRole("option", { selected: true })).toBeInTheDocument());
  });

  it("should close selectbox when option is clicked", async () => {
    render(
      <Select onChange={jest.fn()}>
        <Select.Option value={1}>Option 1</Select.Option>
      </Select>
    );

    const toggleElement = screen.getByTestId("select-toggle");
    const optionElement = screen.getByText("Option 1");

    userEvent.click(toggleElement);
    await waitFor(() => expect(screen.queryByRole("combobox", { expanded: true })).toBeInTheDocument());

    userEvent.click(optionElement);
    await waitFor(() => expect(screen.queryByRole("combobox", { expanded: false })).toBeInTheDocument());
  });

  it("should not call onChange when loading is true", async () => {
    const onChange = jest.fn();

    render(
      <Select onChange={onChange} loading={true}>
        <Select.Option value={1}>Option 1</Select.Option>
      </Select>
    );

    const optionElement = screen.getByText("Option 1");

    await userEvent.click(optionElement);

    expect(onChange).not.toBeCalled();
  });

  it("should close selectbox when outside is clicked", async () => {
    const onChange = jest.fn();

    render(
      <>
        <div>Outer Element</div>
        <Select value={1} onChange={onChange} loading={true}>
          <Select.Option value={1}>Option 1</Select.Option>
        </Select>
      </>
    );

    const toggleElement = screen.getByTestId("select-toggle");
    const outerElement = screen.getByText("Outer Element");

    userEvent.click(toggleElement);
    await waitFor(() => expect(screen.queryByRole("combobox", { expanded: true })).toBeInTheDocument());

    userEvent.click(outerElement);
    await waitFor(() => expect(screen.queryByRole("combobox", { expanded: false })).toBeInTheDocument());
  });

  it("should call onChange with undefined when clear is clicked", async () => {
    const onChange = jest.fn();

    render(
      <Select value={1} onChange={onChange}>
        <Select.Option value={1}>Option 1</Select.Option>
      </Select>
    );

    const clearElement = screen.getByRole("button");

    userEvent.click(clearElement);

    await waitFor(() => expect(onChange).toBeCalledWith());
  });

  it("should call stopPropagation when clear is clicked", async () => {
    const stopPropagation = jest.fn();

    render(
      <Select value={1} onChange={jest.fn()}>
        <Select.Option value={1}>Option 1</Select.Option>
      </Select>
    );

    const clearElement = screen.getByRole("button");

    const clickEvent = createEvent.click(clearElement);
    jest.spyOn(clickEvent, "stopPropagation").mockImplementation(stopPropagation);

    fireEvent(clearElement, clickEvent);

    await waitFor(() => expect(stopPropagation).toBeCalledTimes(1));
  });

  it("should return null for calling Option separately", async () => {
    const result = Select.Option({ value: 1 });

    expect(result).toBeNull();
  });
});
