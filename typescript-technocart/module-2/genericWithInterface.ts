{
  // generic with interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      modal: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type samsungWatch = { brand: string; model: string; display: string };
  const poorDeveloper: Developer<samsungWatch> = {
    name: "manik",
    computer: {
      brand: "amd",
      modal: "dkjdk",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "samsung",
      model: "112cc",
      display: "emmulate",
    },
  };

  //

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface bike {
    modal: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<AppleWatch, bike> = {
    name: "manik",
    computer: {
      brand: "mec",
      modal: "dkjdk",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "apple",
      model: "112cc",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      modal: "yeamaha",
      engineCapacity: "kdjkdj",
    },
  };
}
