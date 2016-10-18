module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    schedules: {
      collection: 'schedule',
      via: 'u4bi_id'
    }
  }
};

