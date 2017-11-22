import React from 'react';
import { mount } from 'enzyme';
import App from './App';

const setup = propOverriders => {
  const props = Object.assign(
    {
      text: 'hello',
    },
    propOverriders,
  );
  const wrapper = mount(<App {...props} />);

  return { props, wrapper };
};

describe('components', () => {
  describe('App', () => {
    it('should render container', () => {
      const { wrapper } = setup();
      // expect(wrapper.find('.test-class_mod2')).toHaveLength(1);
    });
    it('should add category item', () => {
      const { wrapper } = setup();
      expect(wrapper.find('.category-item')).toHaveLength(0);
      wrapper.find('input[type="text"]').props().onChange({target: 'new text 1'});
      wrapper.find('input[type="submit"]').simulate('submit');
      expect(wrapper.find('.category-item')).toHaveLength(1);
      wrapper.find('input[type="text"]').props().onChange({target: 'new text 3'});
      wrapper.find('input[type="submit"]').simulate('submit');
      expect(wrapper.find('.category-item')).toHaveLength(2);
    });
  });
});
