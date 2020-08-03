# react-rails-twitter-hooks
React Hooks及びRails5を用いたtwitterライクなアプリケーション

## Usage
```
git clone https://github.com/haku-noir/react-rails-twitter-hooks.git
cd react-rails-twitter-hooks
docker-compose run --rm app bash -c "cd /project/app && npm i"
docker-compose up -d --build
docker exec twitter_api bash -c "rake db:create db:migrate"
```
