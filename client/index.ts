import * as apollo from 'apollo-client';
import {
    AllStarshipsQuery, PersonsQuery, PersonWorldQuery,
    PersonWorldQueryVariables,
} from './schema';
import * as currentUserQuery from './queries/all-starships.graphql';
import * as personQuery from './queries/person.graphql';
import * as personWorldsQuery from './queries/person-worlds.graphql';
import gql from 'graphql-tag';

const apolloClient = new apollo.ApolloClient({
    networkInterface: apollo.createNetworkInterface({
        uri: 'http://localhost:3000',
    }),
});

apolloClient.query<PersonsQuery>({
        query: gql`${personQuery}`,
    },
).then(({data}) => {
    console.log('Persons:', data.allPeople);
    data.allPeople.people.map((person) => console.log('NAME', person.name));
});


apolloClient.query<PersonWorldQuery>({
        query: gql`${personWorldsQuery}`,
        variables: <PersonWorldQueryVariables>{personID: '5'},
    },
).then(({data}) => {
    console.log('Person', data.person.homeworld.homeName);
});

apolloClient.query<AllStarshipsQuery>({
        query: gql`${currentUserQuery}`,
        variables: {},
    },
).then(({data}) => {
    console.log('Starships', data.allStarships);
});