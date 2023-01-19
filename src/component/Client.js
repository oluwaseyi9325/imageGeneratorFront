import React from 'react'
import { gql,useQuery } from '@apollo/client'
import { GET_CLIENTS } from './queries/ClientQueries'
 



function Client() {
    const {loading,error,data}=useQuery(GET_CLIENTS)
    if (loading) {
        return <h1>Loading....</h1>
    }
    if (error) {
        return <h3>Something went wrong</h3>
    }
    console.log(data.clientDetails)
  return (
    <div className='container'>
      {
        !loading&&!error&& (
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.clientDetails.map(val=>{
                            return(
                                <tr>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td><button className='btn btn-danger'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
      }
    </div>
  )
}

export default Client
