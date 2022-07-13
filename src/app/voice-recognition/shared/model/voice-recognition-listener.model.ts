export interface VoiceRecognitionListener {
  onVoiceRecognition(command: SpeechRecognitionAlternative): void;
}
