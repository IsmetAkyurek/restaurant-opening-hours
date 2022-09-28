import initGTM from ".";

describe(`Core Function : ${initGTM.name}`, () => {
  afterEach(() => {
    document.head.innerHTML = "";
    document.body.innerHTML = "";
  });

  it("should render scripts with the given Container ID", () => {
    process.env.REACT_APP_GTM_CONTAINER = "Test Container";

    initGTM();

    const headScript = document.head.querySelector("#GTMScript");
    const bodyScript = document.body.querySelector("#GTMNoScript");

    expect(headScript).toBeInTheDocument();
    expect(bodyScript).toBeInTheDocument();
  });
});
