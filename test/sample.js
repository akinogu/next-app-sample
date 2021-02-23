const puppeteer = require('puppeteer')
const assert = require('assert')

//待機
async function sleep(delay) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

(async () => {
  //ブラウザを定義(headless:false ブラウザを表示する, true 表示しない)
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  //ブラウザのサイズを定義
  await page.setViewport({width: 1240, height:1080})
  await page.goto('https://objective-lichterman-6eba70.netlify.app/')

  await page.type('#lastName', '山田')
  await page.type('#firstName', '太郎')
  await page.click('[data-test="nextButton"]')

  await sleep(2000)

  await page.type('#age', '33')
  await page.click('[data-test="nextButton"]')

  await sleep(2000)

  await page.type('#prefecture', '東京都')
  await page.type('#area', '渋谷区')
  await page.click('[data-test="nextButton"]')

  await sleep(2000)

  const message = await page.$eval('[data-test="message"]', item => item.textContent)
  assert.strictEqual(message, '登録完了')

  // pageを閉じる
  await page.close()
  //ブラウザを閉じる
  await browser.close()
})()