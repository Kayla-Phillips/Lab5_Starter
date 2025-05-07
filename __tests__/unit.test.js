// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber Tests
test('123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('(123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('1234567890 is not a valid phone number', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test('abc-def-ghik is not a valid phone number', () => {
  expect(isPhoneNumber("abc-def-ghij")).toBe(false);
});

// isEmail Tests
test('user@example.com is a valid email', () => {
  expect(isEmail("user@example.com")).toBe(true);
});

test('name123@example.net is a valid email', () => {
  expect(isEmail("name123@example.net")).toBe(true);
});

test('userexample.com is not a valid email', () => {
  expect(isEmail("userexample.com")).toBe(false);
});

test('user@domain.corporate is not a valid email', () => {
  expect(isEmail("user@domain.corporate")).toBe(false);
});

// isStrongPassword Tests
test('abc1 is a strong password', () => {
  expect(isStrongPassword("abc1")).toBe(true);
});

test('K_password2 is a strong password', () => {
  expect(isStrongPassword("K_password2")).toBe(true);
});

test('123abc is not a strong password', () => {
  expect(isStrongPassword("123abc")).toBe(false);
});

test('x is not a strong password', () => {
  expect(isStrongPassword("x")).toBe(false);
});

// isDate Tests
test('1/1/2025 is a valid date', () => {
  expect(isDate("1/1/2025")).toBe(true);
});

test('12/25/2025 is a valid date', () => {
  expect(isDate("12/25/2025")).toBe(true);
});

test('1/1/25 is not a valid date', () => {
  expect(isDate("1/1/25")).toBe(false);
});

test('1-1-2025 is not a valid date', () => {
  expect(isDate("1-1-2025")).toBe(false);
});

// isHexColor Tests
test('#FFF is a valid hex color', () => {
  expect(isHexColor("#FFF")).toBe(true);
});

test('#abc123 is a valid hex color', () => {
  expect(isHexColor("#abc123")).toBe(true);
});

test('#FFFF is not a valid hex color', () => {
  expect(isHexColor("#FFFF")).toBe(false);
});

test('#xyz is not a valid hex color', () => {
  expect(isHexColor("#xyz")).toBe(false);
});

