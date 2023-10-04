import React from 'react';
import { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import Header from '../components/Header/Header';
import '../css/mypost.css';

function Home({ isAuth }) {
  //my
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, 'posts');

  const getPosts = async () => {
    try {
      const data = await getDocs(postCollectionRef);
      setPostList(
        data.docs.map((post) => ({
          ...post.data(),
          id: post.id,
        })),
      );
    } catch (err) {
      console.log(err);
    }
  };

  //удаление поста
  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
    getPosts();
  };

  useEffect(() => {
    console.log('Effect called');
    getPosts();
  }, []);

  return (
    <div>
      <Header />

     <div className="mypost__content">
        {postList.map((post) => {
          return (
            <div className="mypost__list" key={post.id}>
              {isAuth && post.author.id === auth.currentUser.uid && (
                <>
                  <div className="mypost__container">
                    <h2 className="mypost__name">{post.nameD}</h2>
                    <p>
                      <strong>Дата: </strong>
                      {post.datePost}
                    </p>
                    <h3 className="mypost__title">Джапа</h3>

                    <p>
                      <strong>Количество кругов: </strong>
                      {post.numberOfLaps}
                    </p>
                    <p>
                      <strong>Если не вычитываете норму, то по какой причине: </strong>
                      {post.neNorm}
                    </p>
                    <p>
                      <strong>В какое время читаете джапу: </strong>
                      {post.timesOfDay}
                    </p>
                    <p>
                      <strong>Сколько минут читаете 1 круг: </strong>
                      {post.howMinut}
                    </p>
                    <h3 className="mypost__title">Книги Шрилы Прабхупады</h3>

                    <p>
                      <strong>Какие книги сейчас читаете: </strong>
                      {post.books}
                    </p>
                    <p>
                      <strong>Регулярность чтения: </strong>
                      {post.regularityBooks}
                    </p>
                    <p>
                      <strong>Сколько: </strong>
                      {post.minutBooks}
                    </p>

                    <h3 className="mypost__title">Посещение программ</h3>

                    <p>
                      <strong>Какие программы посещаете: </strong>
                      {post.programm}
                    </p>
                    <p>
                      <strong>Регулярность посещения: </strong>
                      {post.regularityProgramm}
                    </p>

                    <h3 className="mypost__title">Служение</h3>
                    <p>
                      <strong>Какое служение у Вас: </strong>
                      {post.seva}
                    </p>
                    <p>
                      <strong>Регулярность служения: </strong>
                      {post.regularitySeva}
                    </p>

                    <h3 className="mypost__title">Курсы</h3>
                    <p>
                      <strong>Какие курсы проходите: </strong>
                      {post.courses}
                    </p>
                    <p>
                      <strong>Регулярность: </strong>
                      {post.regularityCurses}
                    </p>

                    <h3 className="mypost__title">Лекции</h3>
                    <p>
                      <strong>Какие лекции смотрите/слушаете: </strong>
                      {post.classes}
                    </p>
                    <p>
                      <strong>Регулярность: </strong>
                      {post.regularityClasses}
                    </p>
                    <p>
                      <strong>Сколько по времени: </strong>
                      {post.minutsClasses}
                    </p>

                    <h3 className="mypost__title">Вопросы или личный комментарий</h3>
                    <p>{post.questions}</p>
                  </div>

                  <div className='deletePost'>
                    {isAuth && post.author.id === auth.currentUser.uid && (
                      <i
                        onClick={() => {
                          deletePost(post.id);
                        }}
                        className="bx bx-message-square-x"></i>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
     </div>
  );
}
export default Home;
