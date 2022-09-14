# headless-cms dokumentationen

![pic](./public/logo192.png)

Med headless menas att du skapar en webside med hjälp av en software-platform såsom Wordpress, för att sedan kunna rendera ut innehållet med hjälp av en library som för exemple React.js.
Syftet med det är att kunna snygga till content from apiet som du mest gillar.

För att få apiet från en Wordpress websidan behöver du först installera wordpress [Wordpress](https://elementor.com/academy/introduction-to-wordpress/?utm_source=google&utm_medium=cpc&utm_campaign=13060922353&utm_term=&gclid=Cj0KCQjwpeaYBhDXARIsAEzItbFvQizIi3VSSMpD52jqYzAVJv_KcyC3bvl9KyA4FLl09QEo0KcESKQaAqpNEALw_wcB).

Sedan tar du den här url för att få apiet

Nästa steg är att sätta Wordpress foldern inuti MAMPS foldern som heter htdocs.
Efteråt, i Wordpress foldern, leta efter wp-config.js filen och ändra databas uppgifterna så att det stämmer med dem du kommer att ange i mysql databasen i i MAMP aplikationen (visar strax nedan).
För att undvika att pusha in i Githab känsligt data som Databas-keys eller känsliga Url, lägg till i rooten foldern en .env file :
```
npm install dotenv-webpack
```
och lägg inuti .env filen dina enviromen-variable. Glöm inte att lägga .env filen i gitignore, och att installera i projektet [Composer.js](https://stackoverflow.com/questions/52889744/missing-folder-vendor-and-file-env-after-creating-new-laravel-project)

Nu ska man starta i gång MAMP server. Börja med att hitta MAMP aplikationen i din datorn och klicka på det :

![](./public/mamp%20pic.png)


Efter man har klickat, borde du få appen igång : 
# ![](./public/mamp%20aplikation.png) 

Längst upp till vänster klick på MAMP texten och c "preferences". Se till att "Ports" nummerna är korrekta :

# ![](./public/MAMP%20ports.png)

att PHP versionen är samma som den du har tidigar installerad :

# ![](./public/mamp%20php%20.png)

och att vid "Server", "Dokument root" path pekar mot Wordpress mappen som ligger under MAMP/htdocs foldern (C:\MAMP\htdocs\wordpress i mitt fall) :
# ![](./public/MAMP%20server.png)

Nu går man till ´open web startpage´:

# ![](./public/Screenshot%202022-09-10%20201813.png)

och clickar man på länken 
[phpMyAdmin]() som leder dig till databasen.

Där anger du samma uppgifter som du har anget i din wp-config.php innan (DB_name, DB_password, Localhost) 

till slut, click på "START server" i MAMP appen och skriv i url localhost:80 för att see dina post i din Wordpress.
 #� �h�e�a�d�l�e�s�s�-�r�e�a�c�t�
�
�
