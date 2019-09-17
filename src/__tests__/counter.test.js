import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter.js';

describe('<Thing/>', () => {
  it('is alive at application start', () => {
    let app = shallow(<Counter />);
    expect(app.find('.down clicker').exists()).toBeTruthy();
    expect(app.find('.up clicker').exists()).toBeTruthy();
  });

  it('changes state on click', () => {
    let app = mount(<Counter />);
    let button = app.find('button');
    button.simulate('click');
    expect(app.state('stuff')).toBe(false);
    expect(app.find('span').text()).toContain('false');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
