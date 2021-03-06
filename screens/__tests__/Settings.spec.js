import 'react-native';
import React from 'react';
import {Settings} from '../Settings';
import renderer from 'react-test-renderer';
alert = jest.fn();

it('returns error if all fields are not filled', () => {
  const props = {
    navigation: {
      navigate: () => { }
    },
  };
  const instance = renderer.create(<Settings {...props} />).getInstance();
  expect(instance.validate('', '', '')).toEqual(false);
});

it('returns error if email is less than 5 characters long', () => {
  const props = {
    navigation: {
      navigate: () => { }
    },
  };
  const instance = renderer.create(<Settings {...props} />).getInstance();
  expect(instance.validate('1234', '', '')).toEqual(false);
});

it('returns error if email contains @', () => {
  const props = {
    navigation: {
      navigate: () => { }
    },
  };
  const instance = renderer.create(<Settings {...props} />).getInstance();
  expect(instance.validate('12345', '', '')).toEqual(false);
});

it('returns error if email contains .', () => {
  const props = {
    navigation: {
      navigate: () => { }
    },
  };
  const instance = renderer.create(<Settings {...props} />).getInstance();
  expect(instance.validate('12345@', '', '')).toEqual(false);
});

it('returns error if password length is less than 6 characters long', () => {
  const props = {
    navigation: {
      navigate: () => { }
    },
  };
  const instance = renderer.create(<Settings {...props} />).getInstance();
  expect(instance.validate('user@email.com', 'a', 'a')).toEqual(false);
});

it("returns error if passwords don't match ", () => {
  const props = {
    navigation: {
      navigate: () => { }
    },
  };
  const instance = renderer.create(<Settings {...props} />).getInstance();
  expect(instance.validate('user@email.com', 'abcdeg', 'abcdef')).toEqual(false);
});

it("returns true if all cases are passed", () => {
  const props = {
    navigation: {
      navigate: () => { }
    },
  };
  const instance = renderer.create(<Settings {...props} />).getInstance();
  expect(instance.validate('user@email.com', 'abcdef', 'abcdef')).toEqual(true);
});

it("returns true if email state is changed", () => {
  const props = {
    navigation: {
      navigate: () => { }
    },
  };
  const instance = renderer.create(<Settings {...props} />).getInstance();
  instance.handleEmail('new@email.com');
  expect(instance.state.email).toEqual('new@email.com')
});

it("returns true if password state is changed", () => {
  const props = {
    navigation: {
      navigate: () => { }
    },
  };
  const instance = renderer.create(<Settings {...props} />).getInstance();
  instance.handlePassword('password');
  expect(instance.state.password).toEqual('password')
});

it("returns true if confirmedPassword state is changed", () => {
  const props = {
    navigation: {
      navigate: () => { }
    },
  };
  const instance = renderer.create(<Settings {...props} />).getInstance();
  instance.handleConfirmedPassword('confirmedPassword');
  expect(instance.state.confirmedPassword).toEqual('confirmedPassword')
});


//render test
it('renders correctly', () => {
  const props = {
      navigation:{
          naviagte: ()=> {},
      }
  };
const tree = renderer.create(<Settings {...props}>Snapshot test!</Settings>).toJSON();

expect(tree).toMatchSnapshot();
});