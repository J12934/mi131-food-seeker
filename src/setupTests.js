// See https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
