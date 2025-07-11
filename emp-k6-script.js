// Creator: Grafana k6 Browser Recorder 1.0.7

import { sleep, group } from 'k6'
import http from 'k6/http'


export default function main() {


  group('page_1 - https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', function () {
    const response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      headers: {
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },

      
    }
    
  
  )

// export default function main() {
//   group('page_1 - Login Page', function () {
//     // Step 1: Fetch the login page
//     const response = http.get(
//       'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
//       {
//         headers: {
//           'upgrade-insecure-requests': '1',
//           'user-agent':
//             'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
//           'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
//           'sec-ch-ua-mobile': '?0',
//           'sec-ch-ua-platform': '"Windows"',
//         },
//       }
//     );
//     // let tokenRegex = /:token="&quot;(.*?)&quot;"/;
//     // let tokenMatch = response.body.match(tokenRegex);
//     // let authToken = tokenMatch ? tokenMatch[1] : '';

        
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
      {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1721393199309',
      {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/js/chunk-vendors.js?v=1721393199309',
      {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1721393199309',
      {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          accept: 'application/json',
          'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          contenttype: 'application/json',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/favicon.ico?v=1721393199309',
      {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/images/ohrm_branding.png?v=1721393199309',
      {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://opensource-demo.orangehrmlive.com/web/images/ohrm_logo.png', {
      headers: {
        referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://opensource-demo.orangehrmlive.com/web/dist/img/blob.svg', {
      headers: {
        referer: 'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1721393199309',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-800.woff2',
      {
        headers: {
          origin: 'https://opensource-demo.orangehrmlive.com',
          referer:
            'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2',
      {
        headers: {
          origin: 'https://opensource-demo.orangehrmlive.com',
          referer:
            'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/fonts/bootstrap-icons.woff2',
      {
        headers: {
          origin: 'https://opensource-demo.orangehrmlive.com',
          referer:
            'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-600.woff2',
      {
        headers: {
          origin: 'https://opensource-demo.orangehrmlive.com',
          referer:
            'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  group(
    'page_2 - https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
    function () {

      const reqBody = JSON.stringify(
        {

          username: 'Admin',
          password: 'admin123',
        }
    )

    const param = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        origin: 'https://opensource-demo.orangehrmlive.com',
        referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
  }


     const response = http.post('https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate', reqBody, param)




      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/chunk-vendors.js?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-600.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-800.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/bootstrap-icons.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orange.png?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-700.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-300.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-italic.woff2',
        {
          headers: {
            origin: 'https://opensource-demo.orangehrmlive.com',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orangehrm-logo.png?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/dashboard_empty_widget_watermark.png',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/time-at-work?timezoneOffset=5.5&currentDate=2025-02-19&currentTime=14:07',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/feed?limit=5&offset=0&sortOrder=DESC&sortField=share.createdAtUtc',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/leaves?date=2025-02-19',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.post(
        'https://opensource-demo.orangehrmlive.com/web/index.php/events/push',
        null,
        {
          headers: {
            accept: 'application/json',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/22',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/11',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/photo/9', {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/9',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
    }
  )

  group(
    'page_3 - https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/chunk-vendors.js?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-300.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-italic.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-600.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-700.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-800.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/bootstrap-icons.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orange.png?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orangehrm-logo.png?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/employment-statuses?limit=0',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=0',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
    }
  )

  group(
    'page_4 - https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/chunk-vendors.js?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-300.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-italic.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-600.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-700.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-800.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/bootstrap-icons.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orange.png?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orangehrm-logo.png?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/default-photo.png',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/core/validation/unique?value=0403&entityName=Employee&attributeName=employeeId',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.post(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        '{"firstName":"sachin","middleName":"thanuka","lastName":"gunathilake","empPicture":null,"employeeId":"0112381"}',
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            accept: 'application/json',
            'content-type': 'application/json',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
    }
  )

  group(
    'page_5 - https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1721393199309',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/chunk-vendors.js?v=1721393199309',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1721393199309',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-300.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-italic.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-600.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-700.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-800.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/bootstrap-icons.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orange.png?v=1721393199309',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orangehrm-logo.png?v=1721393199309',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/200',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/200/personal-details',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/200',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/workweek?model=indexed',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/workweek?model=indexed',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/200/custom-fields?screen=personal',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/200/screen/personal/attachments?limit=50&offset=0',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/holidays?fromDate=2025-01-01&toDate=2025-12-31',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/holidays?fromDate=2025-01-01&toDate=2025-12-31',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
    }
  )

  group(
    'page_6 - https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule',
        {
          headers: {
            referer:
              'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/200',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/chunk-vendors.js?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-300.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-italic.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-600.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-700.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-800.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/bootstrap-icons.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orange.png?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/orangehrm-logo.png?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/employment-statuses?limit=0',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=0',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?nameOrId=kamalani&includeEmployees=onlyCurrent',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&nameOrId=kamalani&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
    }
  )

  group(
    'page_7 - https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout',
    function () {
      response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout', {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/chunk-vendors.css?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/css/app.css?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/chunk-vendors.js?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/js/app.js?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"ZWs3TwZKMQ7IEEFBrjJOSwRM4nXcQgsOPZKkNJnMS5o="',
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-300.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-italic.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-600.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-700.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-800.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/dist/fonts/bootstrap-icons.woff2',
        {
          headers: {
            referer: '',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/images/ohrm_branding.png?v=1721393199309',
        {
          headers: {
            referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get('https://opensource-demo.orangehrmlive.com/web/images/ohrm_logo.png', {
        headers: {
          referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://opensource-demo.orangehrmlive.com/web/dist/img/blob.svg', {
        headers: {
          referer: '',
        },
      })
    }
  )

  // Automatically added sleep
  sleep(1)
}
