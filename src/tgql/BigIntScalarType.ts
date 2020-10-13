import { GraphQLScalarType, Kind } from 'graphql';
import * as BN from 'bn.js';

export const BigInt = new GraphQLScalarType({
  name: 'BigInt',
  description: 'Big Integer scalar type',
  parseValue(value: string) {
    return new BN(value).toString(); // value from the client input variables
  },
  serialize(value: BN) {
    return value.toString(); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new BN(ast.value).toString(); // value from the client query
    }
    return null;
  }
});
