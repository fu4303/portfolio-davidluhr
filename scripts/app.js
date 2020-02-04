const DOMApp = document.querySelector('#app')
const DOMThemeToggle = document.querySelector('[data-theme-toggle]')
const DOMThemeToggleMoonIcon = document.querySelector('[data-theme-toggle-moon]')
const DOMThemeToggleSunIcon = document.querySelector('[data-theme-toggle-sun]')
const DOMThemeToggleText = document.querySelector('[data-theme-toggle-text]')

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
}

const showEnableDarkThemeButton = () => {
  DOMThemeToggleSunIcon.setAttribute('hidden', '')
  DOMThemeToggleMoonIcon.removeAttribute('hidden')
  DOMThemeToggleText.textContent = 'Enable dark theme'
}

const showEnableLightThemeButton = () => {
  DOMThemeToggleMoonIcon.setAttribute('hidden', '')
  DOMThemeToggleSunIcon.removeAttribute('hidden')
  DOMThemeToggleText.textContent = 'Enable light theme'
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  themeToggleMachine.initial = 'dark'
  showEnableLightThemeButton()
} else {
  themeToggleMachine.initial = 'light'
  showEnableDarkThemeButton()
}

DOMApp.dataset.theme = themeToggleMachine.initial
let currentState = themeToggleMachine.initial

const transition = (state, event) => {
  return themeToggleMachine.states[state].on[event] || state
}

const send = event => {
  currentState = transition(currentState, event)
  DOMApp.setAttribute('data-theme', currentState)
  completeToggleActions(currentState)
}

const completeToggleActions = currentState => {
  switch (currentState) {
    case 'light':
      showEnableDarkThemeButton()
      break
    case 'dark':
      showEnableLightThemeButton()
      break
    default:
      break
  }
}

DOMThemeToggle.addEventListener('click', () => send('TOGGLE'))
