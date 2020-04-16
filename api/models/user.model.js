/** @format */

const { Model } = require('objection');
const ObjectionEncrypt = require('objection-encrypt');
const key = 'KE7fmypx0gVE5P2oZP8BUz6g8oAHqzeZ';

var Encrypt = ObjectionEncrypt({
  fields: ['secret_field1', 'secret_field2'],
  encryptionKey: key,
});

class User extends Encrypt(Model) {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['username', 'secret_field1', 'secret_field2', 'status'],
      properties: {
        user_id: { type: 'integer' },
        username: { type: 'string', minLength: 1, maxLength: 255 },
        secret_field1: { type: 'string' },
        secret_field2: { type: 'string' },
        status: { type: 'string', minLength: 1, maxLength: 255 },
        about: { type: 'string' },
        created_at: { type: 'string' },
      },
    };
  }
}

module.exports = User;
