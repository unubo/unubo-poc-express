import _ from 'lodash';

const config = {
  name: 'unubo-3-poc',
  version: '0.0.1',
  privateVersion: '0.0.1-alpha',
};

export default _.omit(config, ['privateVersion']);
