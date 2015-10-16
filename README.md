[Data Center Application](http://data-center-tool-jsabol.c9.io/hackathon/)
------------------------

- [iRise user dashboard demo](https://try.dc.irise.com:443/iRise/ds/play/49eb4d8639d543d9a54cc67b67f7475f)
- [View live site](http://data-center-tool-jsabol.c9.io/hackathon/)
- [Presentation](Data Center Cost Analysis.pptx)


Agile User Stories
-------------------

[![Stories in Ready](https://badge.waffle.io/jsabol/data-center-tool.svg?label=ready&title=Ready)](http://waffle.io/jsabol/data-center-tool)

[![Done](https://badge.waffle.io/jsabol/data-center-tool.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/jsabol/data-center-tool)

[![Done](https://badge.waffle.io/jsabol/data-center-tool.svg?label=done&title=Done)](http://waffle.io/jsabol/data-center-tool)



Table of Contents
-----------------

- [Pre-requisites](#pre-requisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [License](#license)


<hr>


Pre-requisites
--------------

This project relies on `bower` for front-end dependencies, which in turn requires [npm](https://www.npmjs.com/). `npm` is now bundled with `NodeJS`, which you can download and install [here](https://nodejs.org/download/).

For Python-specific libraries, this project relies on [pip](https://pypi.python.org/pypi/pip). The easiest way to install `pip` can be [found here](https://pip.pypa.io/en/latest/installing.html).

Getting Started
---------------
To get up and running, simply do the following:

    $ git clone https://github.com/DrkSephy/django-hackathon-starter.git
    $ cd django-hackathon-starter

    # Install the requirements
    $ pip install -r requirements.txt

    # Install bower
    $ npm install -g bower
    $ bower install

    # Perform database migrations
    $ python hackathon_starter/manage.py makemigrations
    $ python hackathon_starter/manage.py migrate

    # Create Django superuser
    $ python hackathon_starter/manage.py createsuperuser

**NOTE**: We highly recommend creating a [Virtual Environment](http://docs.python-guide.org/en/latest/dev/virtualenvs/). Python Virtual Environments allow developers to work in isolated sandboxes and to create separation between python packages installed via [pip](https://pypi.python.org/pypi/pip).

Run
-------
    python hackathon_starter/manage.py runserver

<hr>

This project used [Django Hackathon Starter](https://github.com/DrkSephy/django-hackathon-starter) as a skeleton framework.


Project Structure
-----------------


| Name                               | Description                                                 |
| ---------------------------------- |:-----------------------------------------------------------:|
| **hackathon_starter**/settings.py | Django settings module containing database and API keys/tokens|
| **hackathon**/admin.py            | Registered models for Django's admin page|
| **hackathon**/models.py           | Django models and profiles for user login|
| **hackathon**/tests.py            | Integration tests|
| **hackathon**/urls.py             | Django Hackathon Starter URL dispatcher|
| **hackathon**/views.py            | Django views file|
| **hackathon**/serializers.py      | Allows JSON representation for Django Model fields|
| **hackathon**/forms.py            | Basic form fields|
| **hackathon/static/**             | Front-end JavaScript / CSS files|
| **hackathon/unittests**           | Unit tests|
| **hackathon/scripts/**            | API Example scripts|
| **hackathon/scripts/**github.py   | Script for interacting with Github API   |
| **hackathon/scripts/**instagram.py| Script for interacting with Instagram API|
| **hackathon/scripts/**linkedin.py | Script for interacting with LinkedIn API |
| **hackathon/scripts/**meetup.py   | Script for interacting with Meetup API |
| **hackathon/scripts/**nytimes.py  | Script for interacting with New York Times API |
| **hackathon/scripts/**quandl.py   | Script for interacting with Quandl API |
| **hackathon/scripts/**scraper.py  | Basic web scraper for getting sales from Steam            |
| **hackathon/scripts/**facebook.py | Script for interacting with Facebook API |
| **hackathon/scripts/**dropbox.py  | Script for interacting with Dropbox API |
| **hackathon/scripts/**foursquare.py | Script for interacting with Foursquare API |
| **hackathon/scripts/**googlePlus.py | Script for interacting with Google+ API |
| **hackathon/scripts/**steam.py                      | Script for interacting with Steam API   |
| **hackathon/scripts/**tumblr.py                     | Script for interacting with Tumblr API  |
| **hackathon/scripts/**twilioapi.py                  | Script for interacting with Twilio API  |
| **hackathon/scripts/**twitter.py                    | Script for interacting with Twitter API |
| **hackathon/scripts/**yelp.py                       | Script for interacting with Yelp API |
| **hackathon/templates/**hackathon/                  | Templates for API examples |
| **hackathon/templates/**hackathon/base.html         | Base template, contains navbar |