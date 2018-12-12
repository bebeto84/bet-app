import * as Enzyme from 'enzyme';
// tslint:disable-next-line:import-name
import EnzymeAdapterReact16 from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new EnzymeAdapterReact16()
});
