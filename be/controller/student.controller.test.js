var assert = require('chai').assert;
var controller = require('./student.controller.js');
const model = require("../model/student.model.js");

describe('Student Controller', function() {
    describe('#findAll()', function() {
      it.only('test dependencies', function() {
        res = {status: '', data: []};
        res.status = (code) => {
            res.status = code;
            return res;
        }
        res.send = (students) => {
            res.data = students;
        }
        students = [{
                name: 'Violeta', 
                email: 'violeta@gmail.com', 
                career: 'Data science',
                birth_date: '15-08-1952',
                phone_number: '+541165559988',
                country: 'Argentina',
                city: 'CABA',
                payment_option: 'Debit card'
        }];
        model.getAll = (result) => {
            result(null, students);
        };
        controller.findAll(null, res);
        assert.deepEqual(res.data, students);
        assert.equal(res.status, 200);
      });
    });
  });