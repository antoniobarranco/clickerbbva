import renderer from 'react-test-renderer';
import GameView from "../../components/GameView";

import { MemoryRouter } from "react-router-dom";

describe('Tests on GameView component', () => {

    test('Test GameView with Snapshot test for UI changes', () => {

      const tree = renderer.create(
        <MemoryRouter initialEntries={['/dashboard']}>
          <GameView />
        </MemoryRouter>,).toJSON();

      expect(tree).toMatchSnapshot();

    })

})