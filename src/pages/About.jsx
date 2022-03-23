
export default function About() {

    const skills = [
        {art: 'HTML5', id: 'qweq'}, 
        {art: 'SCSS', id: 'sadf'}, 
        {art: 'CSS3', id: 'xcvzx'}, 
        {art: 'JavaScript (ES6+)', id: 'fgndf'}, 
        {art: 'React', id: 'rej5w'}, 
        {art: 'Redux', id: 'asfewgz'}, 
        {art: 'Webpack', id: 'cnr52'}, 
        {art: 'Git', id: 'fyjky9'}, 
        {art: 'GitHub', id: 'thrh12'}, 
        {art: 'NPM', id: 'fmndy9'}, 
        {art: 'JSON', id: 'fghdd21'}, 
        {art: 'AJAX', id: 'fgnd222'}, 
        {art: 'HTTP', id: 'dfghdfjyej'}, 
        {art: 'API', id: 'frsjrtj'}, 
        {art: 'Figma', id: 'serweyfj'}
    ]

    return (
        <div>
            <h5>Об авторе:</h5>
            <p>Выпускник УГАТУ, предприимчивый и амбициозный. Имею опыт создания своего магазина на платформе Shopify для зарубежной аудитории.
            <br /> Начинающий Frontend разработчик, активно изучаю сферу в интернете. Претендую на стажировку, а впоследствии на работу в компанию, где смогу вырасти как разработчик и принести пользу. Ответственен за принимаемые решения, коммуникабельный, дружелюбный, внимательный.</p> 


            <h5>Образование:</h5>
            <ul className="collection">
                <li className="collection-item">УГАТУ, Бакалавриат (2017-2021), р. Башкортостан, г.Уфа;
            Специальность «Бизнес-информатика» по профилю «Специалист по информационным системам»;</li>
                <li className="collection-item">Дополнительные курсы по JavaScript, и курс от Udemy по React;</li>
                <li className="collection-item">Southbourne School of English – обучение Английскому языку.</li>
            </ul>

            <h5>Ключевые навыки:</h5>
            <ul className="collection">
                <li className="collection-item">HTML, CSS, JavaScript, React;</li>
                <li className="collection-item">Английский (С1 Advanced);</li>
                <li className="collection-item">Базовые знания MS Office;</li>
                <li className="collection-item">Базовые навыки обработки фото, видео и аудиоматериалов;</li>
                <li className="collection-item">Военный билет и водительские права категории Б.</li>
            </ul>


            <h5>Технологии:</h5> 
            <div className="art-list">
                {skills.map(item => (
                    <span key={item.id} className="art-list-item">{item.art}</span>
                ))}
            </div>
            <p>React проекты написаны на хуках при помощи различных API
(OMDb, FortniteApi.io, TheMealDb, TV Maze), на их основе созданы
карточки с добавлением логики, проекты адаптивны, оформлены
через materializecss. SPA написаны при помощи React Router DOM
5.3.0.; Ecom Shop написан через хуки useReducer + useContext;
Series (TV Maze API) проект написан как SPA с использованием
Redux, для пагинации в проект установил MUI. Для коммитов
использую Git, для размещения gh-pages.
            <br />Готов к изучению новых технологий и развитию.</p> 


            <h5>Опыт работы и обязанности:</h5>
            Июль 2018г., 1 мес. — г.Уфа «Софт-Сервис», обслуживание фискальных накопителей;<br />
            Июль 2019г., 1 мес. — г.Уфа «Софт-Сервис»;<br />
            Июль 2020., 1 мес. — г.Уфа «ИЦСБ» тех. Поддержка.<br />
            <p>Замена комплектующих кассовых аппаратов АТОЛ; перепрошивка фискальных накопителей; установка, регистрация дистрибутивов и ПО на базе Linux (Debian, Ubuntu), тех. поддержка.</p> 
            <div>
                <h5>Другие проекты:</h5>
                <ol style={{'paddingLeft': '15px'}}>
                    <a href="- https://kozh-0.github.io/tvmaze/"><li>Series SPA (React)</li></a>
                    <a href="https://kozh-0.github.io/shop-project/"><li>Ecom shop (React)</li></a>
                    <a href="https://kozh-0.github.io/project/"><li>Проект (html, css, js)</li></a>
                    <a href="https://kozh-0.github.io/calc/"><li>Калькулятор калорий (js)</li></a>
                    <a href="https://kozh-0.github.io/verstka/"><li>Верстка (desktop only)</li></a>
                </ol>
            </div>
        </div>
    );
}