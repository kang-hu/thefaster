# theFaster

眼明手快


# 安裝

- yarn global add parcel-bundler
- yarn init -y
- yarn install

# 指令

- npm start || yarn start
- npm run build || yarn build
- "start": "parcel index.pug",
- "build": "parcel build index.pug --no-minify --no-source-maps --public-url ./"


# package log

- yarn add pug
- yarn add reset-css
- yarn add less
- yarn add vue
- yarn add babel-preset-env
- yarn add babel-polyfill

    {
      "presets": ["env"]
    }

- yarn add postcss-modules autoprefixer

    {
      "modules": true,
      "plugins": {
        "autoprefixer": {
          browsers: [ // 指定支援的瀏覽器版本
            'Chrome >= 52',
            'FireFox >= 44',
            'Safari >= 7',
            'Explorer >= 11',
            'last 2 Edge versions',
          ],
        }
      }
    }

# vue

- Add to your project’s package.json:

    {
        // ...
        "alias": {
            "vue" : "./node_modules/vue/dist/vue.common.js"
        }
    }

- import Vue from 'vue'

