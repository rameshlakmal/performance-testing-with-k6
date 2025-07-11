// Creator: Grafana k6 Browser Recorder 1.0.7

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_1 - https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', function () {
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
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
          cookie:
            'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057381305',
        },
      },
    )


    const tokenRegex = /:token="&quot;(.*?)&quot;"/;
    const tokenMatch = response.body.match(tokenRegex);
    const authToken = tokenMatch ? tokenMatch[1] : '';

    // Log the token for debugging
    console.log('Extracted token:', authToken);

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
          cookie:
            'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057381305',
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
          cookie:
            'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057381305',
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
          cookie:
            'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057381305',
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
            'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057521581',
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
            'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057522278',
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
          'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057522278',
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
          'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057522278',
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
            'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057522278',
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
            'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057522278',
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
            'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057522278',
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
            'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057522278',
        },
      }
    )

    response = http.post(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
      {
        _token: authToken,
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
            'orangehrm=0rg3liij3kucr10o4g57igif41; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057524342',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525349',
          },
        }
      )

      console.log(response.body)
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/time-at-work?timezoneOffset=5.5&currentDate=2025-03-15&currentTime=22:07',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/leaves?date=2025-03-15',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
            'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057525797',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057530835',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057530835',
          },
        }
      )

      console.log(response.body)
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057531939',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057531939',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057531939',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057531939',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057531939',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057538475',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057538475',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057539242',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057539242',
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
              'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057539242',
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
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          cookie:
            'orangehrm=2mu7i4m1ehturqlchb236l025h; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057544480',
        },
      })
    }
  )

  group(
    'page_5 - https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout',
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
              'orangehrm=hdua8hj1h5a9pu3rqm0ksi0vd3; _dd_s=logs=1&id=f08e223e-fb85-4098-a872-d7e974ae1ce1&created=1742056480067&expire=1742057544480',
          },
        }
      )
    }
  )

  // Automatically added sleep
  sleep(1)
}
