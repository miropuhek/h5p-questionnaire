import './styles/required-message.css';

export default class RequiredMessage extends H5P.EventDispatcher {
  constructor(message) {
    super();

    this.requiredElement = document.createElement('div');
    const requiredMessage = document.createElement('div');
    const exitButton = document.createElement('button');

    this.requiredElement.classList.add('h5p-questionnaire-choice-required', 'hide');
    requiredMessage.className = 'h5p-questionnaire-choice-required-message';
    exitButton.className = 'h5p-questionnaire-choice-required-exit';

    requiredMessage.textContent = message;

    exitButton.addEventListener('click', () => {
      this.hideMessage();
    });

    this.on('hideMessage', () => {
      this.hideMessage();
    });

    this.on('showMessage', () => {
      this.showMessage();
    });

    this.requiredElement.appendChild(requiredMessage);
    this.requiredElement.appendChild(exitButton);
  }

  showMessage() {
    this.requiredElement.classList.remove('hide');
  }

  hideMessage() {
    this.requiredElement.classList.add('hide');
  }

  attachTo(element) {
    element.appendChild(this.requiredElement);
  }
}
