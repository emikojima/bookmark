# README

## Usage
To use this app, just fork and clone. 
Then in terminal, run `cd bookmark`, `bundle install`, `rake db:migrate`, `cd client`, `npm i`, and then run `cd ..` 
Then run `rails s -p3001`. Open a new tab in your terminal and run `yarn --cwd client start`.

## Summary
“BookMark” utilizes a React/Redux client side, and a Rails API backend and New York Times API to show information about the week's NYT Bestsellers list by genre. 

Users can login or signup.

<img src="https://media.giphy.com/media/7NOR1f2SFf8VLg9WRk/giphy.gif" />

Users can see books by genre.

<img src="https://media.giphy.com/media/d7ndZcNhmGd0VaDdT9/giphy-downsized-large.gif" />

Users can save a book they are interested in keeping in their list, add a note to a book, and search their books. 

<img src="https://media.giphy.com/media/NsBjrSdM1OexBac4la/giphy.gif" />

## Built 
Back end:
Rails 5.2.1
Ruby 2.5.3
Faraday
JWT
Bcrypt
Postgres
Front end:
React
Redux
Thunk
Axios
React Router
React Bootstrap

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/emikojima/bookmark. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
This app is available as open source under the terms of the BSD-3-Clause License.

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
