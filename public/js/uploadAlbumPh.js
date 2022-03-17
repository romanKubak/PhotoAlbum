console.log('Привет из публика!');


// * 1 Найти форму на клиенте +
// * 2 Поймать событие отправки формы +
// * 3 event.preventDefault() +
// * 4 Вытащить данные из формы +
// * 5 Отправить эти данные на бек через fetch +
// * 6 На беке принять эти данные и отправить на фронт какой то ответ +
// * 7 Получить ответ от бека на клиенте +
// * 8 Распарсить (обработать) ответ +
// * 9 Как то обновить DOM

const formFetch = document.getElementById('formFetch');
// console.log('formFetch ==> ', formFetch)

// formFetch.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const title = e.target.title.value;
//   const body = e.target.body.value;
//   const addPhoto = e.target
//   if (title && body) {
//     const response = await fetch('/upload', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ title, body, addPhoto}),
//     });
//   }
//   // console.log('title ==>', title)
//   console.log('addPhoto ==>', addPhoto)
// });
