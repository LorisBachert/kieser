export interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
}

export interface SpeechRecognitionAlternative {
  confidence: number;
  transcript: string;
}

export interface SpeechRecognitionResult extends Array<SpeechRecognitionAlternative> {
  length: number;
  isFinal: boolean;
}

export interface SpeechRecognitionResultList extends Array<SpeechRecognitionResult> {
  length: number;
}
