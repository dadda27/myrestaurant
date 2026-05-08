# myrestaurant
A simple HTML, CSS, JS, PHP website for a restaurant.

The purpose of this webpage was just to play around and experiment with HTML and CSS.\
In the future, I might like to enrich it with more frontend/backend code (never know, hope so).\
I added some JavaScript code to make the page a bit more dynamic and add few features, also thanks to several Youtube video and material found on the internet (thanks for existing 😇).\
As of now, the PHP code only aims to include the Header (Top bar with logo, name and menu) and Footer to all the pages. 

## Pages
Currently implemented pages are:
- Home (index.php)
- Menu (fixed_pages/menu.php)
- Contacts (fixed_pages/contactos.php)

<img width="1539" height="752" alt="image" src="https://github.com/user-attachments/assets/5a781d51-60ed-43ef-95f7-b29426887928" />

## Features
- Supports resizing (width and height, smartphone horizontal/vertical)
- The Home page features an images carousel which works by clicking the left/right white arrows
- The Contacts page embeds GoogleMap to show the location.

## Usage
If you find this project interesting (really??), you can clone the repository, check the code, modify it, do anything you want, of course, and run the webpage in your web server (Apache / IIS / Nginx etc.)
> [!NOTE]
> Your web server must have PHP installed / enabled

### Docker
If you don't have any web server at your disposal (why you should, of course), but you use Docker:
- Clone the repository, check the code, modify it, do whatever you want, of course :smile:;
- The Dockerfile ìn the root directory pulls the ***php:7.2-apache*** image.\
  You can build the Docker image within the project's root directory with the command:
  ```
  sudo docker build -t myrestaurant .
  ````
  You can then run the container:
  ```
  sudo docker run -d -p 127.0.0.1:<your_local_port>:80 myrestaurant
  ````
- If you just want to see the website in action, you can pull directly the website image (***webpage + php:7.2-apache***) from my Docker Hub repository:
  ```
  sudo docker pull dadda27/myrestaurant:
  sudo docker run -d -p 127.0.0.1:<your_local_port>:80 dadda27/myrestaurant
  ````
  or directly pull and run it with:
  ```
  sudo docker run -d -p 127.0.0.1:<your_local_port>:80 dadda27/myrestaurant
  ```

You can then open your browser and type the URL:\
  ***localhost:your_local_port***
  
## Check the [Wiki](https://github.com/dadda27/myrestaurant/wiki)
If you would like to have more details about some [features](#features)
\
\
\
**\*Credits\***\
Photos (unsplashed.com): lily-banse, dan-gold, rachel-park, shawn, public-domain-vectors
