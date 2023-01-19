import { gql } from "@apollo/client";

const GET_CLIENTS= gql`

query getClients{
    clientDetails{
        name,
          email
        }
}


`


export { GET_CLIENTS}