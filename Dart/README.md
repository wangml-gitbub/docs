# dart

## dart 速查表

### 字符串插值: 将表达式放在字符串中，使用 ${expression}，如果表达式为单个标识，可省略 {}

```text
${3 + 2} // 5
${'hello'.toupperCase()} // 'HELLO'
$myObject // myObject.toString() 的值
```

### 可空的变量：通过在类型后面加 ? 来表示该类型可空

```text
String? name = 'Jane';
String? address;

void main () {
  try {
    if(name == 'Jane' && address == null) {
      name = null;
      print('success!');
    } else {
      print('not quite right,try again!');
    }
  } catch(e) {
    print('Exception: ${e.runtimeType}');
  }
}
```

### 避空运算符：当变量为空值时才为其赋值

```text
int? a;
a ??= 3
print(a) // 3

a ??= 5;
print(a) // 3

print(1 ?? 3) // 1
print(null ?? 12) // 12

String? foo = 'a stirng'
String? bar; //null
String? baz = foo ?? bar;
void updateSomeVars() {
  bar ??= 'a string'
}
void main() {
  try {
    updateSomeVars();
    if(foo != 'a string') {
      print('looks like foo somehow ended up with the wrong value.');
    } else if (bar != 'a string') {
      print('looks like bar ended up with the wrong value');
    } else if (baz != 'a string') {
      print('looks like baz ended up with the wrong value');
    } else {
      print('success');
    }
  } catch(e) {
    print('Exception: ${e.runtimeType}');
  }
}
```

### 条件属性访问：为了保护可能为空的属性的正常访问，可以使用点(.) 之前加一个问号（?）.可以在一个表达式中连续使用多个 ?.

- 如： myObject?.someProperty ，相当于 (myObject != null) ? myObject.someProperty : null
- 如： myObject?.someProperty ?.someMethod() , 如果 myObject 或 myObject.someProperty 为空，则前面的代码返回 null（并不再调用 someMethod）

```text
String? upperCaseIt(String? str) {
  return str?.toUpperCase();
}
void main() {
  try {
    String? one = upperCaseIt(null);
      if (one !== null) {
      print('Looks like you\'re not returning null for null inputs.');
    } else {
      print('Success when str is null!');
    }
  }.catch(e) {
    print('Tried calling upperCaseIt(null) and got an exception: \n ${e.runtimeType}.');
  }

try {
  String? two = upperCaseIt('a string');
  if (two == null) {
    print('Looks like you\'re returning null even when str has a value.');
  } else if (two != 'A STRING') {
    print('Tried upperCaseIt(\'a string\'), but didn\'t get \'A STRING\' in response.');
  } else {
    print('Success when str is not null!');
  }
  } catch (e) {
    print('Tried calling upperCaseIt(\'a string\') and got an exception: \n ${e.runtimeType}.');
  }
}

```

### 集合字面量： Dart 内置了对 list | map | set 的支持，可通过字面量直接创建它们

```text
final aListOfStrings = ['one', 'two']; // Dart 的类型推断自动分配此变量类型为： List<String>
final aSetOfStrings = {'one', 'two'}; // Dart 的类型推断自动分配此变量类型为： Set<String>
final aMapOfStringsToInts = { // Dart 的类型推断自动分配此变量类型为： Map<String, int>
  'one': 1,
  'two': 2
}
final aListOfInts = <int>[];// 手动指定类型
final aSetOfInts = <int>{};// 手动指定类型
final aMapOfIntToDouble = <int, double>{};// 手动指定类型
final aListOfBaseType = <BaseType>[subType(), subType()]; //使用子类型的内容初始化列表，但仍希望列表为 List<BaseType>

final aListOfStrings = ['a', 'b', 'c'];
final aSetOfInts = {3, 4, 5};
final aMapOfStringsToInts = {
  'myKey' :12
};
final anEmptyListOfDouble = <double>[];
final anEmptySetOfString = <String>{};
final anEmptyMapOfDoublesToInts = <double, int>{};
```

### 箭头语法：定义函数的一种方法，使用 => 符合实现

```text
bool hasEmpty = aListOfStrings.any((s) {
  return s.isEmpty;
})
bool hasEmpty = aListOfStrings.any((s) => s.isEmpty); // 使用箭头函数简化上面函数
class MyClass {
  int value1 = 2;
  int value2 = 3;
  int value3 = 5;

  int get product => value1 * value2 * value3;

  void incrementValue1() => value1++;

  String joinWithCommas(List<String> strings) => strings.join(',')
}
```

### 级联：要对同一对象执行一系列操作

```text
myObject.someMethod() // 结果为：someMethod 的返回值
myObject..someMethod() // myObject 的引用

var button = querySelector('#confirm');
button?.text = 'Confirm';
button?.classes.add('important');
button?.onClick.listen((e) => window.alert('Confirmed!'));
button?.scrollIntoView();

// 使用级联方式改写，省略声明 button 变量
querySelector('#confirm')?..text = 'Confirm'
..classes.add('important')
..onClick.listen((e) => window.alert('Confirmed!'))
..scrollIntoView();



class BigObject {
  int anInt = 0;
  String aString = '';
  List<double> aList = [];
  bool _done = false;

  vod allDone() {
    _done = true;
  }
}
BigObject fillBigObject(BigObject obj) {
  return (
    obj..antInt = 1
    ..aString = 'String'
    ..aList = [3.0]
    ..allDone();
  )
}
```

### Getters & setters: 任何需要对属性进行更多空值而不是允许简单字段访问的时候，就可以自定义 getter 和 setter

```text
class MyClass {
  int _aProp = 0;
  int get aProp => _aProp;

  set aProp(int value) {
    if (value >= 0) {
      _aProp = value;
    }
  }
}

class MyClass {
  final List<int> _value = [];
  void addValue(int value) {
    _value.add(value);
  }
  int get count {
    return _value.length;
  }
}

class InvalidPriceException {}

class ShoppingCart {
  List<double> _prices = []

  // _prices.fold() 叠加
  int get total => _prices.fold(0, (e, t) => e+t); 

  void set prices(List<double> value) {

    // values 每一个数值大于 0
    if (value.any((p) => p < 0)) { 
      throw InvalidPriceException()
    }

    _prices = value
  }
}

```

### 可选位置参数: 可选参数放在方法的参数列表的最后，包裹在方括号中，可提供默认值，如果不提供则默认为 null

```text
// Dart 有两种传参方法：位置参数和命名参数
int sum(int a, int b, int c) {
  return a+b+c;
}
int total = sum(1, 2, 3);
int sum1(inta, [int? b, int? c, int? d, int? e]){
  int sum = a;
  if (b != null) sum += b;
  if (c != null) sum += c;
  if (d != null) sum += d;
  if (e != null) sum += e;

  return sum;
}
int all = sum1(1, 2);
int all5 = sum1(1,2,3,4,5);

int sum2(int a, [int b = 2, int c = 3]) {
  return a+b+c;
}
int t = sum2(1);
print(t); // 6

String joinWithCommas(int a, [int? b, int? c, int? d, int? e]) {
  String s = '$a';
  if (b != null) s = '$s,$b';
  if (c != null) s = '$s,$c';
  if (d != null) s = '$s,$d';
  if (e != null) s = '$s,$e';
  return s;
}
```

### 命名参数：在参数列表的靠后位置使用花括号 {} 来定义命名参数, 除非显示使用 required 标记，否则命名参数默认是可选的

- 一个方法中不能同时使用可选位置参数和可选命名参数
- 如果一个参数的类型非空，那么必须提供一个默认值

```text
String getName(String firstName, String lastName, { String? middleName }) {
  return '$firstName ${middleName ?? ''} $lastName';
}
getName('wang', 'hao');
getName('wang', 'hao', middleName: 'zhi');
getName('wang', middleName: 'zhi', 'hao');
String getName1(String firstName, String lastName, { String middleName = '' }) {
  return '$firstName $middleName $lastName';
}


class MyDataObject {
  final int anInt;
  final Stirng aString;
  final double aDouble;

  MyDataObject({
    this.anInt = 1,
    this.aString = 'old',
    this.aDouble = 2.0
  });

  MyDataObject copyWith({ int? newInt, String? newSting, double? newDouble}) {
    return MyDataObject(
      anInt: newInt ?? this.anInt,
      aString: newString ?? this.aString,
      aDouble: newDouble ?? this.aDouble,
    )
  }
}
```

### 异常：Dart 代码可以抛出和捕获异常，所有异常都是 unchecked exception。Dart 提供了 Exception 和 Error 类型，你也可以抛出任何非空对象

- 使用 try catch 来处理异常，
- 如果无法处理异常，可使用 rethrow 关键字再次抛出异常。
- 要执行一段是否抛出异常都会执行的代码，可以使用 finally

```text
throw Exception('something bad happened');
throw 'hahhah';

try {
  breddMoreLiamas();
} on OutOfLlamasException {
  buyMoreLlamas();
} on Exception catch(e) {
  print('unknown exception: $e');
} catch (e) {
  print('something really unknoen : $e');
}

try {
  breddMoreLiamas();
} catch(e) {
  print('i was just trying to breed llamas');
  rethrow;
}

try {
  breddMoreLiamas();
} catch(e) {
  // ...
} finally {
  cleanLlamaStalls();
}
```

### 在构造方法中使用 this

```text

class MyColor {
  int red;
  int green;
  int blue;

  // 使用 this 语法向 MyClass 添加一行构造方法，并接收和分配全部（三个）属性
  MyClass(this.red, this.green, thi.blue);
}
final color = MyColor(80, 80, 120);



class MyColor1 {
  int red;
  int green;
  int blue;

  // 使用 this 语法向 MyClass 添加一行构造方法，并接收和分配全部（三个）属性
  MyClass1({ required this.red, required this.green, required this.blue}); // 命名参数
  // or
  // MyClass1({ int this.red, int this.green, int this.blue}); // 命名参数
}
final color = MyColor1(red: 80, green: 80, blue: 120);



class MyColor2 {
  int red;
  int green;
  int blue;

  // 使用 this 语法向 MyClass 添加一行构造方法，并接收和分配全部（三个）属性
  MyClass2([this.red = 0, this.green = 0, this.blue = 0]); // 可选参数，并设置默认值
  // or
  // MyClass({this.red = 0, this.green = 0, this.blue = 0}); // 可选参数，并设置默认值
}
final color = MyColor2(red: 80, green: 80, blue: 120);
```

### Initializer lists：在实现构造函数时，需要在构造函数执行之前进行一些初始化,这些都在初始化列表中实现

- 初始化列表位于构造函数的签名和它的函数体之间

```text
Point.fromJson(Map<Stirng, double> json)
  : x = json['x']!,
  y = json['y']! {
    print('In Point.fromJson(): ($x, $y)');
}

NonNegativePoint(this.x, this.y)
  :assert(x >= 0),
  assert(y >= 0) {
    print('i just made a NonNegativePoint: ($x, $y)');
}


class FirstTwoLetters {
  final String letterOne;
  final String letterTwo;

  // 使用的初始化列表将 word 的前两个字符分配给 letterOne 和 LetterTwo 属性。要获得额外的信用，请添加一个 断言 以捕获少于两个字符的单词
  FirstTwoLetters(String word)
    : assert(word.length >= 2),
      letterOne = word[0],
      letterTwo = word[1];

}

```

### 命名构造方法:允许一个类有多个构造方法

```text

class Point {
  double x, y;
  Point(this.x, this.y);

  Point.origin()
    : x = 0,
    y = 0;
}
final p = Point.origin(); // 使用命名构造方法，要使用全名调用它

class Color {
  int red;
  int green;
  int blue;

  Color(this.red, this.green, this.blue);

  // 给 Color 类添加一个叫做 Color.black 的方法，它将会把三个属性的值都设为 0。
  Color.black()
    : red=0,
    green=0,
    blue=0;
}
```

### 工厂构造方法: 使用 factory 关键字。它能够返回其子类甚至 null 对象

```text

class A1 extends A {}
class A2 extends A {}
class A {
  A();

  factory A.fromTypeNmae(String typeName) {
    if (typeName === 'A1') return A1();
    if (typeName === 'A2') return A2();
    throw ArgumentError('Unrecognized $typeName');
  }
}

class IntegerHolder {
  IntegerHolder();
  // IntegerHolder.fromList 的工厂构造方法
  // 若列表只有一个值，那么就用它来创建一个 IntegerSingle。
  // 如果这个列表有两个值，那么按其顺序创建一个 IntegerDouble。
  // 如果这个列表有三个值，那么按其顺序创建一个 IntegerTriple。
  // 否则，抛出一个 Error。
  factory IntegerHolder.fromList(List<int> list) {
    if (list.length == 1) {
      return IntegerSingle(list[0])
    }
    else if (list.length == 2) {
      return IntegerDouble(list[0], list[1]);
    }
    else if (list.length == 3) {
      return IntegerTriple(list[0], list[1], list[2]);
    }
    else {
      throw Error();
    }
  }
}
class IntegerSingle extends IntegerHolder {
  final int a;
  IntegerSingle(this.a);
}
class IntegerDouble extends IntegerHolder {
  final int a;
  final int b;
  IntegerDouble(this.a, this.b);
}
class IntegerTriple extends IntegerHolder {
  final int a;
  final int b;
  final int c;
  IntegerTriple(this.a, this.b, this.c);
}
```

### 重定向构造方法

- 有的时候，一个构造方法仅仅用来重定向到该类的另一个构造方法
- 重定向方法没有主体，它在冒号（:）之后调用另一个构造方法

```text
class Automobile {
  String make;
  String model;
  int mpg;

  Automobile(this.make, this.model, this.mpg); // 构造方法

  // 重定向到主构造方法
  Automobile.hybrid(String make, String mode) : this(make, model, 60);


  // 重定向到命名构造方法 Automobile.hybrid
  Automobile.fancyHybride() : this.hybrid('Futurecar', 'Mark 2');

}




class Color {
  int red;
  int green;
  int blue;
  
  Color(this.red, this.green, this.blue); // 构造方法

  // 创建一个叫做 black 的命名构造方法，但这次我们不要手动分配属性，而是将 0 作为参数，重定向到默认的构造方法
  Color.black() : this(0, 0, 0);
}
```

### Const 构造方法

- 如果你的类生成的对象永远不会更改，则可以让这些对象称为编译时常量
- 使用 const 构造方法并确保所有实例变量都是 final 的

```text
class A {
  static const A a = A(0, 0);

  final int x;
  final int y;

  const A(this.x, this.y);
}


// 修改 Recipe 类，使其实例成为常量，并创建一个执行以下操作的常量构造方法：
// 该方法有三个参数：ingredients、calories 和 milligramsOfSodium。（按照此顺序）
// 使用 this 语法自动将参数值分配给同名的对象属性。
// 在 Recipe 的构造方法声明之前，用 const 关键字使其成为常量。
class Recipe {
  final List<String> ingredients;
  final int calories;
  final double milligramsOfSodium;

  // Create a const constructor here
  const Recipe(this.ingredients, this.calories,this.milligramsOfSodium);
}
```

## 可迭代集合（Iterable）

### 集合

- 集合是一个对象，表示一组对象，这些对象称为元素。
- 可迭代对象是一种集合
- 集合可以是空的，也可以包含许多元素
- 集合可以具有不同的结构和实现
- 常见集合类型：List(通过索引读取元素)、Set(用于包含只能出现一次的元素)、Map(用于使用键读取元素)

### 可迭代

- 可以顺序访问的元素的集合
- 在 Dart 中，可迭代是一个抽象类，不能直接实例化

```text
Iterable<int> iterable = [1,2,3];
```

### 使用 elementAt 读取可迭代对象中的元素

```text
Iterable<int> iterable = [1,2,3];
int value = iterable[1] // 报错，无法通过 [] 这种方式来读取可迭代对象里的元素
int value = iterable.elementAt(1) // 使用 elementAt() 来读取可迭代对象中的元素
```

### 使用 for..in 来顺序读取可迭代对象中的元素

```text
const iterable = ['a', 'b', 'c'];
for (item in iterable) {
  print(item)
}
```

### 使用first、last 来读取可迭代对象的第一个或最后一个元素

```text
const iterable = ['a', 'b', 'c'];
print('第一个元素： ${iterable.first}'); // 'a'
print('最后一个元素： ${iterable.last}'); // 'b'
```

### 使用 firstWhere() 来查找第一个满足特定条件的元素，当未有满足条件的元素时，可调用 orElse 来处理

```text
const iterable = ['asss', 'bddddd', 'cddsaew'];


String element = iterable.firstWhere((element) => element.length > 5); 
print(element); // 'bddddd'



// 当未有满足条件的元素时，可调用 orElse 来处理
String a = iterable.firstWhere((element) => element.length > 10, orElse: () => '没找到满足条件的元素');
print(a); // '没找到满足条件的元素'

```

### 使用 where() 来查找所有满足特定条件的元素,如果没有元素满足，则返回空 Iterable

```text
// 查找所有偶数
var eventNums = const [-1,-2, 0,1,2,3,4,6].where((n) => n.isEven);

// 是否包含负数
var hasNegative = const [-1,-2, 0,1,2,3,4,6].any((n) => n.isNegative);

// 是否都大于 1
var everyLargeOne = const [-1,-2, 0,1,2,3,4,6].every((n) => n > 1);

```

### contains() && startWith()

- str.contains('xx') // 包含字符 xx
- str.startWith('xx') // 以字符 xx 开头

```text
String str = '111xxaaddxx';
print(str.contains('xx')); // true
print(str.startWith('xx')); // false
```

### 检查条件(every、any)

- 可以使用  for..in 来迭代检查每个元素是否符合条件
- 使用 every() 来验证，如果所有元素满足条件，返回 true
- 使用 any() 来验证，如果有一个元素满足条件，返回 true

```text
// 使用 for..in
bool getRes(List<String> items) {
  for (item in items) {
    if(item.length > 2) {
      return false
    }
  }
  return true
}


// 使用 every
bool getRes(List<String> items) {
  return items.every((item) => item.length > 2)
}


// 使用 any
bool getRes(List<String> items) {
  return items.every((item) => item.contains('xx'))
}
```

### takeWhile && skipWhile

- takeWhile: 从第一个元素开始到满足条件的前一个元素所组成的迭代对象
- skipWhile: 从满足条件的元素到末尾元素所组成的迭代对象

```text
const nums = [1,3,-2,0,4,5];

// 从第一个元素到满足元素等于0的前一个元素组成的对象
var numUntilZero = nums.takeWhile((n) => n != 0);
print(numUntilZero); // [1,3,-2]


// 从满足元素等于0到最后一个元素所组成的对象
var numStaringAtZero = nums.skipWhile((n) => n != 0);
print(numStaringAtZero); // [0,4,5]
```

### 使用 map() 迭代每个元素并应用对元素的处理

```text
const numbers = [1,2,3];
Iterable<int> res = numbers.map((num) => num * 10);
print(res); // [10,20,30];

Iterable<int> res1 = numbers.map((num) => num.toString);
print(res); // ['1','2','3'];

```

## 异步编程（Future 和 async await）
