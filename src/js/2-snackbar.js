// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// import cautionIcon from "../img/bi_exclamation-triangle.svg";
const formRef = document.querySelector('.form');

formRef.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const delay = event.currentTarget.elements.delay.value;
  const state = event.currentTarget.elements.state.value.toLowerCase();

  // if (delay <= 0) {
  //   showMessage(cautionIcon, 'You forgot important data', '#ef4040');
  //   return; 
  // }
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(delay, state);
      if (state === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });

  promise.then(() => {
    iziToast.success({
      position: 'topRight',
      message: `✅ Fulfilled promise in ${delay}ms`,
      messageSize: '16px',
      messageWeight: '400',
      backgroundColor: '#59a10d',
      messageColor: '#fff',
    });
  })
  .catch(() => {
    iziToast.error({
      messageSize: '16px',
      messageWeight: '400',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
      position: 'topRight',
      message: `❌ Rejected promise in ${delay}ms`,
    });
  });
}
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import cautionIcon from "../img/bi_exclamation-triangle.svg";


  

// function showMessage(icon, message, bgr) {
//   iziToast.show({
//     iconUrl: icon,
//     titleColor: 'Yellow',
//     titleSize: '24px',
//     message,
//     messageColor: 'Blue',
//     backgroundColor: bgr,
//     position: 'topRight',
//     timeout: 3000,
//   });
// }