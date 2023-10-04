import React from 'react';
import { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';

function CreatePost({ isAuth }) {
  //для того, чтобы инпуты отслеживали ввод
  const [nameD, setNameD] = useState('');
  const [datePost, setDatePost] = useState('');
  const [numberOfLaps, setNumberOfLaps] = useState('');
  const [neNorm, setNeNorm] = useState('');
  const [timesOfDay, setTimesOfDay] = useState('');
  const [howMinut, setHowMinut] = useState('');
  const [books, setBooks] = useState('');
  const [regularityBooks, setRegularityBooks] = useState('');
  const [minutBooks, setMinutBooks] = useState('');
  const [programm, setProgramm] = useState('');
  const [regularityProgramm, setRegularityProgramm] = useState('');
  const [seva, setSeva] = useState('');
  const [regularitySeva, setRegularitySeva] = useState('');
  const [courses, setCourses] = useState('');
  const [regularityCurses, setRegularityCurses] = useState('');
  const [classes, setClasses] = useState('');
  const [regularityClasses, setRegularityClasses] = useState('');
  const [minutsClasses, setMinutsClasses] = useState('');
  const [questions, setQuestions] = useState('');
  

  let navigate = useNavigate();
  //для отправки сообщений в firebase
  const postCollectionRef = collection(db, 'posts');
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      nameD,
      datePost,
      numberOfLaps,
      neNorm,
      timesOfDay,
      howMinut,
      books,
      regularityBooks,
      minutBooks,
      programm,
      regularityProgramm,
      seva,
      regularitySeva,
      courses,
      regularityCurses,
      classes,
      regularityClasses,
      minutsClasses,
      questions,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate('/');
  };

  //для аутинтификации пользователя
  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  });

  return (
    <div>
      <Header />
      <div className="mypost__content ">
        <h1 className="mypost__title">Создать отчет</h1>

        <div className="inputGp">
          <label>Духовное имя:</label>
          <input
            placeholder="Духовное имя..."
            onChange={(event) => {
              setNameD(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Дата создания отчета:</label>
          <input
            placeholder="Дата..."
            onChange={(event) => {
              setDatePost(event.target.value);
            }}
          />
        </div>

        <h2 className="mypost__title">Джапа</h2>

        <div className="inputGp">
          <label>Количество кругов:</label>
          <input
            placeholder="16..."
            onChange={(event) => {
              setNumberOfLaps(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Если не вычитываете норму, то по какой причине:</label>
          <input
            placeholder="Ответ..."
            onChange={(event) => {
              setNeNorm(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>В какое время читаете джапу:</label>
          <input
            placeholder="Часы или время суток..."
            onChange={(event) => {
              setTimesOfDay(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Сколько минут читаете 1 круг:</label>
          <input
            placeholder="7-8 мин..."
            onChange={(event) => {
              setHowMinut(event.target.value);
            }}
          />
        </div>

        <h2 className="mypost__title">Книги Шрилы Прабхупады</h2>

        <div className="inputGp">
          <label>Какие книги сейчас читаете:</label>
          <input
            placeholder="Ответ..."
            onChange={(event) => {
              setBooks(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Регулярность чтения:</label>
          <input
            placeholder="Каждый день..."
            onChange={(event) => {
              setRegularityBooks(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Сколько:</label>
          <input
            placeholder="По времени или количество шлок..."
            onChange={(event) => {
              setMinutBooks(event.target.value);
            }}
          />
        </div>

        <h2 className="mypost__title">Посещение программ</h2>

        <div className="inputGp">
          <label>Какие программы посещаете:</label>
          <input
            placeholder="Ответ..."
            onChange={(event) => {
              setProgramm(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Регулярность посещения:</label>
          <input
            placeholder="Ответ..."
            onChange={(event) => {
              setRegularityProgramm(event.target.value);
            }}
          />
        </div>

        <h2 className="mypost__title">Служение</h2>

        <div className="inputGp">
          <label>Какое служение у Вас:</label>
          <input
            placeholder="Ответ..."
            onChange={(event) => {
              setSeva(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Регулярность служения:</label>
          <input
            placeholder="Ответ..."
            onChange={(event) => {
              setRegularitySeva(event.target.value);
            }}
          />
        </div>

        <h2 className="mypost__title">Курсы</h2>

        <div className="inputGp">
          <label>Какие курсы проходите:</label>
          <input
            placeholder="Ответ..."
            onChange={(event) => {
              setCourses(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Регулярность:</label>
          <input
            placeholder="Ответ..."
            onChange={(event) => {
              setRegularityCurses(event.target.value);
            }}
          />
        </div>

        <h2 className="mypost__title">Лекции</h2>

        <div className="inputGp">
          <label>Какие лекции смотрите/слушаете:</label>
          <input
            placeholder="Ответ..."
            onChange={(event) => {
              setClasses(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Регулярность:</label>
          <input
            placeholder="Ответ..."
            onChange={(event) => {
              setRegularityClasses(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Сколько по времени:</label>
          <input
            placeholder="Ответ..."
            onChange={(event) => {
              setMinutsClasses(event.target.value);
            }}
          />
        </div>

        <h2 className="mypost__title">Вопросы или личный комментарий</h2>

        <div className="inputGp">
          <textarea
            placeholder="Ответ..."
            onChange={(event) => {
              setQuestions(event.target.value);
            }}
          />
        </div>
        <button className="create-post-btn" onClick={createPost}>
          Отправить
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
