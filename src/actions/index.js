import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

// using redux-thunk cusotomizing function

export const fetchPostsAndUsers = () =>  async  (dispatch,getState)  => {
  //  console.log('About to fetch Posts');
await dispatch(fetchPosts());
//console.log(getState().posts());

// const userId = _.uniq(_.map(getState().posts, 'userId'));
// console.log(userId);
// userId.forEach(id =>  dispatch(fetchUser(id)))


//or

_.chain(getState().posts())
.map('userId')
.uniq()
.forEach(d =>  dispatch(fetchUser(id)))
.value()
}

export const fetchPosts = () =>  async  dispatch  => {
const response= await  jsonPlaceholder.get('/posts');
dispatch(  {
    type : 'FETCH_POSTS',
    payload : response.data
})
};


// export const fetchUser = (id) =>  async  dispatch  => {
//     const response= await  jsonPlaceholder.get(`/users/${id}`);
//     dispatch(  {
//         type : 'FETCH_USER',
//         payload : response.data
//     })
//     };

export const fetchUser = (id) =>  async  dispatch  => {
    const response= await  jsonPlaceholder.get(`/users/${id}`);
    dispatch(  {
        type : 'FETCH_USER',
        payload : response.data
    })
    };


    //memoize

//     export const fetchUser = (id) =>    dispatch  => {
//    _fetchUser(id, dispatch)
//     };

//      const _fetchUser = _.memoize(async(id,dispatch)  => {
//         const response= await  jsonPlaceholder.get(`/users/${id}`);
//         dispatch(  {
//             type : 'FETCH_USER',
//             payload : response.data
//         });
//         });

    // Async error it returns request object not actual javascript object
//     export async const fetchPosts =  () =>
// {
//    const response= async  jsonPlaceholder.get('/posts');
//     return  {
//         type : 'FETCH_POSTS',
//         payload : response
//     };


// Synchronous function still response is not received it fails at reducers why because response is emptyStatement, 
// we did'nt apply async
//const response=   jsonPlaceholder.get('/posts');
//     return  {
//         type : 'FETCH_POSTS',
//         payload : response
//     };


// using redux-thunk
//     export async const fetchPosts =  () =>
// {
//     return async function(dispatch, getState )
//     {
//    const response= await  jsonPlaceholder.get('/posts');
//     dispatch(  {
//         type : 'FETCH_POSTS',
//         payload : response
//     });
// };
// };


//    Or


