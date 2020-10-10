const DOMApp = document.querySelector('#app');
const DOMThemeToggle = document.querySelector('[data-theme-toggle]');
const DOMThemeToggleMoonIcon = document.querySelector('[data-theme-toggle-moon]');
const DOMThemeToggleSunIcon = document.querySelector('[data-theme-toggle-sun]');
const DOMThemeToggleText = document.querySelector('[data-theme-toggle-text]');

DOMApp.removeAttribute('data-noscript')
DOMThemeToggle.removeAttribute('hidden')

const themeToggleMachine = {
  initial: '',
  states: {
    light: {
      on: {
        TOGGLE: 'dark'
      }
    },
    dark: {
      on: {
        TOGGLE: 'light'
      }
    },
  },
};

function showEnableDarkThemeButton() {
  DOMThemeToggleSunIcon.setAttribute('hidden', '')
  DOMThemeToggleMoonIcon.removeAttribute('hidden')
  DOMThemeToggleText.textContent = 'Enable dark theme'
}

function showEnableLightThemeButton() {
  DOMThemeToggleMoonIcon.setAttribute('hidden', '')
  DOMThemeToggleSunIcon.removeAttribute('hidden')
  DOMThemeToggleText.textContent = 'Enable light theme'
}

function checkStoredThemePreference() {
  if (localStorage.getItem('theme')) {
    themeToggleMachine.initial = localStorage.getItem('theme')
    setThemeBasedOnLocalStorage(themeToggleMachine.initial)
  } else {
    setThemeBasedOnOSPreference()
  }
}

function setThemeBasedOnLocalStorage(initialState) {
  if (initialState === 'dark') {
    showEnableLightThemeButton()
  } else {
    showEnableDarkThemeButton()
  }
}

function storeThemePreference(themePreference) {
  localStorage.setItem('theme', themePreference)
}

function setThemeBasedOnOSPreference() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeToggleMachine.initial = 'dark'
    storeThemePreference('dark')
    showEnableLightThemeButton()
  } else {
    themeToggleMachine.initial = 'light'
    storeThemePreference('light')
    showEnableDarkThemeButton()
  }
}

function transition(state, event) {
  return themeToggleMachine.states[state].on[event] || state
}

function send(event) {
  currentState = transition(currentState, event)
  DOMApp.setAttribute('data-theme', currentState)
  completeToggleActions(currentState)
}

function completeToggleActions(currentState) {
  switch (currentState) {
    case 'light':
      showEnableDarkThemeButton()
      storeThemePreference('light')
      break
    case 'dark':
      showEnableLightThemeButton()
      storeThemePreference('dark')
      break
    default:
      break
  }
}

checkStoredThemePreference();

DOMApp.dataset.theme = themeToggleMachine.initial;
let currentState = themeToggleMachine.initial;

DOMThemeToggle.addEventListener('click', () => send('TOGGLE'));
