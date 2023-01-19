import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookList from './component/BookList';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Client from './component/Client';
import ImageGenerator from './component/ImageGenerator';

const client= new ApolloClient({
  uri:"http://localhost:5000/graphql",
  cache: new InMemoryCache(),
})
function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <div className="">
      {/* <div><h2>Book List</h2></div> */}
   {/* <Client/> */}
      <Routes>
        <Route path="/" element={<ImageGenerator/>} />
      </Routes>
    </div>

    </ApolloProvider>
    </>
  );
}

export default App;
