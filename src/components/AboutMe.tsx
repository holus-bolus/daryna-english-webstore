import NavigationMenu from './NavigationMenu.tsx';
import profileImage from '../assets/images/profile-image.jpg';

const AboutMe = () => {
  return (
    <div className="container">
      <NavigationMenu />
      <div className="row align-items-start my-4">
        <div className="col-md-6">
          <img
            src={profileImage}
            alt="Profile"
            className="img-fluid"
            style={{ maxWidth: '100%' }}
          />
        </div>
        <div className="col-md-6">
          <h2>Мене звуть Дарина, мені 33 роки.</h2>
          <p>Я з міста Дніпро.</p>
          <p>👩‍🏫 Викладаю англійську для дітей та дорослих вже 16 років.</p>
          <p>
            🎓 Маю вищу філологічну освіту, за спеціальністю англійська мова та
            література (магістр), міжнародні сертифікати викладача (TESOL/TEFL,
            TEYL) і безліч інших з методик та інструментів викладання.
          </p>
          <p>Останні 9 років працюю сама на себе.</p>
          <p>Мій кабінет ніби з Pinterest 😍</p>
          <p>✅️ викладаю English онлайн</p>
          <p>(для дітей 9+ та дорослих)</p>
          <p>
            ✅️ створюю воркбуки до фільмів, що робить процес навчання цікавішим
            та ефективним
          </p>
          <p>
            ✅️ мій гайд "КРІЗЬ ЧАСИ" допомагає розібратися у 12 граматичних
            часах
          </p>
          <p>
            ✅️ записала вебінар про Асинхронне навчання, як спосіб викладати у
            блекаути{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
