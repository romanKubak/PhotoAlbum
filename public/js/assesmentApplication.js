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

const formFetch = document.getElementById('formPrivat');
console.log('formFetch ==> ', formFetch)

formFetch.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userLogin = e.target.userLogin.value;
  const albumId = e.target.name
  // console.log('albumId ==>', albumId)
  if (userLogin) {
    const response = await fetch('/addAdmission', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userLogin, albumId }),
    });
    const result = await response.json();
    console.log('result ==>', result)
  }
  
});
