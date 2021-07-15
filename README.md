# BE | SEATED

## Description

Large events, such as weddings, coorporate events, and ceremonies, often require a seating chart. If the event is large, it is often difficult, inconvient, and/or not economical to distribute this information to event guests. This application was created to provide a tool for event planners to use in lieu of, or in addition to, a physical seating chart. 

Admin users will be able to create a seating chart that can be accessed via QR code so that guests can quickly search for their assigned seat. Please see User Experience for more details. 

## Live Application

https://beseated.herokuapp.com/

## User Story

`As an event guest I want to quickly find my assigned seat via QR code and search engine so that I am not waiting in line to view a seating chart`

`As an event planner I want to provide guests with an application that allows them to quickly find their assigned seats so that no one has to wait around for instructions or a seating chart`

## User Experience

### Admin User Experience

* As an event admin, I will be able to create an account 
* As an event admin, I will be able to login and view all events I have created
* As an event admin, I will be able to upload a CSV file to each event created 
* As an event admin, I will be able to preview the guest view
* As an event admin, I will be able to view, save, and/or print a QR code that is generated for each event 
* As an event admin, I will be able to view the seating chart 
* As an event admin, I will be able to add and delete single entries for a specific event seating chart

A demo for the Admin User Experience can be found here: 

*********insert link here

### Guest User Experience 

* As an event guest, I will be able to scan a QR code and be taken to my events seating chart search engine (mobile friendly)
* As an event guest, I will enter my first and last name and have my table assignment presented to me
* As an event guest, I will be able to see who else is assigned to my table 

A demo for the Guest User Experience can be found here: 

**********insert link here

## Modules Used

        @simonwep/pickr
        bcrypt
        bootstrap
        connect-session-sequelize
        dotenv
        express
        express-handlebars
        express-session
        fast-csv
        handlebars
        multer
        mysql2
        qr-image
        sass
        sequelize
        spectrum-colorpicker2
        uuid

## Contributors 

* Rob Brunett
* Robert Pupo
* Santiago Palacios
* Jocelyn Remington
* Liz Thompson

## GitHub Repo 

https://github.com/santipalacios2002/project-2
