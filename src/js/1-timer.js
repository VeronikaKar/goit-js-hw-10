// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// iziToast.show({
//     title: 'Hey',
//     message: 'What would you like to add?'
// });
// iziToast.success({
//     title: 'OK',
//     message: 'Successfully inserted record!',
// });


// iziToast.error({
//     title: 'Error',
//     message: 'Illegal operation',
// });
// setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

const inputRef = document.querySelector('#datetime-picker');
const startBtnRef = document.querySelector('button[data-start]');
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');
import errorIcon from "../img/bi_x-octagon.svg"
import successIcon from "../img/genetic-data-svgrepo-com.svg"
let userSelectedDate = 0;
// const iziOptions = {
//   title: 'ERROR',
//   titleColor: 'red',
//   titleSize: '24px',
//   message: 'Please choose a date in the future',
//   messageSize: '16px',
//   backgroundColor: 'rgba(225, 0, 0, 0.3)',
// 
// };
function showMessage(icon, message, bgr) {
  iziToast.show({
    iconUrl:icon,
    titleColor: 'White',
    titleSize: '24px',
    message,
    messageColor: 'White',
    messageSize: '16px',
    backgroundColor: bgr,
    position: 'topRight',
    timeout: 3000,
});
}
startBtnRef.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
    
      startBtnRef.disabled = true;
      // return alert('Please choose a date in the future');
      // return iziToast.error({
      //   title: 'Error',
      //   message: 'Please choose a date in the future',
      //   position: 'topRight',
      //   color: 'red',
      // });
      showMessage(errorIcon,'Please choose a date in the future','#ef4040')
    } else {
      startBtnRef.disabled = false;
      userSelectedDate = selectedDates[0];
      //         iziToast.success({
      //     title: '',
      //     message: '',
      // });
    }
  }
}

flatpickr(inputRef, options)
// If using flatpickr in a framework, its recommended to pass the element directly
// flatpickr(element, {});


startBtnRef.addEventListener('click', () => {
  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diffInTime = userSelectedDate - currentTime;
    const { days, hours, minutes, seconds }  = convertMs(diffInTime);
    
    daysRef.textContent = addLeadingZero(days);
    hoursRef.textContent = addLeadingZero(hours);
    minutesRef.textContent = addLeadingZero(minutes);
    secondsRef.textContent = addLeadingZero(seconds);
    inputRef.disabled = true;
    startBtnRef.disabled = true;
    if (diffInTime < 1000) {
      clearInterval(intervalId);
      showMessage(successIcon, 'Congratulations', 'Grey')
    }
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}