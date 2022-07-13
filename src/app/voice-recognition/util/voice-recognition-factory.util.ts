interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
  SpeechSynthesisUtterance: any;
  webkitSpeechGrammarList: any;
}

const speechWindow = (window as unknown) as IWindow;
const webkitSpeechRecognition = speechWindow.webkitSpeechRecognition;

export const createVoiceRecognition: (language: string) => SpeechRecognition = (language: string) => {
  const recognizer = new webkitSpeechRecognition();
  recognizer.continuous = true;
  recognizer.lang = language;
  recognizer.maxAlternatives = 5;
  return recognizer;
}
