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

// const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');

let userSelectedDate;
const iziOptions = {
  title: 'ERROR',
  titleColor: 'red',
  titleSize: '24px',
  message: 'Please choose a date in the future',
  messageSize: '16px',
  backgroundColor: 'rgba(225, 0, 0, 0.3)',
  position: 'center',
  closeOnEscape: true,
  timeout: 3000,
  overlay: true,
  overlayClose: true,
};

startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      iziToast.show(iziOptions);
      startBtn.disabled = true;
      // return alert('Please choose a date in the future');
      // iziToast.error({
      //   title: '',
      //   message: 'Please choose a date in the future',
      // });
    } else {
      startBtn.disabled = false;
      userSelectedDate = selectedDates[0];
//         iziToast.success({
//     title: '',
//     message: '',
// });
    }
    return;
  },
};


startBtn.addEventListener('click', () => {
  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diffInTime = userSelectedDate - currentTime;
    const { days, hours, minutes, seconds }  = convertMs(diffInTime);
    minutesRef.textContent = minutes.addLeadingZero(timeZone+ hours);
    daysRef.textContent = days.addLeadingZero(timeZone + hours);
    hoursRef.textContent = hours.addLeadingZero(timeZone + hours);
    secondsRef.textContent = seconds.addLeadingZero(timeZone + hours);
      inputRef.disabled = true;
    startBtn.disabled = true;
     if (diffInTime < 1000) clearInterval(intervalId);
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