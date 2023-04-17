import { createSlice } from "@reduxjs/toolkit";
import publicationImage from "../props/publicationImg.png";
import account1Image from "../props/pple-and-profile/aidancontact.png";
import account2Image from "../props/pple-and-profile/imrancontact.png";
import account3Image from "../props/pple-and-profile/marioncontact.png";
import account4Image from "../props/statusUser1.png";

const account1 = {
  name: "jonas mike",
  profileImg: account1Image,
  profilecontent: {
    about:
      " nothing much to say ... i am a tutor and a freelancer for front-end ",
    followers: 293,
    location: "Nigeria",
    mail: "jojna@gmail.com",
  },
  friends: ["samuel etim", "Andrew sauel", "Nathaniel Joseph"],
  publication: {
    publicationImage: publicationImage,
    Text: "this text here is just a dummy text and will be edited in due time",
    likes: 2,
    Comment: {
      commentors: [],
      commentNumber: 5,
    },

    messages: {
      messagesDate: [],
      message: [],
    },
  },
};

const account2 = {
  name: "samuel etim",
  profileImg: account2Image,
  friends: ["jonas mike", "Andrew sauel", "Nathaniel Joseph"],
  profilecontent: {
    about: "I am a graphics designer ",
    followers: 93,
    location: "Ghana",
    mail: "samuel@gmail.com",
  },
  publication: {
    publicationImage: publicationImage,
    Text: "this text here is just a dummy text and will be edited in due time",
    likes: 2,
    Comment: {
      commentors: [],
      commentNumber: 5,
    },

    messages: {
      messagesDate: [],
      message: [],
    },
  },
};

const account3 = {
  name: "Andrew sauel",
  profileImg: account3Image,
  friends: ["samuel etim", "jonas mike", "Nathaniel Joseph"],
  profilecontent: {
    about: "i am a content creator and an event organizer",
    followers: 29,
    location: "Nigeria",
    mail: "AnSuel@gmail.com",
  },
  publication: {
    publicationImage: publicationImage,
    Text: "this text here is just a dummy text and will be edited in due time",
    likes: 2,
    Comment: {
      commentors: [],
      commentNumber: 5,
    },

    messages: {
      messagesDate: [],
      message: [],
    },
  },
};

const account4 = {
  name: "Nathaniel Joseph",
  profileImg: account4Image,
  friends: ["samuel etim", "Andrew sauel", "jonas mike"],
  profilecontent: {
    about: "I am  Web develoer and a UI/UX designer",
    followers: 933,
    location: "Nigeria",
    mail: "nathjoeetim@gmail.com",
  },
  publication: {
    publicationImage: publicationImage,
    Text: "this text here is just a dummy text and will be edited in due time",
    likes: 2,
    Comment: {
      commentors: [],
      commentNumber: 5,
    },

    messages: {
      messagesDate: [],
      message: [],
    },
  },
};

const accounts = [account1, account2, account3, account4];

const ALLUSERPOST = createSlice({
  name: "Post",
  initialState: {
    accounts,
    CurrentAccount: [],
    CurrentAccountFriends: {},
  },
  reducers: {
    getCurrentAccountDetails(state, action) {
      const username = action.payload;
      state.CurrentAccount = state.accounts.find((el) => {
        return el.name === username;
      });
    },

    toChatDetail(state, action) {
      const newItem = action.payload;

      const pickedFriend = state.accounts.find((element) => {
        return element.name === newItem.name;
      });

      if (pickedFriend) {
        state.CurrentAccountFriends = {
          id: newItem.id,
          name: newItem.name,
          profileImg: newItem.profileImg,
          profilecontent: newItem.profilecontent,
        };
      }
    },
  },
});

export const postAction = ALLUSERPOST.actions;

export default ALLUSERPOST;
