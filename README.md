#  headless-cms dokumentationen

![pic](./public/logo192.png)

Med headless menas att du skapar en webside med hjälp av en software-platform såsom Wordpress, för att sedan kunna rendera ut innehållet med hjälp av en library som för exemple React.js.
Syftet med det är att kunna snygga till content from apiet som du mest gillar.
##

Börja med att skapa en [Pantheon](https://pantheon.io/) account och ladda ned [Wordpress](https://elementor.com/academy/introduction-to-wordpress/?utm_source=google&utm_medium=cpc&utm_campaign=13060922353&utm_term=&gclid=Cj0KCQjwpeaYBhDXARIsAEzItbFvQizIi3VSSMpD52jqYzAVJv_KcyC3bvl9KyA4FLl09QEo0KcESKQaAqpNEALw_wcB) och skriv din första blog enligt länken [skapa pantheon.io account](https://www.youtube.com/watch?v=uO2k1IlBS2A&t=25s).
##
Pantheon kan hosta, källkoda och deploya andra aplikationer, i detta fall Wordpress. 
## 
Du skall få en Pantheon site url när du är klar, t.ex https://dev-$pantheonsite_site_name.pantheonsite.io/2022/09/15/$wordpress_name/.
##
För att få apiet utav din Pantheon posts ska du ange följande url: https://$pantheonsite_site_name.pantheonsite.io//wp-json/wp/v2/posts.

#
Nu skapar man en react projekt 
```
npx create-react-app $projekt-name
```
Kom ihåg att installera en .env file i din root folder
```
npm install dotenv
```
och i filen lägger du dina miljö variabler som i detta fall innehåller din pantheonsite apis URL
##
![](./public/Screenshot%202022-09-15%20225810.png)

Nu i filen App.js ska man fetcha mot sin miljö variabel namn istället än själva URL:n men innanför namnet ska man lägga till Process.env.$variabelName 
#
![](./public/Screenshot%202022-09-14%20175804.png)
## 
Sedan lägg fon .env filen .gitignore.
#
Testa att din Url ger rätt data och rendera ut det.
##
see till att rendering ser bra ut genom att starta react server
```
npm start  
``` 
och checka under http://localhost:3000 att sidan ser ut som förväntades.

Syftet med det är att inte pusha in känsligt data till GitHub. Sedan pushar du projektet till GitHub
#

nu ska din GitHub sidan deployas.
## 
Gå till https://vercel.com/ och loggar in med dina GitHub inloggnings uppgifter.
En gång du loggade in, då clickar du på knappen 'add new' 
##
![](./public/Screenshot%202022-09-14%20182534.png)

och importerar dina GitHub projeker. Efteråt importerar du den Repository som du vill deploya genom att clicka Knappen Import
##
![](./public/Screenshot%202022-09-14%20183049.png)

Till sist, i enviroments variabel lägger du samma miljö variabel som du har angett i din .env file och deployar du sidan.
##
![](./public/Screenshot%202022-09-14%20183724.png)
#
#
#

Du kommer att få en url med din vercel sidan. plocka upp det och klistra in det i följande sidan https://validator.w3.org/ för att se om din sida följer [WCAG](https://www.w3.org/WAI/WCAG21/quickref/) krav. 