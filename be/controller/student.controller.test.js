var assert = require('chai').assert;
var controller = require('./student.controller.js');
const model = require("../model/student.model.js");

describe('Student Controller', function() {
    describe('#findAll()', function() {
      it.only('returns the students when there are no errors', function() {
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

      it.only('returns an error', function() {
        res = {status: '', data: []};
        res.status = (code) => {
            res.status = code;
            return res;
        }
        res.send = (students) => {
            res.data = students;
        }
        err = {};
        model.getAll = (result) => {
            result(err, null);
        };
        controller.findAll(null, res);
        assert.deepEqual(res.data, {message: "Some error occurred while retrieving students"});
        assert.equal(res.status, 500);
      });
    });

    describe('#create()', function() { 
        it.only('returns an 409 error when the student already exists', function() {
          res = {status: '', data: []};
          res.status = (code) => {
              res.status = code;
              return res;
          }
          res.send = (students) => {
              res.data = students;
          }
          err = {message: "The student already exists", type: "business"};
          model.save = (student, result) => {
              result(err);
          };
          req = {
              body: {
                name: 'Violeta', 
                email: 'violeta@gmail.com', 
                career: 'Data science',
                birth_date: '15-08-1952',
                phone_number: '+541165559988',
                country: 'Argentina',
                city: 'CABA',
                payment_option: 'Debit card'
              }
          }
          controller.create(req, res);
          assert.deepEqual(res.data, {message: "The student already exists"});
          assert.equal(res.status, 409);
        });
      });
  });