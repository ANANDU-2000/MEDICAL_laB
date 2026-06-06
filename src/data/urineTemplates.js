export const DEFAULT_DROPDOWN_OPTIONS = 'Negative\nPositive';

export const REPORT_TEST_TEMPLATES = [
  {
    label: 'Urine colour',
    displayName: 'COLOUR',
    sectionName: 'PHYSICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'text',
    method: '',
    bioReference: 'Pale Yellow',
    resultOptions: '',
    referenceMode: 'text'
  },
  {
    label: 'Urine appearance',
    displayName: 'APPEARENCE',
    sectionName: 'PHYSICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'text',
    method: '',
    bioReference: 'Clear',
    resultOptions: '',
    referenceMode: 'text'
  },
  {
    label: 'Urine reaction',
    displayName: 'REACTION',
    sectionName: 'CHEMICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'text',
    method: '',
    bioReference: 'Acidic',
    resultOptions: '',
    referenceMode: 'text'
  },
  {
    label: 'Albumin urine',
    displayName: 'ALBUMIN',
    sectionName: 'CHEMICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'select',
    method: 'Protein Error principle using tetrabromophenol blue',
    bioReference: '- : Negative\n+/- : Positive (15 mg/dL)\n+ : Positive (30 mg/dL)\n++ : Positive (100 mg/dL)\n+++ : Positive (300 mg/dL)',
    resultOptions: DEFAULT_DROPDOWN_OPTIONS,
    referenceMode: 'custom'
  },
  {
    label: 'Sugar urine',
    displayName: 'SUGAR',
    sectionName: 'CHEMICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'select',
    method: 'Glucose oxidase - peroxidase method',
    bioReference: '- : Negative\n+/- : Positive (100 mg/dL)\n+ : Positive (250 mg/dL)\n++ : Positive (500 mg/dL)\n+++ : Positive (1000 mg/dL)',
    resultOptions: DEFAULT_DROPDOWN_OPTIONS,
    referenceMode: 'custom'
  },
  {
    label: 'Specific gravity',
    displayName: 'SPECIFIC GRAVITY',
    sectionName: 'CHEMICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'number',
    method: 'Based on pKa change of pretreated polyelectrolytes',
    bioReference: '1.000 - 1.030',
    resultOptions: '',
    referenceMode: 'custom'
  },
  {
    label: 'Urine pH',
    displayName: 'URINE PH',
    sectionName: 'CHEMICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'number',
    method: 'Using pH indicators',
    bioReference: '5.0 - 9.0',
    resultOptions: '',
    referenceMode: 'custom'
  },
  {
    label: 'Urobilinogen',
    displayName: 'UROBILINOGEN',
    sectionName: 'CHEMICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'select',
    method: 'Ehrlich Reaction',
    bioReference: '- : Negative\n+/- : Positive (1 mg/dL)\n+ : Positive (2 mg/dL)\n++ : Positive (4 mg/dL)\n+++ : Positive (8 mg/dL)\n++++ : Positive (12 mg/dL)',
    resultOptions: DEFAULT_DROPDOWN_OPTIONS,
    referenceMode: 'custom'
  },
  {
    label: 'Acetone urine',
    displayName: 'ACETONE URINE',
    sectionName: 'CHEMICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'select',
    method: 'Nitroprusside Reaction',
    bioReference: '- : Negative\n+/- : Positive (5 mg/dL)\n+ : Positive (15 mg/dL)\n++ : Positive (40 mg/dL)\n+++ : Positive (80 mg/dL)',
    resultOptions: DEFAULT_DROPDOWN_OPTIONS,
    referenceMode: 'custom'
  },
  {
    label: 'Bilirubin urine',
    displayName: 'BILIRUBIN URINE',
    sectionName: 'CHEMICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'select',
    method: 'Azo coupling reaction with diazonium salt',
    bioReference: '- : Negative\n+ : Positive (1 mg/dL)\n++ : Positive (2 mg/dL)\n+++ : Positive (4 mg/dL)',
    resultOptions: DEFAULT_DROPDOWN_OPTIONS,
    referenceMode: 'custom'
  },
  {
    label: 'Nitrites',
    displayName: 'NITRITES',
    sectionName: 'CHEMICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'select',
    method: 'Griess Reaction',
    bioReference: 'Negative / Positive',
    resultOptions: DEFAULT_DROPDOWN_OPTIONS,
    referenceMode: 'text'
  },
  {
    label: 'Blood urine',
    displayName: 'BLOOD - URINE',
    sectionName: 'CHEMICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'select',
    method: 'Peroxidase activity of haemoglobin/Manual microscopy',
    bioReference: 'Negative / Positive',
    resultOptions: DEFAULT_DROPDOWN_OPTIONS,
    referenceMode: 'text'
  },
  {
    label: 'Leucocyte',
    displayName: 'LEUCOCYTE',
    sectionName: 'CHEMICAL EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'select',
    method: 'Detection of Leukocyte Esterase',
    bioReference: '- : Negative\n+/- : Positive (15 Leu/uL)\n+ : Positive (70 Leu/uL)\n++ : Positive (125 Leu/uL)\n+++ : Positive (500 Leu/uL)',
    resultOptions: DEFAULT_DROPDOWN_OPTIONS,
    referenceMode: 'custom'
  },
  {
    label: 'Pus cells',
    displayName: 'PUS CELLS',
    sectionName: 'MICROSCOPIC EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'text',
    method: 'Manual Microscopy',
    bioReference: '- : Negative\n+/- : 15 Leu/uL\n+ : 70 Leu/uL\n++ : 125 Leu/uL\n+++ : 500 Leu/uL',
    resultOptions: '',
    referenceMode: 'custom'
  },
  {
    label: 'RBC cells',
    displayName: 'RBC CELLS',
    sectionName: 'MICROSCOPIC EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'text',
    method: 'Manual Microscopy',
    bioReference: '- : Negative\n+/- : 10 Ery/uL\n+ : 25 Ery/uL\n++ : 80 Ery/uL\n+++ : 200 Ery/uL',
    resultOptions: '',
    referenceMode: 'custom'
  },
  {
    label: 'Epithelial cells',
    displayName: 'EPITHELIAL CELLS',
    sectionName: 'MICROSCOPIC EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'text',
    method: 'Manual Microscopy',
    bioReference: '0-2 /HPF',
    resultOptions: '',
    referenceMode: 'text'
  },
  {
    label: 'Casts / crystals / bacteria',
    displayName: 'CAST CELLS',
    sectionName: 'MICROSCOPIC EXAMINATION, URINE',
    sampleType: 'URINE',
    inputType: 'select',
    method: 'Manual Microscopy',
    bioReference: 'Not Seen /HPF',
    resultOptions: 'Not seen\nSeen',
    referenceMode: 'text'
  }
];
