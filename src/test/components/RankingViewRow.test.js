import renderer from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import RankingViewRow from "../../components/RankingViewRow";

describe('Tests on RankingViewRow component', () => {

    test('Test RankingViewRow with Snapshot test for UI changes', () => {

        const user = "username";
        const score = 1024;

        const tree = renderer.create(<RankingViewRow user={user}  score={score} />).toJSON();

        expect(tree).toMatchSnapshot();

    })

    test('Test RankingViewRow component shows propertly with their props', () => {

        const user = "username";
        const score = 1024;

        render(<RankingViewRow user={user}  score={score} />);

        expect(screen.getByTestId('RankingRow')).toHaveTextContent(user);
        expect(screen.getByTestId('RankingRow')).toHaveTextContent('1.02K Hits');

    })

})