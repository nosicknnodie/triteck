import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';
import { find, filter, findLast } from 'lodash';
import _resarch from '../common/data/_resarch';
import _cardIct from '../common/data/_cardIct';
import _field from '../common/data/_field';
import _topImgPage from '../common/data/_topImgPage';

const createTypeDefs = () => `
  type CardIct {
    uuid: String!
    eng: String!
    password: String!
  }

  type Resarch {
    uuid: String!
    kor: String!
    eng: String!
    file: String!
    content: String!
    Project: String!
    link : String!
    date : String!
    
  }

  type Field {
    uuid: String!
    kor: String!
    eng: String!
    file: String!
    content: String!
    Project: String!
    link : String!
      
  }

  type TopImgPage {
    uuid: String!
    kor: String!
    eng: String!
    file: String!
    link : String!
    alt : String!

  }


  

  type Query {
    cardIct(uuid: String): CardIct!
    cardIcts: [CardIct]!    
    resarch(uuid: String): Resarch!
    resarchs: [Resarch]!
    field(uuid: String): Field!
    fields: [Field]!
    topImgPage(uuid: String): TopImgPage!
    topImgPages: [TopImgPage]!
  }
`
const createResolvers = () => ({
  Query: {
    cardIct: (parent, args, context, info) => find(_cardIct, {'uuid': args.uuid}),
    cardIcts: () => { return _cardIct },
    resarch: (parent, args, context, info) => find(_resarch, {'uuid': args.uuid}),
    resarchs: () => { return _resarch },
    field: (parent, args, context, info) => find(_field, {'uuid': args.uuid}),
    fields: () => { return _field },
    topImgPage: (parent, args, context, info) => find(_topImgPage, {'uuid': args.uuid}),
    topImgPages: () => { return _topImgPage }
  }
})

const schema = makeExecutableSchema({ typeDefs: createTypeDefs(), resolvers: createResolvers() });
const schemaLink = new SchemaLink({schema});
  
export default schemaLink;

