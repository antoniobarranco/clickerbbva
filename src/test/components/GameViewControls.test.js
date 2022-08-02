import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from "@testing-library/react";
import GameViewControls from '../../components/GameViewControls';

describe('Tests on GameViewControls component', () => {

    test('Test GameViewControls with Snapshot test for UI changes', () => {

        const hitHandle = jest.fn();
        const autoClickerHandle = jest.fn();
        const megaClickerHandle = jest.fn();
        const autoClickers = 14;
        const megaClickers = 500;
        const canBuyAutoClicker = true;
        const canBuyMegaClicker = true;

        const tree = renderer.create(
            <GameViewControls
                hitHandle={hitHandle}
                autoClickerHandle={autoClickerHandle}
                megaClickerHandle={megaClickerHandle}
                autoClickers={autoClickers}
                autoClickers={megaClickers}
                autoClickers={canBuyAutoClicker}
                autoClickers={canBuyMegaClicker}
            />).toJSON();

        expect(tree).toMatchSnapshot();

    })

    test('Test GameViewControls Hit handles works propertly', () => {

        const hitHandle = jest.fn();
        const autoClickerHandle = jest.fn();
        const megaClickerHandle = jest.fn();
        const autoClickers = 14;
        const megaClickers = 500;
        const canBuyAutoClicker = true;
        const canBuyMegaClicker = true;

        render(<GameViewControls
                hitHandle={hitHandle}
                autoClickerHandle={autoClickerHandle}
                megaClickerHandle={megaClickerHandle}
                autoClickers={autoClickers}
                autoClickers={megaClickers}
                autoClickers={canBuyAutoClicker}
                autoClickers={canBuyMegaClicker}
            />);

        fireEvent.click(screen.getByTestId('HitButton'));
        expect(hitHandle).toHaveBeenCalledTimes(1);

    })


})