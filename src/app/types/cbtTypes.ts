export type ConfigType = {
  degree?: string;
  level?: string;
  subject?: string;
};

export type ExamsType = {
  PLAB: ["PLAB 1", "PLAB 2"];
  USMLE: ["USMLE step 1", "USMLE step 2", "USMLE step 3"];
  MBBS: {
    "2nd MBBS": {
      Anatomy: ["Test", "Mock", "Exam"];
      Biochemistry: ["Test", "Mock", "Exam"];
      Physiology: ["Test", "Mock", "Exam"];
    };
    "3rd MBBS": {
      Pathology: {
        "Morbid Anatomy": ["Test", "Mock", "Exam"];
        "Chemical Pathology": ["Test", "Mock", "Exam"];
        Microbiology: ["Test", "Mock", "Exam"];
        Hematology: ["Test", "Mock", "Exam"];
      };
      Pharmacology: ["Test", "Mock", "Exam"];
    };
    "4th MBBS": {
      Paediatrics: ["Test", "Mock", "Exam"];
      "Obstetrics and Gynecology": ["Test", "Mock", "Exam"];
    };
    "5th MBBS": {
      Medicine: ["Test", "Mock", "Exam"];
      Surgery: ["Test", "Mock", "Exam"];
    };
  };
};
