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

# 6. 



