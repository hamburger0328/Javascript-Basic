// 배열 문제풀기
// 문제1. 주어진 배열을 가지고 다음 질문에 코드를 짜시오
let animals = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Grasshopper",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Moose",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Sandpiper",
  "Sardine",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Tiger",
  "Toad",
  "Whale",
  "Wildcat",
  "Wolf",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
];

// 어레이에 마지막 아이템 “Zebra” 제거하기
animals.pop(); //제거 된 아이템 보기
console.log(animals); // pop을 사용해서 제거된 나머지 아이템 확인

// 주어진 어레이에 “Dog” 추가하기
animals.push("Dog");
console.log(animals);

// 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
animals.push("Mosquito", "Mouse", "Mule");
console.log(animals);

// 해당 어레이에는 "Human"이 있는가?
console.log(animals.includes("Human")); // false

// 해당 어레이에는 “Cat” 이 있는가?
console.log(animals.includes("Cat")); // true

// "Red deer"을 "Deer"로 바꾸시오
console.log(animals.indexOf("Red deer")); // indexOf로 Red deer의 인덱스 확인하기
animals[77] = "Deer"; // 해당 인덱스에 Deer로 변경
console.log(animals.includes("Red deer")); // 변경되어 사라졌는지 확인
console.log(animals.includes("Deer")); // 잘 변경되었는지 확인

// "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
console.log(animals.indexOf("Spider")); // Spider가 몇번째에 있는지 확인
animals.splice(81, 3); // 문제는 "기존 배열"에서 Spider를 기준으로 3개가 제거되어야 함으로 splice를 사용
console.log(animals);

// "Tiger"이후의 값을 제거하시오
console.log(animals.indexOf("Tiger")); // Tiger가 몇번째에 있는지 확인
animals.slice(84); // slice사용하면 배열의 아이템은 12개가 잘렸다
console.log(animals); // 하지만 다시 console로 찍어보면 배열은 96으로 변경되지 않는다.
/* 즉 slice는 기존의 배열을 건드리지 않는다.(새로 생성된 배열!)
그러나 splice는 배열이 잘리기 때문에 두개의 큰 차이점을 잘 이해하고 사용해야 한다. */

// "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
console.log(animals.indexOf("Baboon")); // 8번째
console.log(animals.indexOf("Bison")); // 15번째
let bAnimals = animals.slice(8, 16);
console.log(bAnimals);
