import Scenario from '../types';

export const StarWars: Scenario = {
  Description: 'Star Wars Query Tests',
  Tests: [
    {
      Name: 'Correctly identifies R2-D2 as the hero of the Star Wars Saga',
      Mock: {
        Query: `query HeroNameQuery {
        hero {
          name
        }
      }`
      },
      Action: { Type: 'Execution', Execute: { Data_Target: 's' } },
      Assertion: { Expectation: 'Success', Successful: false }
    }
  ]
};
