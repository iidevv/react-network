
import profileReducer from './reducers/profile-reducer';
import dialogsReducer from './reducers/dialogs-reducer';



let store = {
    _state: {
        profilePage: {
            posts: [
                { message: 'h2i1', likes: 2121 },
                { message: 'first message', likes: 5 },
                { message: 'first message2', likes: 4 },
                { message: 'first message3', likes: 5 }
            ],
            newPostValue: 'test2'
        },
        dialogsPage: {
            dialogs: [
                {
                    name: 'name1',
                    id: 1,

                },
                {
                    name: 'name2',
                    id: 2,

                },
                {
                    name: 'name3',
                    id: 3,

                }
            ],
            messages: [
                'test3'
            ],
            dialogsCurrentValue: 'sts'
        }
    },
    _subscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    addPost() {
        this._state.profilePage.posts.push({
            message: this._state.profilePage.newPostValue,
            likes: 0
        })
        this._state.profilePage.newPostValue = ""
        this._subscriber(this._state)
    },

    updatePostValue(newPostValue) {
        this._state.profilePage.newPostValue = newPostValue;
        this._subscriber(this._state)
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._subscriber(this._state);

    }
}



export default store;

window.store = store;
