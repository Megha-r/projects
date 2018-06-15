import { configure } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

// const Enzyme = require('enzyme');
// const EnzymeAdapter = require('enzyme-adapter-react-16');
// Enzyme.configure({ adapter: new EnzymeAdapter() });
configure({ adapter: new EnzymeAdapter() });

global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;