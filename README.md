# _ECOSYSTEM_

![Future Industry](http://b472-194-226-199-61.ngrok.io/static/Images/industry.png)


> The "Industry of the Future" is a step into a new world 
> of virtual knowledge. A constantly developing Ecosystem ᅠ  ᅠ  ᅠ
> aimed at obtaining theoretical and practical skills will
> give a new impetus to the development of future specialists!

## Aim of work

To develop an educational automated information system. 

To provide technological partners (educational institutions of the Leningrad region: schools, colleges, universities; private and public companies) with a product that will be able to automate teaching and improve the effectiveness of the acquired skills of all students.

# Description of AIE "Industry of the Future"

[Link to the learning ecosystem!](http://b472-194-226-199-61.ngrok.io/index.html)


## Technical details
- [ ] [Educational platform](http://b472-194-226-199-61.ngrok.io/education.html)
- [ ] [Admission сommittee](http://b472-194-226-199-61.ngrok.io/admission_committee.html)
- [ ] [Social network](http://b472-194-226-199-61.ngrok.io/social_network.html)
- [ ] [Representative offices of companies](http://b472-194-226-199-61.ngrok.io/company.html)


## Access rights
- [ ] Educational platform - the administrator controls the work of the personal cabinets of both teachers and students; users can view the schedule, post tasks, check them (if they are teachers)

- [ ] Admission сommittee

- [ ] Social network

- [ ] Representative offices of companies

***

## Technology stack used

- Astra Linux Common Edition 5.10.0 
- Apache 2.4.46 
- JavaScript
- JQuery 1.9.1
- Bootstrap 4.4.1 
- Python 3
- Kotlin 1.5.32
- PostgreSQL 14.1

# Installation guide (only for permission developers)

Install Apache in Astra Linux CE
```sh
$ sudo apt-get install apache2
```
Adding a program to the OS startup
```sh
$ sudo systemctl enable apache2
```
Starting the Web server
```sh
$ sudo systemctl start apache2
```
Cross to the startup project folder
```sh
$ cd /var/www/html
```
Clone the repository to a folder
```sh
$ git clone https://gitlab.com/draconru13/ecosystem.git
```
Add a virtual host (it costs 80 by default)
```sh
$ sudo nano /etc/apache2/sites-available/html.conf
```
Change the components of the file to the following ↓
```sh
<VirtualHost *:80>
ServerName html
ServerAlias www.future.industry
ServerAdmin admin@admin
DocumentRoot /var/www/html/index.html
ErrorLog ${APACHE_LOG_DIR}/error.log
CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
Saving and restarting Apache
```sh
$ sudo systemctl restart apache2
```
Install the snap package manager
```sh
$ sudo apt install snapd
```
Install ngrok via Snap
```sh
$ snap install ngrok
```
Go to the directory
```sh
$ cd /usr/local/src
```
Start a tunnel
```sh
$ ./ngrok http 80
```
Congratulations! Now you can go to your website by following the link:
```sh
$ http://####-194-226-199-61.ngrok.io/
```
