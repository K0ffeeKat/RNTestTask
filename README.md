# RNTestTask

Things implemented in this project:

- the app fetches all data and stores it in a separate array in a MobX store
- when a user selects a pic from the gallery, the app send all data about this pic to another array in the MobX store and uses it to render the pic and its info to other screens
- user can pinch-zoom a photo if it is in fullscreen
- user can change the view of the list by tapping the switch in the main menu
- user can create an account or log in with their credentials
- the authentication is provided by Google Firebase, implemented with MobX

Login credentials
    login: test@test.com
    password: 1234567

For any access-related errors try:
    chmod 755 android/gradlew