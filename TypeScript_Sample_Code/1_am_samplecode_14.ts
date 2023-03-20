{
  //タプル型にAnyTypeという名前を付与
  type AnyType = [string, number, boolean];
  //AnyType型の変数valを定義
  let val: AnyType = ["abc", 12, false];
  let val2: AnyType = ["abc", "12", false]; //エラー

  //共用型の場合
  type OrType = number | boolean;
}
