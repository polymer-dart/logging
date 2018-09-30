class Logger {
 String name;  
 factory Logger(String name) {
   return new Logger._(name);
 }

 Logger._(this.name) {
 }

 fine(String message){
   print(message);
 }

 info(String message) {
   print(message);
 }

 error(String message) {
   print(message);
 }

 debug(String message) {
   print(message);
 }
}
