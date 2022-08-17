import renderer from 'react-test-renderer';
import { ArsenalOrSpurs } from './ArsenalOrSpurs';

it('Checks if it displays Arsenal or Spurs descriptions when buttons are clicked', () => {
	const tree = renderer.create(<ArsenalOrSpurs />).toJSON;
	expect(tree).toMatchSnapshot();
});
