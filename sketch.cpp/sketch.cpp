#include <Arduino_MKRIoTCarrier.h>
#include "Adafruit_GFX.h"  // GFX library is already included for drawing text

MKRIoTCarrier carrier;



void setup() {
  Serial.begin(9600);
  while (!Serial);

  carrier.noCase();
  carrier.begin();
  carrier.display.setRotation(4);  // Set the rotation of the display if needed
  carrier.display.fillScreen(ST77XX_BLACK);  // Clear the screen

  // Set text color and size
  carrier.display.setTextColor(ST77XX_WHITE);  // Set text color to white
  carrier.display.setTextSize(2);              // Set text size (1 is default, 2 is bigger, etc.)

  // Print initial message to Serial Monitor
  Serial.println("Starting Sensor Readings...");
}

void loop() {
  // Read temperature and humidity from the sensor
  float temperature = carrier.Env.readTemperature();
  float temperature2 = carrier.Env.readTemperature(FAHRENHEIT);
  float humidity = carrier.Env.readHumidity();

  // Print the sensor values to Serial Monitor
  Serial.print("Temperature = ");
  Serial.print(temperature);
  Serial.println(" °C");
  Serial.print(temperature2);
  Serial.println(" °F");

  Serial.print("Humidity = ");
  Serial.print(humidity);
  Serial.println(" %");

  // Clear the display to prepare for new data
  carrier.display.fillScreen(ST77XX_BLACK);

  // Display the temperature and humidity on the screen
  carrier.display.setCursor(40, 40);  // Set the cursor to the starting position (X, Y)
  carrier.display.print("Temp: ");
  carrier.display.print(temperature);
  carrier.display.println(" C");
  carrier.display.setCursor(80, 80);  // Set the cursor to the starting position (X, Y)
  carrier.display.print(temperature2);
  carrier.display.println(" F");

  carrier.display.setCursor(15, 120);  // Set cursor to the next line for humidity
  carrier.display.print("Humidity: ");
  carrier.display.print(humidity);
  carrier.display.println(" %");

  // Wait for 1 min before updating the values again
  delay(120000);
}





//////////////////////////////////////
#include <Arduino_MKRIoTCarrier.h>
#include "Adafruit_GFX.h"  // GFX library is already included for drawing text

MKRIoTCarrier carrier;

void setup() {
  Serial.begin(9600);  // Initialize serial communication
  while (!Serial);     // Wait for Serial Monitor to open

  carrier.noCase();
  carrier.begin();
  carrier.display.setRotation(4);  // Set the rotation of the display if needed
  carrier.display.fillScreen(ST77XX_BLACK);  // Clear the screen

  // Set text color and size
  carrier.display.setTextColor(ST77XX_WHITE);  // Set text color to white
  carrier.display.setTextSize(2);              // Set text size (1 is default, 2 is bigger, etc.)

  // Print initial message to Serial Monitor
  Serial.println("Starting Sensor Readings...");

  // Read temperature and humidity from the sensor
  float temperature = carrier.Env.readTemperature();
  float humidity = carrier.Env.readHumidity();

  // Print the sensor values to Serial Monitor
  Serial.print("Temperature = ");
  Serial.print(temperature);
  Serial.println(" °C");

  Serial.print("Humidity = ");
  Serial.print(humidity);
  Serial.println(" %");

  // Clear the display to prepare for new data
  carrier.display.fillScreen(ST77XX_BLACK);

  // Display the temperature and humidity on the screen
  carrier.display.setCursor(10, 40);  // Set the cursor to the starting position (X, Y)
  carrier.display.print("Temp: ");
  carrier.display.print(temperature);
  carrier.display.println(" C");

  carrier.display.setCursor(10, 80);  // Set cursor to the next line for humidity
  carrier.display.print("Humidity: ");
  carrier.display.print(humidity);
  carrier.display.println(" %");

  // No loop needed, so just hang here indefinitely
  while (true) {
    // Keep the program running without doing anything
    // This prevents the board from restarting the program
  }
}


//////////////////////xxxx/////////////////
#include <Arduino_MKRIoTCarrier.h>
#include <WiFiNINA.h>  // Include the WiFiNINA library to connect to Wi-Fi
#include <ArduinoIoTCloud.h>  // Include the Arduino IoT Cloud library
#include <thingProperties.h>  // Include the thingProperties.h file (generated by the Arduino IoT Cloud)

MKRIoTCarrier carrier;

// Define IoT Cloud variables
float temperature;
float humidity;

void setup() {
  // Initialize serial communication
  Serial.begin(9600);
  while (!Serial);

  // Start the MKR IoT Carrier
  carrier.noCase();
  carrier.begin();
  carrier.display.setRotation(4);
  carrier.display.fillScreen(ST77XX_BLACK);

  // Set up Wi-Fi connection
  WiFi.begin(SSID, PASS);  // Replace SSID and PASS with your Wi-Fi credentials

  // Wait for Wi-Fi connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to Wi-Fi...");
  }

  Serial.println("Wi-Fi connected!");

  // Initialize the Arduino IoT Cloud
  ArduinoIoTCloud.begin(ArduinoIoTPreferredConnection);
  setBoardId(BOARD_ID);  // Replace with your board ID, found in the Arduino IoT Cloud
  initProperties();  // Initialize properties

  // Print initial message to Serial Monitor
  Serial.println("Starting Sensor Readings...");

  // Read initial sensor data and send to Cloud
  temperature = carrier.Env.readTemperature();
  humidity = carrier.Env.readHumidity();
  updateCloud();  // Send initial readings to the IoT Cloud

  // Display the values on the screen
  carrier.display.setTextColor(ST77XX_WHITE);
  carrier.display.setTextSize(2);

  carrier.display.setCursor(10, 40);
  carrier.display.print("Temp: ");
  carrier.display.print(temperature);
  carrier.display.println(" C");

  carrier.display.setCursor(10, 80);
  carrier.display.print("Humidity: ");
  carrier.display.print(humidity);
  carrier.display.println(" %");

  delay(2000);  // Delay for 2 seconds before sending data again
}

void loop() {
  // Update the sensor readings periodically
  temperature = carrier.Env.readTemperature();
  humidity = carrier.Env.readHumidity();

  // Send the new readings to the IoT Cloud
  updateCloud();

  // Wait for 1 second before taking new readings
  delay(1000);
}

// Function to update the values in the Cloud
void updateCloud() {
  // Update temperature and humidity in the Cloud
  temperature = carrier.Env.readTemperature();
  humidity = carrier.Env.readHumidity();
  
  // Push updated values to the cloud
  ArduinoIoTCloud.update();
}
