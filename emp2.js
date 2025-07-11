// Creator: Grafana k6 Browser Recorder 1.0.7

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_1 - https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', function () {
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie: 'orangehrm=nub6a9qakmm4k4he4dao3d3o5o',
        },
      }
    )

    console.log(response.body)

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1721393199309',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie: 'orangehrm=nub6a9qakmm4k4he4dao3d3o5o',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/js/chunk-vendors.js?v=1721393199309',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie: 'orangehrm=nub6a9qakmm4k4he4dao3d3o5o',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1721393199309',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie: 'orangehrm=nub6a9qakmm4k4he4dao3d3o5o',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
          'sec-ch-ua-platform': '"Windows"',
          contenttype: 'application/json',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          accept: 'application/json',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie:
            'orangehrm=nub6a9qakmm4k4he4dao3d3o5o; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070942963',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/images/ohrm_branding.png?v=1721393199309',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie:
            'orangehrm=nub6a9qakmm4k4he4dao3d3o5o; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070943553',
        },
      }
    )

    response = http.get('https://opensource-demo.orangehrmlive.com/web/images/ohrm_logo.png', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
        'sec-ch-ua-mobile': '?0',
        accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        cookie:
          'orangehrm=nub6a9qakmm4k4he4dao3d3o5o; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070943553',
      },
    })

    response = http.get('https://opensource-demo.orangehrmlive.com/web/dist/img/blob.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
        'sec-ch-ua-mobile': '?0',
        accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1721393199309',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        cookie:
          'orangehrm=nub6a9qakmm4k4he4dao3d3o5o; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070943553',
      },
    })

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-800.woff2',
      {
        headers: {
          origin: 'https://opensource-demo.orangehrmlive.com',
          'sec-ch-ua-platform': '"Windows"',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'font',
          referer:
            'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie:
            'orangehrm=nub6a9qakmm4k4he4dao3d3o5o; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070943553',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2',
      {
        headers: {
          origin: 'https://opensource-demo.orangehrmlive.com',
          'sec-ch-ua-platform': '"Windows"',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'font',
          referer:
            'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie:
            'orangehrm=nub6a9qakmm4k4he4dao3d3o5o; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070943553',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/fonts/bootstrap-icons.woff2',
      {
        headers: {
          origin: 'https://opensource-demo.orangehrmlive.com',
          'sec-ch-ua-platform': '"Windows"',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'font',
          referer:
            'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie:
            'orangehrm=nub6a9qakmm4k4he4dao3d3o5o; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070943553',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-600.woff2',
      {
        headers: {
          origin: 'https://opensource-demo.orangehrmlive.com',
          'sec-ch-ua-platform': '"Windows"',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'font',
          referer:
            'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie:
            'orangehrm=nub6a9qakmm4k4he4dao3d3o5o; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070943553',
        },
      }
    )

    response = http.post(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
      {
        _token:
          '07ff1c062b0ebff03c16f95dda1.2nMD-CxL3kfk9R4vxlI1KnuWnovBsn2ZJPpHuDDpRtk.tRRqrngAv3OhjHBkshp7bTXn5uGFwCroRaAT8nmtDbKiBnqKQCaTPpCqcQ',
        password: 'admin123',
        username: 'Admin',
      },
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://opensource-demo.orangehrmlive.com',
          'content-type': 'application/x-www-form-urlencoded',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-user': '?1',
          'sec-fetch-dest': 'document',
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie:
            'orangehrm=nub6a9qakmm4k4he4dao3d3o5o; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070946006',
        },
      }
    )
  })

  group(
    'page_2 - https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
            'sec-ch-ua-platform': '"Windows"',
            contenttype: 'application/json',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947017',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orange.png?v=1721393199309',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-700.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: '*/*',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'font',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-300.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: '*/*',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'font',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-italic.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: '*/*',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'font',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orangehrm-logo.png?v=1721393199309',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/dashboard_empty_widget_watermark.png',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/time-at-work?timezoneOffset=5.5&currentDate=2025-03-16&currentTime=01:50',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/feed?limit=5&offset=0&sortOrder=DESC&sortField=share.createdAtUtc',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/leaves?date=2025-03-16',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.post(
        'https://opensource-demo.orangehrmlive.com/web/index.php/events/push',
        null,
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            origin: 'https://opensource-demo.orangehrmlive.com',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/22',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/11',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/photo/9', {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie:
            'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
        },
      })
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/9',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070947497',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070950202',
          },
        }
      )
    }
  )

  group(
    'page_3 - https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
            'sec-ch-ua-platform': '"Windows"',
            contenttype: 'application/json',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070950202',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070951298',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070951298',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/employment-statuses?limit=0',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070951298',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=0',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070951298',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070951298',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070955768',
          },
        }
      )
    }
  )

  group(
    'page_4 - https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
            'sec-ch-ua-platform': '"Windows"',
            contenttype: 'application/json',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070955768',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070956502',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/default-photo.png',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070956502',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070956502',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/core/validation/unique?value=0382356262&entityName=Employee&attributeName=employeeId',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070968144',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/core/validation/unique?value=0382356262&entityName=Employee&attributeName=employeeId',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070969014',
          },
        }
      )

      response = http.post(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        '{"firstName":"kasun","middleName":"amara","lastName":"binara","empPicture":null,"employeeId":"0382356262"}',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'content-type': 'application/json',
            'sec-ch-ua-mobile': '?0',
            origin: 'https://opensource-demo.orangehrmlive.com',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070969014',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070969014',
          },
        }
      )
    }
  )

  group(
    'page_5 - https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
            'sec-ch-ua-platform': '"Windows"',
            contenttype: 'application/json',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070969014',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070973614',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/179',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070973614',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/179/personal-details',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070973614',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/179',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070973614',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/workweek?model=indexed',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070973614',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/workweek?model=indexed',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070973614',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/179/custom-fields?screen=personal',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070973614',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/179/screen/personal/attachments?limit=50&offset=0',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070973614',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/holidays?fromDate=2025-01-01&toDate=2025-12-31',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070973614',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/holidays?fromDate=2025-01-01&toDate=2025-12-31',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070973614',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070973614',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/179',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070979289',
          },
        }
      )
    }
  )

  group(
    'page_6 - https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
            'sec-ch-ua-platform': '"Windows"',
            contenttype: 'application/json',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070979289',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-dest': 'image',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070980397',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070980397',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/employment-statuses?limit=0',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070980397',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=0',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070980397',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070980397',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?nameOrId=kasun&includeEmployees=onlyCurrent',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070985719',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&nameOrId=kasun&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
        {
          headers: {
            'sec-ch-ua-platform': '"Windows"',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070988263',
          },
        }
      )
      response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout', {
        headers: {
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-user': '?1',
          'sec-fetch-dest': 'document',
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie:
            'orangehrm=3j1agjqk1ied655bdqolc27753; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070993456',
        },
      })
    }
  )

  group(
    'page_7 - https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
            'sec-ch-ua-platform': '"Windows"',
            contenttype: 'application/json',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            cookie:
              'orangehrm=ujhk65q74jo59a1nuv9hsffgc2; _dd_s=logs=1&id=b16a93e6-887d-487b-b167-48f40971779f&created=1742070042963&expire=1742070993456',
          },
        }
      )
    }
  )

  // Automatically added sleep
  sleep(1)
}
