import React, {useState, useRef} from 'react';

import BlackButton from '../../UI/BlackButton';
import classes from './Contactform.module.css';

function Contactform({addEmail}) {
  const emailinputRef = useRef();

  function sendMessageHandler(event) {
    event.preventDefault();
    const enteredEmail = emailinputRef.current.value;

    const emailData = {email: enteredEmail};
    addEmail(emailData);
  }

  return (
    <div className={classes.conainer}>
      <span>
        <h2>Подпишитесь на нашу рассылку</h2>
      </span>

      <div>
        <div>
          <form onSubmit={sendMessageHandler}>
            <div className={classes.wrapper}>
              <label htmlFor="email"></label>
              <input type="email" id="email" required ref={emailinputRef} />
              <BlackButton>Подписаться</BlackButton>
            </div>
          </form>
        </div>
        <div className={classes.info}>
          <p>
            Нажимая «Подписаться», вы соглашаетесь с Политикой обработки
            персональных данных
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
