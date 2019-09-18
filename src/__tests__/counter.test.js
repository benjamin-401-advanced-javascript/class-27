import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter';

describe('<Thing/>', () => {
  it('is alive at application start', () => {
    const app = shallow(<Counter />);
    expect(app.find('button').exists()).toBeTruthy();
    expect(app.find('span').exists()).toBeTruthy();
  });

  it('changes state on up click', () => {
    const app = mount(<Counter />);
    const button = app.find('.up-clicker');
    button.simulate('click');
    expect(app.state('count')).toBe(1);
    expect(app.find('span').text()).toContain('1');
  });

  it('changes state on down click', () => {
    const app = mount(<Counter />);
    const button = app.find('.down-clicker');
    button.simulate('click');
    expect(app.state('count')).toBe(-1);
    expect(app.find('span').text()).toContain('-1');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
