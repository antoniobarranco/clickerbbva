import { render, screen } from "@testing-library/react";
import GameViewScore from "../../components/GameViewScore";

describe('Tests on GameViewScore component', () => {

    test('Test GameViewScore component shows propertly with their text prop', () => {

        const score = "999 Hits";

        render(<GameViewScore score={score} />);

        expect(screen.getByRole('heading')).toHaveTextContent(score);

    })

})