import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {
          id: "1",
          name: "Dima",
          img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
        },
        {
          id: "2",
          name: "Tanya",
          img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
        },
        {
          id: "3",
          name: "Vova",
          img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
        },
        {
          id: "4",
          name: "Vika",
          img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
        },
        {
          id: "5",
          name: "Serega",
          img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
        },
        {
          id: "6",
          name: "Nadya",
          img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
        },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "What do you do?" },
        { id: 4, message: "YoYoYo" },
      ],
      newMessageText: "",
    },
    profilePage: {
      posts: [
        { id: "1", message: "How are you?", likesCount: "12" },
        { id: "2", message: "I'm fine, and you?", likesCount: "23" },
        { id: "3", message: "I'm okey! Thanks.", likesCount: "30" },
      ],
      newPostText: "",
    },
    sidebar: {
      friends: [
        {
          id: "1",
          name: "Dima",
          img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
        },
        {
          id: "2",
          name: "Tanya",
          img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
        },
        {
          id: "3",
          name: "Vova",
          img: "https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg",
        },
      ],
    },
  },
  _rerenderTree() {
    return "";
  },
  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._rerenderTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._rerenderTree(this._state);
  },
};

window.store = store;

export default store;
