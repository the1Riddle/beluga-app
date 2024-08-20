<template>
  <div class="leaderboard">
    <h1>Leaderboard</h1>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>100</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Doe</td>
          <td>90</td>
        </tr>
        <tr>
          <td>3</td>
          <td>John Smith</td>
          <td>80</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
/**
.common-4, .income-display-t-1, .navigation-menu-t-tab, .navigation-menu-t-franz {
    display: flex;
flex-direction: column;
justify-content: center;
  }

.common-5, .income-display-t-r1, .navigation-menu-t-r2 {
    display: flex;
flex-direction: column;
align-items: center;
  }

.common-6, .i-phone-1415pro-max-t-rectangle-7trectangle, .i-phone-1415pro-max-trtrr, .income-display-ttrt, .navigation-menu-ttr {
    display: flex;
justify-content: center;
align-items: center;
  }

.common-7, .i-phone-1415pro-max-tr, .navigation-menu-t-rectangle-1 {
    display: flex;
justify-content: flex-end;
align-items: center;
  }

.common-8, .i-phone-1415pro-max-tt, .navigation-menu-t-rectangle-5rectangle-2trectangle {
    display: flex;
justify-content: center;
  }

.common-9, .i-phone-1415pro-max-t, .i-phone-1415pro-max-tt-rectangle-7trectangle, .income-display-income {
    display: flex;
align-items: center;
  }

.common-10, .i-phone-1415pro-max-t-rectangle, .i-phone-1415pro-max-ttrtrr {
    display: flex;
align-items: flex-end;
  }

.common-11, .navigation-menu-rectangle-4, .home-button-rectangle-5 {
    flex-direction: column;
justify-content: center;
  }

.common-12, .i-phone-1415pro-max-i-phone-1415pro-max, .navigation-menu-rectangle-2 {
    flex-direction: column;
align-items: center;
  }

.common-13, .i-phone-1415pro-max-rectangle, .income-display-rectangle-1, .navigation-menu-rectangle-3 {
    justify-content: center;
align-items: center;
  }

.common-3, .navigation-menu-bag, .navigation-menu-franz {
    font-size: 15px;
text-align: center;
  }

.common-1, .i-phone-1415pro-max-wrapper, .i-phone-1415pro-max-i-phone-1415pro-max {
    display: flex;
width: 100%;
  }

.common-2, .i-phone-1415pro-max-rectangle, .income-display-rectangle-1, .navigation-menu-rectangle-2, .navigation-menu-rectangle-3, .navigation-menu-rectangle-4, .home-button-rectangle-5 {
    display: flex;
background-color: gainsboro;
  }

.i-phone-1415pro-max-wrapper {
    align-items: flex-start;
  }

.i-phone-1415pro-max-i-phone-1415pro-max {
    overflow: clip;
background-color: white;
row-gap: 64px;
padding-bottom: 57px;
padding-top: 31px;
height: 100%;
font-family: Inter, ui-sans-serif, system-ui, sans-serif;
line-height: normal;
letter-spacing: 0em;
flex-shrink: 0;
  }

.i-phone-1415pro-max-tt {
    align-items: flex-end;
align-self: stretch;
padding-top: 14px;
  }

.i-phone-1415pro-max-t {
    padding-right: 23px;
  }

.i-phone-1415pro-max-dolphin-container {
    width: 320px;
height: 303px;
  }

.i-phone-1415pro-max-navigation-menu {
    width: 503px;
  }

.i-phone-1415pro-max-tt-rectangle-7trectangle {
    padding-left: 29px;
padding-right: 44px;
align-self: stretch;
  }

.i-phone-1415pro-max-t-rectangle-7trectangle {
    flex-grow: 1;
z-index: 0;
  }

.i-phone-1415pro-max-t-rectangle {
    flex-direction: column;
width: 297px;
padding-top: 1px;
z-index: 1;
flex-shrink: 0;
  }

.i-phone-1415pro-max-rectangle {
    border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
width: 329px;
padding-bottom: 3px;
padding-left: 26px;
padding-right: 26px;
padding-top: 3px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
  }

.i-phone-1415pro-max-ttrtrr {
    padding-left: 32px;
padding-top: 7px;
justify-content: flex-end;
  }

.i-phone-1415pro-max-trtrr {
    column-gap: 24px;
  }

.i-phone-1415pro-max-r {
    object-fit: cover;
object-position: center;
width: 63px;
height: 63px;
flex-shrink: 0;
  }

.i-phone-1415pro-max-tr {
    padding-left: 5px;
  }

.i-phone-1415pro-max-r-1 {
    object-fit: cover;
object-position: center;
width: 70px;
height: 63px;
flex-shrink: 0;
  }

.i-phone-1415pro-max-r-2 {
    object-fit: cover;
object-position: center;
width: 59px;
height: 63px;
flex-shrink: 0;
  }

.income-display-rectangle-1 {
    border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
row-gap: 15px;
column-gap: 157px;
padding-bottom: 8px;
padding-left: 18px;
padding-right: 16px;
padding-top: 8px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
flex-wrap: wrap;
font-size: 24px;
text-align: left;
  }

.income-display-income {
    width: 115px;
flex-shrink: 0;
  }

.income-display-ttrt {
    z-index: 0;
  }

.income-display-t-r1 {
    width: 48px;
height: 48px;
padding-top: 1px;
z-index: 2;
flex-shrink: 0;
  }

.income-display-r-4 {
    width: 48px;
height: 47px;
flex-shrink: 0;
  }

.income-display-t-1 {
    width: 76px;
max-width: 76px;
z-index: 1;
flex-shrink: 0;
  }

.income-display-component-1 {
    text-align: center;
  }

.dolphin-container-component-2 {
    text-align: left;
  }

.navigation-menu-t-rectangle-5rectangle-2trectangle {
    align-items: flex-start;
row-gap: 34px;
column-gap: 37px;
padding-top: 10px;
flex-wrap: wrap;
text-align: center;
  }

.navigation-menu-rectangle-2 {
    border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
padding-bottom: 9px;
padding-left: 23px;
padding-right: 14px;
padding-top: 4px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
  }

.navigation-menu-r-5 {
    object-fit: cover;
object-position: center;
width: 60px;
height: 36px;
text-align: center;
flex-shrink: 0;
  }

.navigation-menu-bag {
    width: 50px;
  }

.navigation-menu-rectangle-3 {
    border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
padding-bottom: 9px;
padding-left: 71px;
padding-right: 70px;
padding-top: 9px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
  }

.navigation-menu-t-tab {
    flex-grow: 1;
max-width: 127px;
padding-top: 11px;
text-align: center;
  }

.navigation-menu-tab {
    font-size: 24px;
  }

.navigation-menu-t-rectangle-1 {
    padding-left: 4px;
  }

.navigation-menu-rectangle-4 {
    border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
align-items: center;
padding-bottom: 2px;
padding-left: 7px;
padding-right: 20px;
padding-top: 4px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
z-index: 0;
text-align: center;
  }

.navigation-menu-ttr {
    z-index: 2;
  }

.navigation-menu-t-r2 {
    padding-right: 2px;
text-align: center;
  }

.navigation-menu-r-6 {
    object-fit: cover;
object-position: center;
width: 50px;
height: 39px;
flex-shrink: 0;
  }

.navigation-menu-t-franz {
    align-self: stretch;
height: 23px;
max-width: 66px;
z-index: 1;
flex-shrink: 0;
  }

.navigation-menu-franz {
    margin-bottom: -2px;
  }

.home-button-rectangle-5 {
    border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;
padding-bottom: 24px;
padding-left: 19px;
padding-right: 19px;
padding-top: 24px;
border-top-left-radius: 40px;
border-top-right-radius: 40px;
z-index: 2;
text-align: left;
  }

.home-button-t-home {
    max-width: 95px;
padding-left: 6px;
padding-top: 17px;
  }

.home-button-home {
    font-size: 24px;
  }
  **/
  .leaderboard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    height: 100%;
  }
</style>
