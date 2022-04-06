import * as service from '../services/tuits-service';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

export const createTuit = async (dispatch, tuit) => {
    const newTuit = await service.createTuit(tuit);
    console.log('new tweet check' + JSON.stringify(newTuit));
    dispatch({
                 type: CREATE_TUIT,
                 newTuit:newTuit
             });
}


export const findAllTuits = async (dispatch) => {
    return await service.findAllTuits().then((data)=>{
        dispatch({
                     type: FIND_ALL_TUITS,
                     tuits:data
                 });

        return data;
    });
}
export const updateTuit = async (dispatch, tuit) => {
    const status = await service.updateTuit(tuit);
    dispatch({
                 type: UPDATE_TUIT,
                 tuit
             });
}

export const LikeTuit = async (dispatch, tuit) => {

    if(tuit.liked === true) {
        tuit.liked = false;
        tuit.postLikes--;
    } else {
        tuit.liked = true;
        tuit.postLikes++;
    }

    const status = await service.updateTuit(tuit);
    dispatch({
                 type: 'UPDATE_TUIT',
                 tuit:tuit
             });
}

export const DislikeTuit = async (dispatch, tuit) => {

        if (tuit.disliked === true) {
            tuit.disliked = false;
            tuit.postDislikes--;
        } else {
            tuit.disliked = true;
            tuit.postDislikes++;
        }

        const status = await service.updateTuit(tuit);
        dispatch({
                     type: 'UPDATE_TUIT',
                     tuit:tuit
                 });

}


export const deleteTuit = async (dispatch, tuit) => {
    const response = await service.deleteTuit(tuit);
    dispatch({
                 type: DELETE_TUIT,
                 tuit:tuit
             })

}

