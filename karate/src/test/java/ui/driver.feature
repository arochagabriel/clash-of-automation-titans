Feature: driver

  Scenario:
    #created and save in the memory the elements
    * call read ('classpath:ui/locators.json')
    * configure driver = { type: 'chrome', showDriverLog: true, showProcessLog: false, showBrowserLog:false, headless: false, start:true, timeout:50000}
    * driver 'https://demo.opencart.com/'
    * fullscreen()
    * retry().waitUntil("document.readyState == 'complete'")