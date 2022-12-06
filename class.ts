class First {
  first: any;
  constructor(first: any) {
    this.first = first;
  }
}
/**
 *  ? First class
 *  * First 생성자함수는 일반적인 형태로 특수한 함수 constructor() 함수의 매개변수를 통해
 *  * "호출할 때 주어진 값으로 인스턴스(객체)를 만들겠다."라는 취지가 저변에 깔려있습니다.
 * * 따라서 반드시 '쥐어줄 값'을 매개변수 인자(argument)형태로 값을 작성합니다.
 *  * '호출'과 동시에 '할당'이 아래의 new First() 형태입니다.
 *  * class 작성부는 '선언부'에 해당합니다.
 *  * 이렇게 처리했을 때 "원하는 값"을 유연하게 구성된 인스턴스를 찍어낼 수 있는 형태가 됩니다.
 */
const firstCall = new First("생성자함수, class의 기본적인 형태입니다.");
console.log(firstCall.first);
console.log(firstCall instanceof First);

class Second {
  static staticObject = "정적방식의 클래스 주요기능 static 키워드 입니다.";
}

/**
 *  ? Second class
 *  * Second 클래스는 특이하게 constructor() 함수가 존재하지 않습니다.
 *  * 하지만 정상작동 하는데, 바로 static(정적으로 처리) 키워드 때문에 가능해집니다.
 *  * 아래의 Third 클래스는 static 키워드 없이 키와 값을 할당했지만
 *  * 콘솔로 확인해보면 undefined를 리턴하는 것을 확인할 수 있습니다.
 *
 *  ? Second class의 특이한 점
 *  * 바로 별다른 호출이나 할당을 하지 않았다는 점입니다.
 *  * 선언하자마자 바로 사용할 수 있는 마치 변수와도 같습니다.
 *  * 변수와의 결정적인 차이점은 class 자체는
 *  * 명시적으로 객체의 형식, 규격의 형식, 정규화(normalize)형식을 따른다는 점입니다.
 *  * 변수나 상수는 값을 변형시킬 수 있는 여지를 얼마간 남겨놓는다면,
 *  * 클래스는 정해두는 편에 가깝습니다. 즉 조건을 만드는 경향이 강하고
 *  * 조건이 까다로울수록 "안정성"과 함께 비례합니다.
 *  * 볼륨이 큰 서비스를 제작할 때 객체지향방식으로
 *  * 소프트웨어를 제작하는 가장 중요한 장점이라고 할 수 있습니다.
 *  * "사람이 처음 작성하기는 불편하지만 미리 안정성을 챙길 수 있어 사고를 예방한다."
 */

class Third {
  test = "test";
}
// const SecondCall = new Second();
// console.log("Second 값 :", SecondCall.staticObject); // error
const ThirdCall = new Third();
console.log("Third 값 :", ThirdCall.test);

console.log("Second 값 :", Second.staticObject);
// console.log("Third 값 :", Third.test); // undefined
