import { shallow } from 'enzyme';
import App from "./App"

describe("Counter Testing", () => {

  let wrapper;

  // Jest - sets up common settings in all tests
  beforeEach(() => {
    // Enzyme - shallow() does not render children components.
    wrapper = shallow(<App />)

    // Enzyme - mount() extends DOM tree
    // wrapper = mount(<App />)
  })

  test("render the initial value of state in a div", () => {
    console.log(wrapper.debug())
    expect(wrapper.find("#counter-value").text()).toBe("0");
  })

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  })

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  })

})


