const sideMenu = document.querySelector('.side-menu');
for (let i = 0; i < 8; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.top = `${25 + i * 75}px`;
    circle.style.left = '15px';
    sideMenu.appendChild(circle);
}
const links = document.querySelectorAll('.side-menu a');
const contentSections = document.querySelectorAll('.content');
const contentSection = document.getElementById('education');
document.addEventListener('DOMContentLoaded', function() {
    contentSections.forEach(function(section) {
        section.classList.add('none');
    });
    contentSection.classList.remove('none');
    links.forEach(function(link) {
        if (link.getAttribute('data-target') === 'education') {
            link.classList.add('active');
        }
    });
});
links.forEach(function(link) {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        contentSections.forEach(function(section) {
            section.classList.add('none');
        });
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('none');
        }
        links.forEach(function(l) {
            l.classList.remove('active');
        });
        link.classList.add('active');
    });
});
const sideBar = document.querySelector('.side-menu');
window.addEventListener('scroll', function() {
    if (window.scrollY > 722) {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 560) {
            sideBar.style.position = '';
            sideBar.style.top = '';
        } else if (windowWidth > 560 && windowWidth <= 970) {
            sideBar.style.position = 'fixed';
            sideBar.style.top = '0px';
        } else {
            sideBar.style.position = 'fixed';
            sideBar.style.top = '125px';
        }
    } else {
        sideBar.style.position = '';
        sideBar.style.top = '';
    }
});
/*Translate*/
const translations = {
    ru: {
      'generaly-title': 'О себе',
      'generaly-subtitle': 'Я web-разработчик с опытом работы с React и Ruby on Rails. Стремлюсь развивать свои знания в области фронтенд-разработки, в частности с React, для создания интерактивных и динамичных веб-приложений. Имею опыт в настройке и использовании PostgreSQL в рамках проектов на Ruby on Rails, а также в работе с Git для управления версиями и деплоя на Heroku. Работал с адаптивной версткой, CSS-анимированием, использую принципы KISS и DRY в коде. Мой фокус на React и улучшение взаимодействия с пользователем через современные JS-технологии.',
      'link1': 'Образование',
      'link2': 'Опыт работы',
      'link3': 'Навыки',
      'link4': 'Языки',
      'link5': 'Контакты',
      'name1': 'НИЯУ "МИФИ", Высшее образование',
      'specialist1': 'Бакалавр, Ядерные фиизика и технологии',
      'specialist1_1': 'Вывод из эксплуатации ядерно и радиационно опасных объектов',
      'link6': 'Посмотреть диплом',
      'specialist2': 'Веб-разработка на основе современных свободных фреймворков',
      'name2': 'НИЯУ "МИФИ", Переквалификация',
      'name3': 'Сайт для репетитора',
      'link7': 'Посмотреть сайт',
      'link8': 'Посмотреть на GitHub',
      'first-child1': 'Описание: Реализовал одностраничный сайт с использованием Ruby on Rails, включающим адаптивную верстку с помощью Flexbox и Grid. Настроил форму для отправки данных в Telegram с использованием API.',
      'first-child2': 'Навыки и технологии: Ruby on Rails, HTML, CSS, PostgreSQL, настройка и деплой на Heroku, интеграция с внешними сервисами.',
      'summary': 'Опыт',
      'summary-span1': 'Семантическая разметка, флексбоксы и гриды, адаптивная верстка, медиа-запросы, CSS-анимации, настройка внешнего вида для различных устройств. Разработка одностраничных сайтов с использованием фреймворка Ruby on Rails, включая формы и интеграцию с внешними сервисами, такими как Telegram-бот.',
      'summary-span2': 'Работа с DOM, создание интерактивных элементов, программное добавление и удаление классов, события, циклы, управление видимостью контента, использование стандартных функций JavaScript для динамического изменения контента на странице.',
      'summary-span3': 'Создание репозиториев, работа с ветками, слияние и разрешение конфликтов. Публикация кода на GitHub, деплой на Heroku. Опыт работы с ошибками при деплое через Git и Heroku, проверка и исправление ошибок перед развертыванием приложения.',
      'subskill1': 'Настройка и деплой на хостинг',
      'subskill2': 'Работа с GitHub и решение ошибок при деплое',
      'summary-span4': 'Понимаю основы работы с компонентами, JSX, состоянием и пропсами, а также с React-роутингом. Нацелен на развитие и практическую реализацию проектов с использованием React. Умею использовать хуки(useState, useEffect, useRef,useContext)',
      'summary-span5': 'Создание моделей, миграций, контроллеров, настройка связей между моделями, валидации, маршруты. Реализация формы для отправки данных на почту или в Telegram-бот. Опыт работы с PostgreSQL и SQLite3 в качестве базы данных.',
      'summary-span6': 'Настройка и использование PostgreSQL в проектах на Ruby on Rails. Создание и выполнение SQL-запросов, управление схемой базы данных, настройка миграций и оптимизация работы с данными.',
      'subskill3': 'React: JSX, hooks(useState, useEffect, useContext, useRef), API, asynk, await, правильная структура файлов',
      'subskill4': 'Создание и настройка форм (интеграция с Telegram)',
      'subskill5': 'Настройка Ubuntu на виртуальной машине и работа в этом окружении',
      'rus': 'Русский',
      'eng': 'Английский',
      'link9': 'Посмотреть сертификат',
      'link10': 'ВКонтакте'
    },
    en: {
        'generaly-title': 'About Me',
        'generaly-subtitle': 'I am a web developer with experience in React and Ruby on Rails. I am eager to advance my knowledge in frontend development, particularly with React, to build interactive and dynamic web applications. I have experience setting up and using PostgreSQL in Ruby on Rails projects, as well as working with Git for version control and deploying on Heroku. I have worked on responsive design and CSS animations and apply the KISS and DRY principles to my code. My focus is on React and enhancing user experience through modern JavaScript technologies.',
        'link1': 'Education',
        'link2': 'Work Experience',
        'link3': 'Skills',
        'link4': 'Languages',
        'link5': 'Contacts',
        'name1': 'MEPhI (National Research Nuclear University), Higher Education',
        'specialist1': 'Bachelor\'s Degree in Nuclear Physics and Technologies',
        'specialist1_1': 'Decommissioning of Nuclear and Radiation Hazardous Facilities',
        'link6': 'View Diploma',
        'specialist2': 'Web Development Using Modern Open-Source Frameworks',
        'name2': 'MEPhI (National Research Nuclear University), Retraining Program',
        'name3': 'Tutor\'s Website',
        'link7': 'View Website',
        'link8': 'View on GitHub',
        'first-child1': 'Description: Developed a single-page website using Ruby on Rails, featuring responsive design with Flexbox and Grid. Configured a form to send data to Telegram via API.',
        'first-child2': 'Skills and Technologies: Ruby on Rails, HTML, CSS, PostgreSQL, Heroku deployment, integration with external services.',
        'summary': 'Experience',
        'summary-span1': 'Semantic HTML, Flexbox and Grid layouts, responsive design, media queries, CSS animations, and styling adjustments for different devices. Developed single-page websites using the Ruby on Rails framework, including forms and integration with external services like a Telegram bot.',
        'summary-span2': 'DOM manipulation, creating interactive elements, programmatically adding and removing classes, handling events, loops, managing content visibility, and using standard JavaScript functions to dynamically update page content.',
        'summary-span3': 'Creating repositories, managing branches, merging, and resolving conflicts. Publishing code to GitHub, deploying on Heroku. Experienced in handling deployment errors with Git and Heroku and debugging applications before deployment.',
        'subskill1': 'Hosting Setup and Deployment',
        'subskill2': 'Working with GitHub and Resolving Deployment Errors',
        'summary-span4': 'I understand the basics of working with components, JSX, state and props, and React roaming. Aimed at development and practical realization of projects using React. I know how to use hooks (useState, useEffect, useRef,useContext).',
        'summary-span5': 'Creating models, migrations, and controllers, configuring model relationships, validations, and routes. Implemented forms to send data via email or to a Telegram bot. Experience with PostgreSQL and SQLite3 databases.',
        'summary-span6': 'Configuring and using PostgreSQL in Ruby on Rails projects. Creating and executing SQL queries, managing database schemas, setting up migrations, and optimizing data handling.',
        'subskill3': 'React: JSX, hooks (useState, useEffect, useContext, useRef), API, asynk, await, proper file structure',
        'subskill4': 'Form Creation and Configuration (Telegram Integration)',
        'subskill5': 'Setting Up and Working in Ubuntu on a Virtual Machine',
        'rus': 'Russian',
        'eng': 'English',
        'link9': 'View Certificate',
        'link10': 'VKontakte'
      }
  };
// Функция для смены языка
function setLanguage(language) {
    const elements = document.querySelectorAll('[target-translation]');
    elements.forEach(element => {
      const key = element.getAttribute('target-translation');
      if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });
    localStorage.setItem('language', language);
  }
  document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'ru';
    setLanguage(savedLanguage);
  });
  document.getElementById('btn-ru').addEventListener('click', () => setLanguage('ru'));
  document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));
/*кнопки Btn*/
const btnRu = document.getElementById('btn-ru');
const btnEn = document.getElementById('btn-en');
function setButtonStyles(language) {
    if (language !== 'ru') {
        btnRu.style.boxShadow = '#413C58 1px 1px 10px';
        btnEn.style.boxShadow = 'inset #413C58 1px 1px 10px';
    } else {
        btnEn.style.boxShadow = '#413C58 1px 1px 10px';
        btnRu.style.boxShadow = 'inset #413C58 1px 1px 10px';
    }
}
let currentLanguage = localStorage.getItem('language') || 'ru';
setButtonStyles(currentLanguage);
btnRu.addEventListener('click', function() {
    currentLanguage = 'ru';
    localStorage.setItem('language', currentLanguage);
    setButtonStyles(currentLanguage);
});
btnEn.addEventListener('click', function() {
    currentLanguage = 'en';
    localStorage.setItem('language', currentLanguage);
    setButtonStyles(currentLanguage);
});

