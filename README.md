# P12_SportSee_Malingre_Cedric

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/CedricMlg/P12_SportSee_Malingre_Cedric
   ```
2. Place yourself on the front part of the project
   ```sh
   cd SportSee-App-Front/
   ```
3. Install packages
   ```sh
   yarn
   ```
4. Launch project
   ```js
   yarn dev
   ```
5. Open project 
   <br />
   Click on the local link while pressing CTRL
   
### Switch between API and mock
   
The app can get data from the mock or the API, you can do the switch by going into the .env file at `P12_SportSee_Malingre_Cedric\SportSee-App-Front\.env`.

Change the value of `VITE_APP_USEMOCK`, 
    <br />
    true = data is obtained with the mock
    <br />
    false = data is obtained with the API
    
### WARNING
# If you put true as a value you'll need to the back part of the app, to do so follow these steps

1. Place yourself on the back part of the project
   ```sh
   cd SportSee-App-Back/
   ```
3. Install packages
   ```sh
   yarn
   ```
4. Launch project
   ```js
   yarn dev
   ```
   
You can now get the data directly from the API
