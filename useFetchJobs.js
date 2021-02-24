import { useReducer } from 'react';

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

function reducer(state, action) {
    
}

export default function useFectJobs (params, page){
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

    dispatch({ type: 'hello', payload: {x: 3} })

    return{
        jobs: [15, 15],
        loading: true,
        error: true
    }
}