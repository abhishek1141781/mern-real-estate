# 1. npm create vite@latest client

    React JavaScript + SWC

    cd client
    npm i

# install tailwind

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

# 2.

apply base classes of tailwind css in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# 3. Create pages and routes

    npm i react-router-dom

# 4. Intellisense supposedly not working

    <Route path='/' element={<Home />} />
    Home.jsx needs to be open in the tab, for the Home component to be auto imported 'import stmt'

# 5. warn on 'npm run dev'

    warn - No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.
    warn - https://tailwindcss.com/docs/content-configuration

# 6. Create Header section

    Add Header component to App.jsx inside BrowserRouter above Routes for it to be present on all pages

    change
        <div>Header</div>
    to the below: for SEO Purposes, something meaningful
        <header>Header</header>

                                for mobile  for pc          flex-wrap: so that both elements(Thal & Estate) come on top of each other in mobile
    <h1 className='font-bold    text-sm     sm:text-xl flex flex-wrap'>

                                        add shadow below the box
    <header className='bg-slate-200 shadow-md'>

    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        flex: get elements in the div in front of each other
        justify-between :  space between items
        items-center : align items vertically in center
        max-w-6xl :  set a maximum width of 1152px (for responsiveness)
        mx-auto :  make container centered from left and right
        p-3 :  padding around content

## npm i react-icons

    className="bg-transparent focus:outline-none w-24 sm:w-64"
        small devices: w-24
        small and above : w-64

# 7. create backend server

    init json file in project root for 'render' platform to detect while deploying

    npm i express

    node index.js


    Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

    Add this to package.json
        "type": "module",

    npm i nodemon

    mv .git ../ to move git from inside client folder to the root project folder: AMAZING

# 8. connect to database

    npm i mongoose

    abhishek1141mernrealestate

    npm i dotenv

# 9. create user model

# 10. create a test api route

# 11. create a signup api route

    npm i bcryptjs

# 12. create a middle ware and a function to handle errors

      return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        messgage: messgage,
      })

    after ES6, if key and value are same then can be written as this also, it's correct
      return res.status(statusCode).json({
        success: false,
        statusCode,
        messgage,
      })

# 13. complete signup page UI

# 14. complete singup page functionality

    add unchanged eventlistener to input

    prevents from refreshing the page on form submission
    e.preventDefault();

    not safe to send data like this
    const res = await fetch("/api/auth/signup", formData);

    stringify and send it



    ISSUE: If user clicks Signup without filling any field, we get a "unexpected end of JSON input" error. Now what happens is both servers crash needing manual intervention to restart, nothing much is to be done to get them up and running, just make a minor change just so that we can save that file again and the server refreshes and is back up and running again, NOW, what can we do to avoid this

    clicking signup button without entering any data, clietside and backend servers both crashed, THEY ONLY start once i resave the files on both servers

```log
        7:03:18 pm [vite] http proxy error at /api/auth/signup:
        Error: read ECONNRESET
        at TCP.onStreamRead (node:internal/stream_base_commons:217:20)
        7:03:41 pm [vite] http proxy error at /api/auth/signup:
        Error: connect ECONNREFUSED ::1:3000
        at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1494:16)


    C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\bcryptjs\dist\bcrypt.js:189
                throw Error("Illegal arguments: "+(typeof s)+', '+(typeof salt));
                      ^

    Error: Illegal arguments: undefined, string
        at bcrypt.hashSync (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\bcryptjs\dist\bcrypt.js:189:19)
        at signup (file:///C:/Users/abhis/Desktop/Project/VVIMP%20Projects%20Guthub/Private%20Github%20Uploads/RealEstate%20MERN/api/controllers/auth.controller.js:6:37)
        at Layer.handle [as handle_request] (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\layer.js:95:5)
        at next (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\route.js:144:13)
        at Route.dispatch (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\route.js:114:3)
        at Layer.handle [as handle_request] (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\layer.js:95:5)
        at C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\index.js:284:15
        at Function.process_params (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\index.js:346:12)
        at next (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\index.js:280:10)
        at Function.handle (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\express\lib\router\index.js:175:3)

    Node.js v18.16.1
    [nodemon] app crashed - waiting for file changes before starting...
```

    the error object has 3 fields
        message: "E11000 duplicate key error collection: realEstateCluster.users index: userName_1 dup key: { userName: null }"
        statusCode: 500
        success: false

# 15. create signin api route

    authenticate the user if both email and password is correct:
        add a cookie inside the users browser
        create a hashed token that contains the email of the user and save it as a cookie in the browser

    for authentication
        npm i jsonwebtoken

```log
    MongooseServerSelectionError: connect ETIMEDOUT
    13.200.184.169:27017
        at _handleConnectionErrors (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\mongoose\lib\connection.js:829:11)
        at NativeConnection.openUri (C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\RealEstate MERN\node_modules\mongoose\lib\connection.js:804:11)
        at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
      reason: TopologyDescription {
        type: 'ReplicaSetNoPrimary',
        servers: Map(3) {
          'ac-iwox5tm-shard-00-02.pvrelsx.mongodb.net:27017' => [ServerDescription],
          'ac-iwox5tm-shard-00-00.pvrelsx.mongodb.net:27017' => [ServerDescription],
          'ac-iwox5tm-shard-00-01.pvrelsx.mongodb.net:27017' => [ServerDescription]
        },
        stale: false,
        compatible: true,
        heartbeatFrequencyMS: 10000,
        localThresholdMS: 15,
        setName: 'atlas-ktr4jn-shard-0',
        maxElectionId: null,
        maxSetVersion: null,
        commonWireVersion: 0,
        logicalSessionTimeoutMinutes: 30
      },
      code: undefined
    }

```

# const { password: pass, ...rest} = validUserDetail.\_doc;

    So, in summary, this line of code extracts the password property from the validUserDetail._doc object and assigns it to a variable called pass. It then collects any other properties of validUserDetail._doc into a new object called rest. This can be useful, for example, if you need to handle the password separately from the rest of the user details.

# 16. complete singin page functionlity

# 17. add redux toolkit

    npm install @reduxjs/toolkit
    npm install react-redux

# 18. add redux persist to not lose state if page reloaded

    npm i redux-persist

    user details not getting persisted in google Chrome, but it's good in Brave

# 19. Add google oauth component

    npm i firebase

    If a user is already signed in and it's details are already set in localstorage
    Then if a new user signs in, error is encountered and null is set in localstorage along with the error that no username was encountered

# 20. Update header and make profile page private

# 21. Complete profile page UI

# 22. complete image upload functionality

# 23.create update user API route

    npm i cookie-parser

    error occured while testing update user api, even though upon checking the mongo db, I saw that the username changed successfully

    {
    "success": false,
    "statusCode": 500,
    "message": "Cannot destructure property 'password' of 'updateUser._doc' as it is undefined."
    }

    'updateUser._doc' = > updatedUser._doc

# 24. complete update user functionality

# 25. delete user functionality

# 26. add signout user functionality

# 27. add create listing api route

# 28. complete create listing page UI

# 29. completed upload listing images functionality

# 30. completed create Listing page functionality

# 31. created getUserListing Api route

# 32. completed show user listings functionality

# 33. completed delete user listings functionality

# 34. creaeted update listing api route

# 35. completed upddate listing api route

    unable to get data to populate the create/update listing form
    Uncaught (in promise) SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON

```js
  useEffect(() => {
    const fetchListing = async () => {
      const listingId = params.listingId;

    // the below url would send request to the backedn like this
      const res = await fetch(`api/listing/get/${listingId}`);
    // which get's converted like this automatically
      const res = await fetch(`http://localhost:5173/api/listing/get/${listingId}`);
    // but somehow when i logged data on console is saw something like this, it was causing incoming res to be like xml instead of json
      **http://localhost:5173/update-listing/api/listing/get/${listingId}**

      const data = await res.json();

      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormData(data);
    };

// this is the line causing the error
    fetchListing();
  }, []);

```

# How i fixed it

```js
const res = await fetch(
  `/api/listing/get/${listingId}`
  // `http://localhost:5173/api/listing/get/${listingId}`
);
```

once i used explicit url to check first if the api is working and it was alright so then i changed it back to original as u can see and it worked, puzzling really!!?

# 36. added image slider to lsiting page

    npm i swiper

# 37. complete lsiting page and ContactLandlord

# 38. created search API route

# 39. completed headerSearch functionality

# 40. created search Page UI

# 41. completed search page API logic

# 42. created listing item component and showed listings

npm i -D @tailwindcss/line-clamp

# 43. add show more listings functionality


