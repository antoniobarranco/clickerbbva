import renderer from 'react-test-renderer';
import Header from '../../../components/ui/Header';

describe('Tests on Header component', () => {

    test('Test Header with Snapshot test for UI changes', () => {

    const tree = renderer.create(<Header />).toJSON();

    expect(tree).toMatchSnapshot();

    })

})