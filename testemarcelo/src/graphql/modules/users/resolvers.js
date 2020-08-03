const { company } = require( "../../../services/Xerpa.service" );

module.exports = {
  AggregationBucket: {
    
  }
  ProfileSearchResult: {
    profiles(obj) {
      console.log(obj);
      return profiles;
    },
  },

  Company: {
    profileSearch(obj,profileSearch, args) {
      console.log(args);
      return args;
    },
  },

  RootQueryType: {
    company(profileSearch, args, { dataSources }) {
      console.log(args);
      return dataSources.xerpaService;
    },
  },
};