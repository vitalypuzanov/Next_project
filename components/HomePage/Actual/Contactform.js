import React from 'react';
import Blackbtn from '../../UI/Blackbtn';
import classes from './Contactform.module.css';

// async function sendContactData(contactDetails) {
//     const response = await fetch('/api/contact', {
//       method: 'POST',
//       body: JSON.stringify(contactDetails),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || 'Something went wrong!');
//     }
//   }

//   function ContactForm() {
//     const [enteredEmail, setEnteredEmail] = useState('');
//     const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
//     const [requestError, setRequestError] = useState();

//     useEffect(() => {
//       if (requestStatus === 'success' || requestStatus === 'error') {
//         const timer = setTimeout(() => {
//           setRequestStatus(null);
//           setRequestError(null);
//         }, 3000);

//         return () => clearTimeout(timer);
//       }
//     }, [requestStatus]);

//     async function sendMessageHandler(event) {
//       event.preventDefault();

//       // optional: add client-side validation

//       setRequestStatus('pending');

//       try {
//         await sendContactData({
//           email: enteredEmail,
//           name: enteredName,
//           message: enteredMessage,
//         });
//         setRequestStatus('success');
//         setEnteredMessage('');
//         setEnteredEmail('');
//         setEnteredName('');
//       } catch (error) {
//         setRequestError(error.message);
//         setRequestStatus('error');
//       }
//     }

//     let notification;

//     if (requestStatus === 'pending') {
//       notification = {
//         status: 'pending',
//         title: 'Sending message...',
//         message: 'Your message is on its way!',
//       };
//     }

//     if (requestStatus === 'success') {
//       notification = {
//         status: 'success',
//         title: 'Success!',
//         message: 'Message sent successfully!',
//       };
//     }

//     if (requestStatus === 'error') {
//       notification = {
//         status: 'error',
//         title: 'Error!',
//         message: requestError,
//       };
//     }

function Contactform() {
  return (
    <div className={classes.conainer}>
      <div>
        <h2>Подпишитесь на нашу рассылку</h2>
      </div>

      <div>
        <div>
          <div className={classes.wrapper}>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              required
              value="Введите email "
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
            <Blackbtn>Подписаться</Blackbtn>
          </div>
        </div>
        <div className={classes.p}>
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
