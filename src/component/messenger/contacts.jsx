import React from "react";
import "./contacts.css";
import { useSelector, useDispatch } from "react-redux";
import { postAction } from "../../store/postStore";

let text = "Me : Hello world to u alj";

if (text.length > 23) {
  text = text.slice(0, 23);
}

console.log(text.length);

function ChatContact() {
  const CurrentAccount = useSelector((store) => store.AllPost.CurrentAccount);
  const AllAccount = useSelector((store) => store.AllPost.accounts);
  const dispatch = useDispatch();
  const allFriends = useSelector(
    (store) => store.AllPost.CurrentAccountFriends
  );

  const otherAccounts = AllAccount.filter((element) => {
    return element !== CurrentAccount;
  });

  const ViewMessage = otherAccounts.map((el) => {
    function OnGoToUserIndoxHandelerFn() {
      dispatch(
        postAction.toChatDetail({
          id: el.name,
          name: el.name,
          profileImg: el.profileImg,
        })
      );
    }

    const active =
      allFriends.name === el.name
        ? "contactactive my-contacts "
        : "my-contacts";

    return (
      <div className={active} key={el.name} onClick={OnGoToUserIndoxHandelerFn}>
        <div className="contact-details">
          <img src={el.profileImg} alt="userName" />
        </div>
        <div className="namemers">
          <span className="nameername"> {el.name} </span>
          <span className="nameerfriends">{text}</span>
        </div>
      </div>
    );
  });

  return <div className="chatcontact">{ViewMessage}</div>;
}

export default ChatContact;
