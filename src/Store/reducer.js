import client from '../client';
import gql from 'graphql-tag';
import store from '../reduxstore';


const initialState = {
    posts: []
}

const GET_INFO = gql`
{
  allPosts {
    id
    title
  }
}
`;

const dispatchUsersReceived = (users) => {
    store.dispatch({type: 'USERS_RECIEVED', payload: users});
}
const reducer = (state=initialState,action) => {
    if (action.type === 'GET_USERS') {
        const posts = client.query({query: GET_INFO}).then(result => {
            dispatchUsersReceived(result.data.allPosts);
        });
    } else if (action.type === 'USERS_RECIEVED') {
        return {...state, posts: action.payload};
    }
    return state;
}
export default reducer;