
export default function About() {

    const skills = [
        {art: 'HTML5', id: 'qweq'}, 
        {art: 'CSS', id: 'xcvzx'}, 
        {art: 'SCSS', id: 'sadf'}, 
        {art: 'JavaScript (ES6+)', id: 'fgndf'}, 
        {art: 'React', id: 'rej5w'}, 
        {art: 'Redux', id: 'asfewgz'}, 
        {art: 'Thunk', id: 'nxzbc7qrqhv'}, 
        {art: 'Middleware', id: ';llll;asd'}, 
        {art: 'NPM', id: 'fmndsday9'}, 
        {art: 'REST API', id: 'frsjrtj'}, 
        {art: 'Git', id: 'fyjky9'}, 
        {art: 'GitHub', id: 'thrh12'}, 
        {art: 'JSON', id: 'fghdd21'}, 
        {art: 'AJAX', id: 'fgnd222'}, 
        {art: 'HTTP', id: 'dfghdfjyej'}, 
        {art: 'Figma', id: 'serweyfj'},
        {art: 'Webpack', id: 'cnr52'}, 
    ]

    return (
        <div>
            <h5>Об авторе:</h5>
            <p>Выпускник УГАТУ, предприимчивый и амбициозный. Имею опыт создания своего магазина на платформе Shopify для зарубежной аудитории.
            <br /> Начинающий Frontend разработчик, активно изучаю сферу в интернете. Претендую на стажировку, а впоследствии на работу в компанию, где смогу вырасти как разработчик и принести пользу. Ответственен за принимаемые решения, коммуникабельный, дружелюбный, внимательный.</p> 

            <h5>Ключевые навыки:</h5>
            <ul className="collection">
                <li className="collection-item">Высшее образование</li>
                <li className="collection-item">HTML, CSS, JavaScript, React;</li>
                <li className="collection-item">Английский (С1 Advanced);</li>
                <li className="collection-item">Базовые знания MS Office;</li>
                <li className="collection-item">Базовые навыки обработки фото, видео и аудиоматериалов;</li>
                <li className="collection-item">Военный билет и водительские права категории Б.</li>
            </ul>

            <h5>Образование:</h5>
            <ul className="collection">
                <li className="collection-item">УГАТУ, Бакалавриат (2017-2021), р. Башкортостан, г.Уфа;
            Специальность «Бизнес-информатика» по профилю «Специалист по информационным системам»;</li>
                <li className="collection-item">Полный курс по JavaScript - с нуля до результата [Иван Петриченко];</li>
                <li className="collection-item">React с нуля для начинающих [Михаил Непомнящий], платформа Udemy;</li>
                <li className="collection-item">Redux для управления состоянием React-приложений [Михаил Непомнящий], платформа Stepik;</li>
                <li className="collection-item">Southbourne School of English – обучение Английскому языку.</li>
            </ul>



            <h5>Технологии:</h5> 
            <div className="art-list">
                {skills.map(item => (
                    <span key={item.id} className="art-list-item">{item.art}</span>
                ))}
            </div>
            <p>React проекты написаны на хуках при помощи различных API
(restcountries.com, TheMealDb, TV Maze), на их основе созданы
карточки с добавлением логики, проекты адаптивны, оформлены
и обеспечены через дополнительные библиотеки. SPA написаны
при помощи React Router DOM и Redux. <br />
Series SPA первый боевой проект c тестового задания с
использованием Redux. Проект подгружает базу сериалов, на
страницу которых можно перейти, и посмотреть подробную
информацию, также сериалы можно вручную искать. Для
пагинации на главной странице в проект установил MUI, подгрузка
данных с API через thunk, также установлен redux-logger, который
работает только в development режиме. <br />
В проекте Countries подгружается база стран, при клике на
страну открывается подробная информация, на этой странице
можно увидеть граничащие страны и перейти на них, + меняется
светлая/темная тема, страны ищутся и сортируются по региону. <br />
Используется Routing 6 версии, установлены библиотеки reduxpersist для хранения данных в LocalStorage (Поместил только
информацию о переключении светлой/темной темы, другие
данные не нужны), API запросы через axios. <br />
Meals SPA - приложение с едой, категориями, и подробной
страницей с рецептами и видео, все с API. Проект - чистый html, css,
js. Написан на чистом энтузиазме)


            <br />Для коммитов использую Git, для размещения gh-pages. Готов к
изучению новых технологий и развитию.</p> 


            <h5>Опыт работы и обязанности:</h5>
            Июль 2018г., 1 мес. — г.Уфа «Софт-Сервис», обслуживание фискальных накопителей;<br />
            Июль 2019г., 1 мес. — г.Уфа «Софт-Сервис»;<br />
            Июль 2020., 1 мес. — г.Уфа «ИЦСБ» тех. Поддержка.<br />
            <p>Замена комплектующих кассовых аппаратов АТОЛ; перепрошивка фискальных накопителей; установка, регистрация дистрибутивов и ПО на базе Linux (Debian, Ubuntu), тех. поддержка.</p> 
            <div>
                <h5>Другие проекты:</h5>
                <ol style={{'paddingLeft': '15px'}}>
                    <a href="https://kozh-0.github.io/tvmaze/"><li>Series SPA (React + Redux)</li></a>
                    <a href="https://kozh-0.github.io/countries/"><li>Countries SPA (React + Redux)</li></a>
                    <a href="https://kozh-0.github.io/meals/"><li>Meals SPA (React)</li></a>
                    <a href="https://kozh-0.github.io/project/"><li>Проект (html, css, js)</li></a>
                </ol>
                <p>На Гитхабе есть другие проекты (20 репозиториев), высокая
активность.</p>
            </div>
        </div>
    );
}