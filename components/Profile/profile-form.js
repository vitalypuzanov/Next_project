import {useState} from 'react';

import classes from './profile-form.module.css';

function ProfileForm(props) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    const enteredOldPassword = oldPassword;
    const enteredNewPassword = newPassword;

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">Новый пароль</label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onInput={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Старый пороль</label>
        <input
          type="password"
          id="old-password"
          value={oldPassword}
          onInput={(e) => setOldPassword(e.target.value)}
        />
      </div>
      <div className={classes.action}>
        <button>Изменить пароль</button>
      </div>
    </form>
  );
}

export default ProfileForm;
