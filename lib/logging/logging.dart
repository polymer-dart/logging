class Logger {
 String name;  
 factory Logger(String name) {
   return new Logger._(name);
 }

 Logger._(this.name) {
 }

 fine(String message,[arg1,arg2,arg3,arg4]){
   print(message);
 }

 info(String message,[arg1,arg2,arg3,arg4]) {
   print(message);
 }

 error(String message,[arg1,arg2,arg3,arg4]) {
   print(message);
 }

 debug(String message,[arg1,arg2,arg3,arg4]) {
   print(message);
 }

 severe(String message,[arg1,arg2,arg3,arg4]) {
   print(message);
 }
}
