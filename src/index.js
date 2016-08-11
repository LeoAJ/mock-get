import Promise from 'bluebird';
import mockData from './mockData';

const mockGet = (delay = 500, response, hasError) => {

  if (typeof response === 'boolean' && hasError === undefined) {
    hasError = response;
  }

  return new Promise((resolve, reject) =>
    setTimeout(
      hasError
        ? reject.bind(null, new Error('Error from `mock-get` !'))
        : resolve.bind(null, response || mockData),
      delay
    )
  );
};

export default mockGet;
