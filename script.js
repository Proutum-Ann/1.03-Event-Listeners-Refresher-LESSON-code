// Helper function: replaces content inside #out
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* -------------------------------
   Demo 1: Click (counter)
-------------------------------- */
let clickCount = 0

document.getElementById('btnClick').addEventListener('click', () => {
   clickCount++

   render(`<p>You clicked <b>${clickCount}</b> times on the button.</p>`)
})

/* --------------------------------------
   Demo 2: Double-click (toggle highlight)
--------------------------------------- */
const dblCard = document.getElementById('dblCard')

dblCard.addEventListener('dblclick', () => {

   dblCard.classList.toggle('activated')
   const state = dblCard.classList.contains('activated') ? 'ON' : 'OFF'
   render(`<p>Double-click highlight is <b>${state}</b>.</p>`)

})

/* --------------------------------
   Demo 3: Keypress (show key/code)
--------------------------------- */
const kbKey = document.getElementById('kbKey')
const kbCode = document.getElementById('kbCode')

document.addEventListener('keydown', e => {
   kbKey.textContent = e.key === ' ' ? '(space)' : e.key
   kbCode.textContent = e.code
})

/* ----------------------------------------
   Demo 4: Show Time (12-hour format + day)
----------------------------------------- */
document.getElementById('btnTime').addEventListener('click', () => {
   var hour = new Date().getHours()
   var min = new Date().getMinutes()
   var sec = new Date().getSeconds()
   var month = new Date().getMonth() + 1
   var day = new Date().getDate()
   var year = new Date().getFullYear()

   let monthName = ' '

   const getMonth = (month) => {
      if (month === 1) {
         monthName = 'January'
      } else if (month === 2) {
         monthName = 'February'
      } else if (month === 3) {
         monthName = 'March'
      } else if (month === 4) {
         monthName = 'April'
      } else if (month === 5) {
         monthName = 'May'
      } else if (month === 6) {
         monthName = 'June'
      } else if (month === 7) {
         monthName = 'July'
      } else if (month === 8) {
         monthName = 'August'
      } else if (month === 9) {
         monthName = 'September'
      } else if (month === 10) {
         monthName = 'October'
      } else if (month === 11) {
         monthName = 'November'
      } else if (month === 12) {
         monthName = 'December'
      }
   }

   console.log(getMonth(month))

   var dateNow = [monthName] + ' ' + [day] + ', ' + [year]

   let msg = ''

   if(hour < 12) {
      msg = "Top o' the morning to ya!"
   } else if (12 < hour < 18) {
      msg = "Good Afternoon!"
   } else {
      msg = 'Good Evening.'
   }

   render(`<p>${msg} It is currently ${hour}:${min}:${sec} on ${dateNow}</p>`)
})

/* -------------------------
   Utility: Clear output
-------------------------- */
document.getElementById('btnClear').addEventListener('click', () => {
   clickCount = 0
   render('<span class="text-secondary">Output cleared.</span>')
})

/* =================================================
   🔥 Event Listeners Challenge (Pick ONE to complete)

   Option A — Hover Highlight + Counter
   - Create a variable to track how many times the card was hovered
   - Add event listeners for mouseenter and mouseleave on the card
   - On mouseenter: add a highlight class, increase the counter, and show the count in #out
   - On mouseleave: remove the highlight class and show a message in #out

   Option B — Scroll Progress Bar
   - Add a small Bootstrap progress bar element at the very top of the page
   - Select the inner bar element
   - Write a function that calculates % scrolled
     (current scroll position ÷ total scrollable height)
   - Update the width of the bar with that percentage
   - Run this function when the page loads and on every scroll event

   Option C — Live Input Mirror
   - Add a text input element to the page
   - On every keystroke: update #out with a message that includes the input value
   - If the input is empty: show a neutral placeholder message instead
   - On focus: add a border/shadow class to the input
   - On blur: remove those classes and make sure #out shows the right message
================================================== */

window.addEventListener('scroll', () => {
   const progBar = document.getElementById('progBar')

   const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
   const currentProg = document.documentElement.scrollHeight - document.documentElement.clientHeight

   progBar.style.width = (scrollTop / currentProg) * 100 + '%'
})