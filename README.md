## step to setup project with typescript and express

1. npm init -y

2. first install typescript as dev dependency

-- npm i -D typescript
-- npm i concurrently (for running multiple script concurrently)

3. run command 
-- npx tsc --init or tsc --init

4. Add following scripts to package.json

    "scripts": {
        "build": "npx tsc",
        "watch": "npx tsc -w",
        "prestart": "npm run build",
        "start": "npx nodemon dist/index.js",
        "dev": "npx concurrently \"npm run watch\" \"npm start\""
    },

Note: make relevent config changes to tsconfig.json file

5. npm run dev