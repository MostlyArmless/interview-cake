// Test framework dependencies
// const should = require('chai').should();
const expect = require('chai').expect;
// const assert = require('chai').assert;
import * as chai from 'chai';
chai.use(require('chai-as-promised')); // Extension that defines the "eventually" keyword
chai.use(require('chai-string')); // Extension that provides the "string should contain" functionality

import { findMatchingParenthesis } from '../matchingParentheses';

describe('Matching Parentheses', () => {
    const testString = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";

    it('matches at level 0', () => {
        expect(findMatchingParenthesis(testString, 10)).to.equal(79);
    });

    it('matches at level 1', () => {
        expect(findMatchingParenthesis(testString, 28)).to.equal(46);
    });

    it('matches at level 1 with adjacent closing paren', () => {
        expect(findMatchingParenthesis(testString, 57)).to.equal(78);
    });

    it('matches at level 2', () => {
        expect(findMatchingParenthesis(testString, 68)).to.equal(77);
    });
    
    
});