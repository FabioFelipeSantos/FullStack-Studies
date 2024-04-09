# 1 Introduction: Deploying Websites

- Let's say that I created a web application that uses a database. Now, I want to share this app with anyone else on the web. For this purpose, I can use the *Hosting* service.
- Hosting is capable of making our app available to everyone. The hosting provider is a business that maintains all the resources needed to host applications. We can rent this service without worrying about all the configurations needed to make our website available.

## 1.1 Types of Hosting

- **Website Builders** -> These services build a website without manually writing code. They can arrange the hosting and management of several different components like database, emails, web servers, and everything else that we can imagine. Examples: *Wix*, *Squarespace*;
- **Shared Web Hosting** -> In these services, I rent a slice of a server and share this server with other people. This is a much cheaper service, but I will need to divide equally with my server partners. If my partners start using a lot of the available resources on our server, my application can suffer side effects such as slow traffic.
- **Dedicated Web Hosting** -> Now, I can rent the server just for me. In this case, I don't worry about the side effects of other users, but I will need to spend more money to rent.
- **Cloud Hosting** -> These services execute our application in the cloud. The cloud is basically a vast network of data centers and different computational resources available to consumers. It's more suitable when I want to run different parts of the application on different machines, to expand our app, or because the app needs different types of resources. The cloud hosting can be split into three branches: <span style="color: Aquamarine; font-size: 1.2em;"><em style="color: inherit; text-decoration: underline; text-underline-offset: 6px">Infrastructure as a Service （IaaS）, Platform as a Service （Paas）, Function as a Service （FaaS）</em></span>:
	- <span style="color: chartreuse; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Infrastructure as a Service （IaaS）</em></strong></span> -> In this service, I get the raw infrastructure resources. So, the cloud provider gives access to server, network, storage, and visualization, but I have to maintain the app with operational systems, middleware, runtime, data, and applications. In other words, the cloud provider must guarantee that our app will properly work, given all the server resources needed, like power, configurations, networking, etc.
	- <span style="color: chartreuse; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Platform as a Service （PaaS）</em></strong></span> -> Now, the cloud provider takes care of the servers and gives me a way to I run my app. Basically, the provider will take care of Network, Storage, Servers, Visualization, OS, Middleware, and Runtime. I only have to provide the correct data and app, and then the server does the rest of the job.
	- <span style="color: chartreuse; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Function as a Service （FaaS）</em></strong></span> -> With these services, the provider takes care of all of my apps; I only give him the data of the app and specific functions to the server. The provider will take care of creating, executing, and configuring any execution time needed for my functions.
- In this vast field of different providers, we can feel lost and overwhelmed about which service to choose. Three excellent choices are:
	- <span style="color: coral; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit; text-decoration: underline; text-underline-offset: 5px;">GitHub Pages</em></strong></span> -> This is the most simple and straightforward type of hosting. More suitable for static files, like simple HTML and CSS files, or a compiled version of a React app. If I just want a place to put a portfolio webpage, GitHub Pages is **FREE** and easy to use, and probably the best choice for me. ([GitHub Pages](https://pages.github.com/))
	-  <span style="color: coral; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit; text-decoration: underline; text-underline-offset: 5 px;">Heroku</em></strong></span> -> It's a great service for full-stack applications; for example, if I have a Node.js server and a SQL database, Heroku will help me to configure both quickly. Acts like a platform as a service. It has a free plan, which is a good start, but if I have an application prepared for production, it'll cost a lot of money. ([Cloud Application Platform | Heroku](https://www.heroku.com/home))
	-  <span style="color: coral; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit; text-decoration: underline; text-underline-offset: 5 px;">Digital Ocean</em></strong></span> -> It's a cloud provider that's easier to work with than Amazon or Google cloud providers, and isn't as complex as Heroku or other PasS. One positive point about Digital Ocean is that they have a lot of resources about how to begin. ([DigitalOcean | Cloud Infrastructure for Developers](https://www.digitalocean.com/))
	- Other two options are ([Scale & Ship Faster with a Composable Web Architecture | Netlify](https://www.netlify.com/)) and ([Vercel: Build and deploy the best Web experiences with The Frontend Cloud – Vercel](https://vercel.com/))

# 2 What is a Domain Name?

- The computers talk and identify themselves with <span style="color: khaki; font-size: 1.2em;"><em style="color: inherit; text-transform: capitalize">numbers by IP adresses</em></span>. The domain name is used to translate these numbers in names that we can remember.
- Domain names are registered and can be used for a website and / or an email account. These names are what users type into their browsers to find your website. So, often they are referred to as web addresses.
	- www.codecademy.com
	- www.google.com
	- www.github.com
- The DNS is used to translate the IP adresses in two numbers.
- When I type a domain name in the browser, my computer will check the *cache* to see if it is possible to get the website. If not, it'll go to the **Resolver Server**, which is my personal internet provider service. After the Resolver analysis, the name will go to the **Root Server**. In the hierarchy of the path that the name has to follow, the Root Server is at the top of this hierarchy. There are 13 Root Servers strategically placed throughout the world, and they are operated by different companies. Each set has its own unique IP address.
- The Root Server doesn't know the domain, but it knows where to send the domain to the Resolver to find it. So, the domain name comes back to the Resolver, and then it'll send to the **TLD Server**, the top level domain server. The TLD stores the information about the domain addresses of the top level and then sends this information back to the Resolver server, which sends this information to the **Name Server**.
- The Name server is responsible for knowing everything about the domain, including the IP address. This server is the final point and the final ruler. The domain is sent back to the computer with the website, and my computer will store this information in the cache, so next time it won't have to pass through all these steps again.

# 3 Deploying Vite App to GitHub Pages

## 3.1 Step 1: Initialize Git Repository

Run the following commands to initialize a git repository <span style="color: darkmagenta; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">in your Vite app</em></strong></span> and push your existing code to a remote repository on GitHub.

```shell title="Git commands in a Vite project"
$ git init  
$ git add .  
$ git commit -m "initial-commit"  
$ git branch -M main  
$ git remote add origin http://github.com/{username}/{repo-name}.git  
$ git push -u origin main
```

## 3.2 Step 2: Update vite.config.js

Add the base URL in this file by setting the `base` as `/{repo-name}/`. For example, if your repository’s name is `book-landing-page` then set the `base` like this:

```js title=vite.config.js
import { defineConfig } from 'vite'  
import react from '@vitejs/plugin-react'  
  
// https://vitejs.dev/config/  
export default defineConfig({  
  plugins: [react()],  
  base: "/book-landing-page/"  
})
```

## 3.3 Step 3: Install gh-pages

Install **gh-pages** package as a dev dependency.

```shell
npm install gh-pages --save-dev
```

## 3.4 Step 4: Update `package.json`

Update `package.json` with the following `predeploy` and `deploy` scripts.

```json
{
"scripts": {
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d dist",
    ...
}
```

Add the complete website URL by setting `homepage` in `package.json`

```json
{
	"homepage": "https://{username}.github.io/{repo-name}/"
}
```

Thus, your updated `package.json` will look like this:

```json
{  
  "name": "book-product",  
  "private": true,  
  "version": "0.0.0",  
  "homepage": "https://aishwaryaparab.github.io/book-landing-page/",  
  "type": "module",  
  "scripts": {  
    "predeploy" : "npm run build",  
    "deploy" : "gh-pages -d dist",  
    "dev": "vite",  
    "build": "vite build",  
    ...  
}
```

## 3.5 Step 5: Run Deploy

If you’ve made it till here, you’re almost there. Run the final command:

```shell
npm run deploy
```

## 3.6 Last step though!

Navigate to your remote repository on GitHub -> Settings -> Pages (left sidebar). Select source as “Deploy from branch” and branch as “gh-pages”.
![||750](https://miro.medium.com/v2/resize:fit:700/1*ybobpluBHeEmanhK7DmdNw.png)

GitHub Pages also allows you to set up your own custom domain.

Have some patience, wait for a few minutes and soon, your site will be live at [https://{username}.github.io/{repo-name}/](https://medium.com/@aishwaryaparab1/%7Busername%7D.github.io/%7Brepo-name%7D/)