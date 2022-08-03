import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from "@testing-library/react";
import LoginView from "../../components/LoginView";

describe('Tests on LoginView component', () => {

    test('Test LoginView with Snapshot test for UI changes', () => {

    const tree = renderer.create(<LoginView />).toJSON();

    expect(tree).toMatchSnapshot();

    })

    test('Test LoginView inputs lets write on it', () => {

      const name = 'Username';

      render(<LoginView />);

      const input = screen.getByPlaceholderText(/Put your name/i);

      fireEvent.change(input, {target: {value: name}})
      expect(input.value).toBe(name);

    })

})