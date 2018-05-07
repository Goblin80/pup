# BADR Interns Day 2018
## Intro
This is the BADRians way to say Hello !. Welcome to our geeky little nest.

## Pre-requisites 
#### Skills
We assume that you possess the following skills (Intermediate level)
- HTML/CSS/JS 
- Git 

## Preparation hint
We will be having Meteor & React, as our technology stack for this challenge. And we would advice you to familiarize yourself with the stack before coming to the challenge. Since the time would be somewhat tight if you started from scratch. 

We recommend the following : 
[Meteor/React getting started tutorial](https://www.meteor.com/tutorials/react/creating-an-app)

You might need to install Meteor first : [Install Meteor](https://www.meteor.com/install)


## About the challenge
We have a very simple app, to enable Engineers to request snacks and beverages from the company's kitchen team. The pain is that there are 4 appartments containing 4 kitchens. Some of the kitchens are having different types of beverages than the rest. And some of the service providers (Office boys), do unique things (Like salad preparation), while others are just specialized in bringing ready made or easy to prepare beverages. 

Our Sample App here, is a modified version of "Pup". A boilerplate that is intended to be a production ready starter kit for products built using Meteor & React : [Read the Documentation](http://cleverbeagle.com/pup)

You'll be required to complete a specific set of steps toward the goal of this challenge. But if you got yourself familiar with the above boilerplate's code before the challenge starts, you would have put yourself ahead of the pack, before even the challenge starts.

## Getting Started 
- First install the dependencies
```Bash
git clone https://github.com/mostafaelganainy/pup.git mySnackTime
cd mySnackTime && meteor npm install
meteor npm start
```

> Note : If you receive any errors in your terminal when you start up Pup related to `meteor npm install`, make sure to follow the suggested commands to ensure dependencies are properly installed.

- Then Signup users with emails : `officeboy1@yourdomain.com` & `officeboy2@yourdomain.com`
> Note : You can use a any email for the officeboy, we will assign him a role in a moment.

- Type in the command line : `meteor mongo` to open a mongo session

- In the mongo shell, assign to the new user the role of 'office-boy' :

```JavaScript
db.roles.insert({name: "office-boy"})

db.users.update(
  {
    emails: {
      $elemMatch: { 
        $or : [
          {
            address:"officeboy1@yourdomain.com"
          },
          {
            address:"officeboy2@yourdomain.com"
          }
        ]
      }
    }
  }, 
  {
    $addToSet: {roles: "office-boy"}
  }
)
```

- Now you're ready to signup with your email, and starting having your delicious snaks

- AND, you're ready to start BADR Intern's Day 2018 challenges. Get ready to have some fun !

---

Need help or questions ? contact us : hr@badrit.com
