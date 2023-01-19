import { gql } from "@apollo/client";



const getBookQuery= gql`
{

    allBook{
    name,
    genre
    }
  
  }


`