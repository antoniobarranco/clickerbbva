import renderer from 'react-test-renderer';
import RankingView from "../../components/RankingView";

import { MemoryRouter } from "react-router-dom";

describe('Tests on RankingView component', () => {

    test('Test RankingView with Snapshot test for UI changes', () => {

      const tree = renderer.create(
        <MemoryRouter initialEntries={['/dashboard']}>
          <RankingView />
        </MemoryRouter>,).toJSON();

      expect(tree).toMatchSnapshot();

    })

})