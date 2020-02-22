import _ from 'lodash';

const config = {
  name: 'unubo-3-poc',
  version: '0.0.2',
  test: 2,
  privateVersion: '0.0.2-alpha',
};

export default _.omit(config, ['privateVersion']);
