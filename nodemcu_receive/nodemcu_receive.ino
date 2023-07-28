#include <SoftwareSerial.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

SoftwareSerial nodemcu(D5, D6);

const char* ssid = "xxxx";  // replace with your wifi name
const char* password = "xxxx"; // replace with your wifi password
const char* serverIP = "xxx.xxx.xx.xxx";  // Replace with your Node.js server IP address
const int serverPort = 5000; 

String serverName = "http://xxx.xxx.xx.xxx:5000/data";

int data;
int data1, data2;
String ch;
char b[4];
int i = 0;

WiFiClient client;
unsigned long lastTime = 0;
unsigned long timerDelay = 20000;

void setup() {
  // Initialize Serial port
  Serial.begin(9600);
  nodemcu.begin(9600);

  WiFi.begin(ssid, password);
}

void loop() {
  data = nodemcu.read();
  ch = String(data);
  //delay(1000);
  Serial.write(data);
  delay(1000);
  
  if ((millis() - lastTime) > timerDelay) {
    //Check WiFi connection status
    if(WiFi.status()== WL_CONNECTED){
      WiFiClient client;
      HTTPClient http;
      
      // Your Domain name with URL path or IP address with path
      http.begin(client, serverName);
  
      // Specify content-type header
      http.addHeader("Content-Type", "application/x-www-form-urlencoded");
                 
      // Send HTTP POST request
      int httpResponseCode = http.POST(ch);
      
     
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
        
      // Free resources
      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }
}
