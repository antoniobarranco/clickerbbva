import renderer from 'react-test-renderer';
import Footer from '../../../components/ui/Footer';

describe('Tests on Footer component', () => {

    test('Test Footer with Snapshot test for UI changes', () => {

    const tree = renderer.create(<Footer />).toJSON();

    expect(tree).toMatchSnapshot();

    })

})