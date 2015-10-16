[![Stories in Ready](https://badge.waffle.io/jsabol/data-center-tool.svg?label=ready&title=Ready)](http://waffle.io/jsabol/data-center-tool)

[![Done](https://badge.waffle.io/jsabol/data-center-tool.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/jsabol/data-center-tool)

[![Done](https://badge.waffle.io/jsabol/data-center-tool.svg?label=ready&title=Done)](http://waffle.io/jsabol/data-center-tool)

Django Hackathon Starter
------------------------

A boilerplate application for Django web applications.

If you've attented hackathons, you already know how much time can be wasted figuring out what language to pick, which web framework to choose, which APIs to incorporate, and figuring out OAuth authentication. Django Hackathon Starter aims to provide these features out of the box, allowing the team to save hours of time getting these pieces together.

Even if you are not using this for a hackathon, Django Hackathon Starter is sure to save any developer hours or even days of development time and can serve as a learning guide for web developers.

Table of Contents
-----------------

- [Features](#features)
- [Pre-requisites](#pre-requisites)
- [Getting Started](#getting-started)
- [Obtaining API Keys](#getting-api-keys)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

Features
--------
* User Registration
* Sphinx Documentation
* Django Nosetests
* Integration with Django Rest Framework
* Basic Authentication with username and password
* **OAuth 2.0 Authentication**
    * Github
    * LinkedIn
    * Instagram
    * Facebook
    * Google+
    * Dropbox
    * Foursquare
* **OAuth 1.0a Authentication** 
    * Twitter
    * Tumblr
* **API Examples**
    * Yelp API
    * Github API
    * Instagram API
    * Tumblr API
    * Twitter API
    * Twilio API
    * Meetup API
    * Steam API
    * Quandl Stock API
    * New York Times API
    * LinkedIn API
    * Facebook API
    * Google+ API
    * Dropbox API
    * Foursquare API

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


**NOTE**: We highly recommend creating a [Virtual Environment](http://docs.python-guide.org/en/latest/dev/virtualenvs/). Python Virtual Environments allow developers to work in isolated sandboxes and to create separation between python packages installed via [pip](https://pypi.python.org/pypi/pip).

Run
-------
python hackathon_starter/manage.py runserver

<hr>


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

Contributing
------------

We welcome contributions of all kinds. If you would like to know what work is needed to be done, check the [issue tracker](https://github.com/DrkSephy/django-hackathon-starter/issues). Before sending a pull request, please open an issue. This project follows the [pep-0008](https://www.python.org/dev/peps/pep-0008/) style guide.


LICENSE
-------

The MIT License (MIT)

Copyright (c) 2015 David Leonard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
