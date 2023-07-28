#include <SoftwareSerial.h>
#include <Servo.h> //includes the servo library
#include <Wire.h> 
#include <LiquidCrystal_I2C.h>

SoftwareSerial nodemcu(0, 1);

LiquidCrystal_I2C lcd(0x27, 20, 4);

Servo myservo;

#define ir_enter 2
#define ir_back  4

#define ir_car1 5
#define ir_car2 6
#define ir_car3 7
#define ir_car4 8

int S1=0, S2=0, S3=0, S4=0;
int slot = 4;

void setup() {
  nodemcu.begin(9600);
  pinMode(ir_car1, INPUT);
  pinMode(ir_car2, INPUT);
  pinMode(ir_car3, INPUT);
  pinMode(ir_car4, INPUT);

  pinMode(ir_enter, INPUT);
  pinMode(ir_back, INPUT);

  Read_Sensor();

  int total = S1+S2+S3+S4;
  slot = slot-total;
}

void loop() {
  Read_Sensor();

  slot = S1 + S2 + S3 + S4;
  String concatenatedValue = String(slot);
  nodemcu.print(concatenatedValue);
  delay(1000);
}


void Read_Sensor(){
S1=0, S2=0, S3=0, S4=0;

if(digitalRead(ir_car1) == 0){S1=1;}
if(digitalRead(ir_car2) == 0){S2=1;}
if(digitalRead(ir_car3) == 0){S3=1;}
if(digitalRead(ir_car4) == 0){S4=1;}
}
