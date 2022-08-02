import renderer from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import GameViewStats from "../../components/GameViewStats";

describe('Tests on GameViewStats component', () => {

    test('Test GameViewStats with Snapshot test for UI changes', () => {

        const clickersIncrement = 14;
        const autoClickerCost = 500;
        const megaClickerCost = 2000;
        const timeInterval = 100;

        const tree = renderer.create(
            <GameViewStats
                clickersIncrement={clickersIncrement}
                autoClickerCost={autoClickerCost}
                megaClickerCost={megaClickerCost}
                timeInterval={timeInterval}
            />).toJSON();

        expect(tree).toMatchSnapshot();

    })

    test('Test GameViewStats component shows propertly with their text prop', () => {

        const clickersIncrement = 14;
        const autoClickerCost = 500;
        const megaClickerCost = 2000;
        const timeInterval = 100;

        render(<GameViewStats
                clickersIncrement={clickersIncrement}
                autoClickerCost={autoClickerCost}
                megaClickerCost={megaClickerCost}
                timeInterval={timeInterval}
        />);

        expect(screen.getByTestId('clickersIncrement')).toHaveTextContent(clickersIncrement);
        expect(screen.getByTestId('autoClickerCost')).toHaveTextContent(autoClickerCost);
        expect(screen.getByTestId('megaClickerCost')).toHaveTextContent(megaClickerCost);

    })

})