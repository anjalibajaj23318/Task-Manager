## **Technical Assessment**

**This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app@latest`]**

## Simple Task Manager application using Next.js

This app has the following features:
1. Task input form
2. Task list display
3. Task edit function
4. Task delete function

## Project Directory Structure

```
 
├─── Pages/index.js
│ Components:
   │ Task.js  
   | TaskinputForm.js
   │ TaskList.js
├───node_modules
├───package.json
```

## Getting Started

Prerequisite:

```
cd Desktop
git clone "https://github.com/anjalibajaj23318/Task-Manager.git"
cd Task-Manager
npm install (to install the packages)
npm run dev (since, this is the development server)
```

## Implementation

```
npx create-next-app@latest

This will ask for few commands which will ask you to download some features:(As per new Next.js Update)
1. What is your project named? task-manager
2. Would you like to use TypeScript with this project? No
3. Would you like to use ESLint with this project? › No 
4. Would you like to use Tailwind CSS with this project? › No 
5. Would you like to use `src/` directory with this project? › No 
6. Would you like to use experimental `app/` directory with this project? … No

Since, I built a basic next.js application.


2. I installed material-ui as mentioned in the email for the task.
npm install @mui/material
npm install @mui/icons-material


```

## Information about the components

1. TaskInputform:

```
It has 2 textfields for title and description respectively, and it is getting props from index.js for form submission as well as for check form validation for both title and description and search functioanlity.

```

2. TaskList

```

Passing the necessary information into Task Component with key to keep track the list changes and uupdation.

```

3. Task

```
It is a reusable component where each task is dispalyed in card with different icons as well as option for deleting and editing.

```

## I have tried to achieve teh basic functionality as mentione din the email with some styling using the material ui.

## For Bonus Part

1. Implement server-side rendering (SSR) or static site generation (SSG) using Next.js features to improve the performance of the application.
 ```
 I have tried to implement server-side rendering in the application :
Since, I have used getServerSideProps (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by getServerSideProps. 

As, it is used when you need at the time of request time and it only runs on the server-side and donot run on the client-sde.
I want to pre-populate the data when the user visits the page. Since, I didnot call any API or database to fetch hence i passed pre-filled information to perform SSR on my website. This is very basic approach.

```

2. Implement persistent storage for tasks using localStorage, IndexedDB, or an external API, so that tasks are not lost when the page is refreshed.

```
This is partially working as I am able to store the value of the value provided from SSR but others are not being saved. I was not able to reproduce the error or had difficulty in understanding why it is giving me an error. I also tried to use an API that todoist which happens to have information related to task but was not able to follow it correct in the next.js as I am not aware of the proper functioning.

I tried to use normal localstorage and called it in useeffect to determine its value for to get load data.

Also, I have never used Indexed db hence, I tried to use lOcalStorage which I have seen while working in different applications.

```

3. Add basic form validation to the TaskInputForm, such as ensuring that the title and description fields are not empty.

```

I have added basic validation in textfield for both title and description. It is there in the TaskInputform.js file. I have used state variable which keeps track of the title error and description error and also added validation in the textfield.

```

4. Implement a search/filter functionality that allows users to filter the displayed tasks based on keywords in the title or description.

```

I have added serach filter at the top of the page, it is searching but snce local storage is not working correctly as there is an issue with my toLowerCase() function hence we have to deal with Cases manually and I tried all the thigns but for some reason description is always throwing an error. As well as, Since localStorage is not working properly hence it is only giving the data being passed at the time of server-side rendering.
```

## My learning throughout the project

```

Thanks to Autohost for giving me this opportunity so that I can learn Next.js where i implemented my knowledge which I learned throughout my experience.

I learned how to implement Server side rendering and local storage as well as debugging the errors as they came into my way.

I learnt how to start and write codes in Next.js and how they are called from root folder (pages/index.js).

I have faced few issues which I have mentioned and were not able to debug them correctly due to some knowledge gaps with Next.js and would love to learn them as I gain more experience with it.

```

## Resources I have used during this project:

```

1. Documentation
2. Youtube
3. Medium and other websites to understand the functionalities of Next.js
4. Material-ui documentation.
```
## Screenshots:

```
I have added screenshots of the web application in the following files:

1. Screenshot1
2. Screenshot2
3. Screenshot3
4. Screenshot4
```

## Future Consideration:

```
1. I will try to work on localStorage and also understanding the IndexedDB for which I have not worked on it.
2. I will also get more information on Server side rendering
3. I will also try to use Todoist API as I wanted to see how it will work.
```


