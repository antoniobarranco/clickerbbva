import { render, fireEvent, screen } from "@testing-library/react";
import BreadCrumbs from "../../../components/ui/BreadCrumbs"

describe('Tests on BreadCrumb component', () => {

    test('Test BreadCrumb component shows propertly with only text prop', () => {

        const text = "Hello world";

        render(<BreadCrumbs Text={text} />);

        expect(screen.getByTestId('BreadCrumbsText')).toHaveTextContent(text);

    })

    test('Test BreadCrumb component handles handleExit Callback prop', () => {

        const callBack = jest.fn();

        render(<BreadCrumbs Text="Hi" handleExit={callBack} />);

        fireEvent.click(screen.getByText(/Close/i));
        expect(callBack).toHaveBeenCalledTimes(1);

    })

})