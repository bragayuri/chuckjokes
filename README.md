Mr. Norris is a web application that enables users to find out funny facts about Chuck Norris.
It is empowered with the Chuck Norris API.

 The aplication holds a solid stack and besides the minimalist design shows up quite simple, the code structure is strong and uses the latest 
 technologies available.
  The app was built in:
  - ReactJs (required for this challenge).
  - Typescript (I personally prefer typed languages as I come from a Java background plus it is more consistent and avoid bugs).
  - Tailwind (I am new to Tailwind and since the first project I had the chance to use it, I have prefered it over other Frameworks such Bootstrap. It offers more flexibility to create my own components and it decreases quite a lot the development time ).
  - Cypress (required for this challenge. Among all the technologies involved, this one is what devotes more my attention. It is great when it comes to cross-browser testing plus it is super user friendly and simple to set up).
  - Storybook (I have been also designing my projects following Atomic Design principles.And for that Storybook is just great! It enables me to isolate the components and work from a bottom-to-top level. That way the UI code remains isolated and following SOLID principals. Additionaly it provides great scalability and component reusage which decreases a lot the time spent on the UI component development )
 - i18n (To provide great accessibility to people from different backgrounds I decided to translate the main tags on the website to Portuguese, English and Arabic. I have also styled the components to RTL direction using a Tailwind plugin 
 https://www.npmjs.com/package/tailwindcss-rtl. I have implemented the flag buttons to translate the web app and transform the design from LTR to RTL dir).
 - Axios (For the API request I have used Axios which is one of the most popular promise-based HTTP client. I am more familiar with it and duo its simplicity I decided to implement it over the Next API ).
 - Chuck Norris API data retrieve https://api.chucknorris.io/
 - Vercel for deploying. Because the application is built with Next it does offer a great advantage when it comes to deploying using Vercel.It is simple and quite quick process. Additionaly it keeps updating its production version with every pull request approved which reduces development time and increases production.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


