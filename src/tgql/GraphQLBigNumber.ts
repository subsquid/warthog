import { GraphQLScalarType } from 'graphql';
import * as BN from 'bn.js';

export const GraphQLBigNumber = new GraphQLScalarType({
  name: 'BigNumber',
  description: 'GraphQL representation of BigNumber',
  parseValue(value: string | number) {
    return value; // value from the client input variables
  },
  serialize(value: BN) {
    return value ? value.toString() : ''; // value sent to the client
  }
});
