'use strict';

import chai = require('chai');
import {required} from '../index';

var expect = chai.expect;

describe("requiredDecorator", function() {
    it(`is adding 'sas:validations:required' metadata 
        to function prototype with key equals 
        to field name and value equals to true
        when being applied to a field`,
        () => {

            class A {
                @required()
                public foo: string;
            };
            
            var metadata = Reflect.getMetadata("sas:validations:required", A.prototype, "foo");
            
            expect(metadata).to.be.true;
        })
});